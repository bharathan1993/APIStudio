import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import type { ApiEndpoint, FieldDefinition } from '../types/api';
import { FormField } from './FormField';
import { FieldSection } from './FieldSection';
import { EnvironmentSelector } from './EnvironmentSelector';

interface ApiFormProps {
  endpoint: ApiEndpoint;
  onSubmit: (data: any, customHeaders?: Record<string, string>, pathParams?: Record<string, any>) => void;
  isLoading: boolean;
  formId?: string;
  showSubmit?: boolean;
  selectedEnvironmentId?: string;
  onEnvironmentChange?: (environmentId: string) => void;
  onFormDataChange?: (data: any) => void;
  onHeadersChange?: (headers?: Record<string, string>) => void;
  onPathParamsChange?: (pathParams?: Record<string, any>) => void;
  prefillData?: Record<string, any>;
  prefillHeaders?: Record<string, string>;
  prefillPathParams?: Record<string, any>;
  prefillId?: string;
}

type HeaderRow = {
  id: string;
  key: string;
  value: string;
};

const createHeaderRow = (): HeaderRow => ({
  id: typeof crypto?.randomUUID === 'function'
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
  key: '',
  value: '',
});

export const ApiForm = ({
  endpoint,
  onSubmit,
  isLoading,
  formId,
  showSubmit = true,
  selectedEnvironmentId,
  onEnvironmentChange,
  onFormDataChange,
  onHeadersChange,
  onPathParamsChange,
  prefillData,
  prefillHeaders,
  prefillPathParams,
  prefillId
}: ApiFormProps) => {
  const [activeTab, setActiveTab] = useState<'body' | 'headers'>('body');
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [pathParams, setPathParams] = useState<Record<string, any>>({});
  const [customHeaders, setCustomHeaders] = useState<HeaderRow[]>([createHeaderRow()]);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [jsonMode, setJsonMode] = useState(false);
  const [jsonText, setJsonText] = useState('');
  const [jsonError, setJsonError] = useState('');
  const [fieldRefOpen, setFieldRefOpen] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const touchedFieldsRef = useRef<Set<string>>(new Set());
  const jsonDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Group fields by section
  const groupedFields = useMemo(() => {
    const required: FieldDefinition[] = [];
    const sections: Record<string, FieldDefinition[]> = {};

    endpoint.bodyFields?.forEach((field) => {
      if (field.required && !field.section) {
        required.push(field);
      } else if (field.section) {
        if (!sections[field.section]) {
          sections[field.section] = [];
        }
        sections[field.section].push(field);
      } else {
        // Optional fields without section go to "Additional Fields"
        if (!sections['Additional Fields']) {
          sections['Additional Fields'] = [];
        }
        sections['Additional Fields'].push(field);
      }
    });

    return { required, sections };
  }, [endpoint]);

  useEffect(() => {
    // Initialize form with default values
    const initData: Record<string, any> = {};
    const initExpanded: Record<string, boolean> = {};
    const initPathParams: Record<string, any> = {};

    endpoint.bodyFields?.forEach((field) => {
      if (field.required && field.defaultValue !== undefined) {
        initData[field.name] = field.defaultValue;
      }
      if (field.section) {
        // Default collapse 'Additional Fields', expand others by default
        if (field.section === 'Additional Fields') {
           initExpanded[field.section] = false;
        } else {
           initExpanded[field.section] = true; // Or use false if you prefer default collapsed
        }
      }
    });

    // Initialize path parameters
    endpoint.pathParams?.forEach((param) => {
      initPathParams[param.name] = param.defaultValue || '';
    });

    // Ensure all sections are initialized
    Object.keys(groupedFields.sections).forEach(section => {
        if (expandedSections[section] === undefined) {
             initExpanded[section] = section !== 'Additional Fields';
        }
    });

    setFormData(initData);
    setPathParams(initPathParams);
    setExpandedSections(initExpanded);
    setCustomHeaders([createHeaderRow()]);
    setActiveTab('body');
    setJsonMode(false);
    setJsonText('');
    setJsonError('');
    setFieldRefOpen(false);
    touchedFieldsRef.current = new Set();
  }, [endpoint]); // Note: relying on endpoint change to reset

  const markTouched = (path: string) => {
    touchedFieldsRef.current.add(path);
  };

  const markTouchedFromObject = (obj: Record<string, any>, prefix = '') => {
    Object.entries(obj).forEach(([key, value]) => {
      const path = prefix ? `${prefix}.${key}` : key;
      if (Array.isArray(value)) {
        markTouched(path);
        value.forEach((item, index) => {
          const itemPath = `${path}[${index}]`;
          if (item && typeof item === 'object') {
            markTouchedFromObject(item, itemPath);
          } else {
            markTouched(itemPath);
          }
        });
        return;
      }
      if (value && typeof value === 'object') {
        markTouched(path);
        markTouchedFromObject(value, path);
        return;
      }
      markTouched(path);
    });
  };

  const hasTouched = (path: string) => {
    for (const touched of touchedFieldsRef.current) {
      if (touched === path || touched.startsWith(`${path}.`) || touched.startsWith(`${path}[`)) {
        return true;
      }
    }
    return false;
  };

  const isValueEmpty = (value: any) =>
    value === undefined || value === null || value === '';

  const buildRequestBody = () => {
    const buildFieldValue = (field: FieldDefinition, value: any, path: string): any => {
      if (!hasTouched(path)) {
        return undefined;
      }

      if (field.type === 'object') {
        const obj: Record<string, any> = {};
        field.fields?.forEach((subField) => {
          const subPath = `${path}.${subField.name}`;
          const subValue = buildFieldValue(subField, value?.[subField.name], subPath);
          if (subValue !== undefined) {
            obj[subField.name] = subValue;
          }
        });
        return Object.keys(obj).length ? obj : undefined;
      }

      if (field.type === 'array') {
        const items = Array.isArray(value) ? value : [];
        if (!items.length) return undefined;

        if (field.itemFields && field.itemFields.length > 0) {
          const mapped = items
            .map((item, index) => {
              const itemPath = `${path}[${index}]`;
              if (!hasTouched(itemPath)) return undefined;
              const obj: Record<string, any> = {};
              field.itemFields?.forEach((subField) => {
                const subPath = `${itemPath}.${subField.name}`;
                const subValue = buildFieldValue(subField, item?.[subField.name], subPath);
                if (subValue !== undefined) {
                  obj[subField.name] = subValue;
                }
              });
              return Object.keys(obj).length ? obj : undefined;
            })
            .filter((item) => item !== undefined);
          return mapped.length ? mapped : undefined;
        }

        const mapped = items
          .map((item, index) => {
            const itemPath = `${path}[${index}]`;
            if (!hasTouched(itemPath)) return undefined;
            return isValueEmpty(item) ? undefined : item;
          })
          .filter((item) => item !== undefined);

        return mapped.length ? mapped : undefined;
      }

      return isValueEmpty(value) ? undefined : value;
    };

    const result: Record<string, any> = {};
    endpoint.bodyFields?.forEach((field) => {
      const path = field.name;
      const value = buildFieldValue(field, formData[field.name], path);
      if (value !== undefined) {
        result[field.name] = value;
      }
    });
    if (endpoint.id === 'post-account' && result.autoPay === undefined) {
      result.autoPay = false;
    }
    return result;
  };

  const headersToRows = (headers?: Record<string, string>) => {
    if (!headers) return [createHeaderRow()];
    const entries = Object.entries(headers).filter(([, value]) => value !== '');
    if (!entries.length) return [createHeaderRow()];
    return entries.map(([key, value]) => ({
      ...createHeaderRow(),
      key,
      value,
    }));
  };

  const previewData = useMemo(() => buildRequestBody(), [formData, endpoint]);

  // Notify parent of filtered form data changes
  useEffect(() => {
    if (onFormDataChange) {
      onFormDataChange(previewData);
    }
  }, [previewData, onFormDataChange]);

  useEffect(() => {
    if (onHeadersChange) {
      const headerPairs = customHeaders
        .filter((header) => header.key.trim() !== '')
        .reduce<Record<string, string>>((acc, header) => {
          acc[header.key.trim()] = header.value;
          return acc;
        }, {});
      onHeadersChange(Object.keys(headerPairs).length ? headerPairs : undefined);
    }
  }, [customHeaders, onHeadersChange]);

  useEffect(() => {
    if (onPathParamsChange) {
      const hasAny = Object.values(pathParams).some((value) => value !== '' && value !== undefined && value !== null);
      onPathParamsChange(hasAny ? pathParams : undefined);
    }
  }, [pathParams, onPathParamsChange]);

  useEffect(() => {
    if (!prefillId) return;
    if (prefillData) {
      setFormData(prefillData);
      touchedFieldsRef.current = new Set();
      markTouchedFromObject(prefillData);
    } else {
      setFormData({});
      touchedFieldsRef.current = new Set();
    }
    setCustomHeaders(headersToRows(prefillHeaders));
    setPathParams(prefillPathParams || {});
  }, [prefillId]);

  const handleFieldChange = (fieldName: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handlePathParamChange = (paramName: string, value: any) => {
    setPathParams((prev) => ({
      ...prev,
      [paramName]: value,
    }));
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const expandAll = () => {
    const allExpanded = Object.keys(groupedFields.sections).reduce((acc, section) => {
      acc[section] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setExpandedSections(allExpanded);
  };

  const collapseAll = () => {
    const allCollapsed = Object.keys(groupedFields.sections).reduce((acc, section) => {
      acc[section] = false;
      return acc;
    }, {} as Record<string, boolean>);
    setExpandedSections(allCollapsed);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dataForSubmit = buildRequestBody();
    const headerPairs = customHeaders
      .filter((header) => header.key.trim() !== '')
      .reduce<Record<string, string>>((acc, header) => {
        acc[header.key.trim()] = header.value;
        return acc;
      }, {});

    onSubmit(
      dataForSubmit,
      Object.keys(headerPairs).length > 0 ? headerPairs : undefined,
      Object.keys(pathParams).length > 0 ? pathParams : undefined
    );
  };

  const loadExample = () => {
    if (endpoint.exampleRequest) {
      setFormData(endpoint.exampleRequest);
      touchedFieldsRef.current = new Set();
      markTouchedFromObject(endpoint.exampleRequest);
    }
  };

  const clearForm = () => {
    setFormData({});
    touchedFieldsRef.current = new Set();
  };

  const applyJsonToForm = useCallback((text: string) => {
    if (!text.trim()) return;
    try {
      const parsed = JSON.parse(text);
      if (typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)) {
        setFormData(parsed);
        touchedFieldsRef.current = new Set();
        markTouchedFromObject(parsed);
      }
    } catch {
      // silently ignore on mode-switch
    }
  }, []);

  const getFieldPlaceholder = (field: FieldDefinition): any => {
    if (field.defaultValue !== undefined) return field.defaultValue;
    switch (field.type) {
      case 'string':   return field.enum ? field.enum[0] : (field.placeholder ?? '');
      case 'number':   return 0;
      case 'boolean':  return false;
      case 'date':     return 'YYYY-MM-DD';
      case 'email':    return 'user@example.com';
      case 'textarea': return '';
      case 'array':
        if (field.itemFields?.length) {
          const item: Record<string, any> = {};
          field.itemFields.forEach(f => { item[f.name] = getFieldPlaceholder(f); });
          return [item];
        }
        return field.itemEnum?.length ? [field.itemEnum[0]] : [];
      case 'object':
        if (field.fields?.length) {
          const obj: Record<string, any> = {};
          field.fields.forEach(f => { obj[f.name] = getFieldPlaceholder(f); });
          return obj;
        }
        return {};
      default: return null;
    }
  };

  const generateJsonTemplate = (fields: FieldDefinition[]): Record<string, any> => {
    const required: Record<string, any> = {};
    const optional: Record<string, any> = {};
    fields.forEach(field => {
      if (field.required) {
        required[field.name] = getFieldPlaceholder(field);
      } else {
        optional[field.name] = null;
      }
    });
    return { ...required, ...optional };
  };

  const switchToJsonMode = () => {
    const current = previewData;
    if (Object.keys(current).length) {
      setJsonText(JSON.stringify(current, null, 2));
    } else if (endpoint.exampleRequest) {
      setJsonText(JSON.stringify(endpoint.exampleRequest, null, 2));
      applyJsonToForm(JSON.stringify(endpoint.exampleRequest));
    } else if (endpoint.bodyFields?.length) {
      const template = generateJsonTemplate(endpoint.bodyFields);
      setJsonText(JSON.stringify(template, null, 2));
    } else {
      setJsonText('{}');
    }
    setJsonError('');
    setJsonMode(true);
  };

  const switchToUiMode = () => {
    if (jsonDebounceRef.current) clearTimeout(jsonDebounceRef.current);
    applyJsonToForm(jsonText);
    setJsonMode(false);
    setJsonError('');
  };

  const handleJsonChange = (text: string) => {
    setJsonText(text);
    setJsonError('');
    if (jsonDebounceRef.current) clearTimeout(jsonDebounceRef.current);
    jsonDebounceRef.current = setTimeout(() => {
      if (!text.trim()) return;
      try {
        const parsed = JSON.parse(text);
        if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
          setJsonError('JSON must be an object { }');
          return;
        }
        setJsonError('');
        setFormData(parsed);
        touchedFieldsRef.current = new Set();
        markTouchedFromObject(parsed);
      } catch (e) {
        setJsonError((e as Error).message);
      }
    }, 500);
  };

  useEffect(() => {
    return () => {
      if (jsonDebounceRef.current) clearTimeout(jsonDebounceRef.current);
    };
  }, []);

  const formatDescription = (desc: string) => {
    if (!desc) return generateFallbackDescription();

    // Remove long "Note:" blocks and URLs often found in Zuora docs
    let cleaned = desc
      .split('**Note**:')[0]
      .split('**Important**:')[0]
      .split('For more information')[0]
      .split('See [')[0]
      .split('https://')[0]
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove markdown links
      .trim();

    // If description is too short or starts with unhelpful text, generate fallback
    if (cleaned.length < 10 || cleaned.startsWith('This operation') || cleaned.startsWith('Use this')) {
      return generateFallbackDescription();
    }

    // Take only the first 1-2 sentences (up to 200 chars)
    const sentences = cleaned.split(/[.!?]+\s/);
    const firstSentences = sentences.slice(0, 2).join('. ');

    // If still too long, truncate at 200 characters
    if (firstSentences.length > 200) {
      return firstSentences.substring(0, 200).trim() + '...';
    }

    return firstSentences + (firstSentences.endsWith('.') ? '' : '.');
  };

  const generateFallbackDescription = () => {
    const method = endpoint.method;
    const pathParts = endpoint.path.split('/').filter(Boolean);
    const resource = pathParts[pathParts.length - 1]?.replace(/[{}]/g, '').replace(/-/g, ' ');

    // Generate description based on method and resource
    const actionMap: Record<string, string> = {
      GET: 'Retrieves',
      POST: 'Creates',
      PUT: 'Updates',
      DELETE: 'Deletes',
      PATCH: 'Partially updates',
    };

    const action = actionMap[method] || 'Manages';
    const resourceName = resource || 'resource';

    return `${action} ${resourceName} information in Zuora.`;
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm dark:shadow-xl dark:shadow-black/20 transition-colors duration-200">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white tracking-tight">{endpoint.name}</h2>
          <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${
            endpoint.method === 'POST' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20' :
            endpoint.method === 'GET' ? 'bg-sky-50 dark:bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-200 dark:border-sky-500/20' :
            endpoint.method === 'PUT' ? 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-500/20' :
            endpoint.method === 'DELETE' ? 'bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-500/20' :
            'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600'
          }`}>
            {endpoint.method}
          </span>
        </div>
        <p className="text-slate-600 dark:text-slate-400 mb-4">{formatDescription(endpoint.description)}</p>

        {/* Environment Selector */}
        {endpoint.environments && endpoint.environments.length > 0 && selectedEnvironmentId && onEnvironmentChange && (
          <div className="mb-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors duration-200">
            <EnvironmentSelector
              environments={endpoint.environments}
              selectedEnvironmentId={selectedEnvironmentId}
              onEnvironmentChange={onEnvironmentChange}
            />
          </div>
        )}

        {/* Path Parameters */}
        {endpoint.pathParams && endpoint.pathParams.length > 0 && (
          <div className="mb-6 p-4 bg-gradient-to-r from-zuora-50 to-zuora-50 dark:from-zuora-500/10 dark:to-zuora-500/10 rounded-lg border border-zuora-200 dark:border-zuora-500/30 transition-colors duration-200">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-zuora-600 dark:text-zuora-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h4 className="font-semibold text-zuora-900 dark:text-zuora-300 text-sm uppercase tracking-wider">
                Path Parameters
              </h4>
            </div>
            <div className="space-y-3">
              {endpoint.pathParams.map((param) => (
                <div key={param.name}>
                  <FormField
                    field={param}
                    value={pathParams[param.name]}
                    onChange={(value) => handlePathParamChange(param.name, value)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Final URL */}
        {(() => {
          const selectedEnv = endpoint.environments?.find(env => env.id === selectedEnvironmentId);
          const baseUrl = selectedEnv?.baseUrl || endpoint.baseUrl;

          // Replace path parameters in the URL
          let finalPath = endpoint.path;
          if (endpoint.pathParams) {
            endpoint.pathParams.forEach((param) => {
              const value = pathParams[param.name] || `{${param.name}}`;
              finalPath = finalPath.replace(`{${param.name}}`, value);
            });
          }

          return (
            <div className="mb-6">
              <p className="text-xs text-slate-500 mb-1 font-medium uppercase tracking-wider">Endpoint URL:</p>
              <code className="text-sm bg-slate-100 dark:bg-slate-950 text-zuora-600 dark:text-zuora-300 px-3 py-2 rounded-lg block break-all border border-slate-200 dark:border-slate-800 font-mono transition-colors duration-200">
                {baseUrl}{finalPath}
              </code>
            </div>
          );
        })()}

        {/* Tabs */}
        <div className="border-b border-slate-200 dark:border-slate-800 flex items-end justify-between">
          <nav className="flex space-x-6">
            <button
              onClick={() => setActiveTab('body')}
              className={`pb-3 text-sm font-medium transition-colors border-b-2 ${
                activeTab === 'body'
                  ? 'border-zuora-600 dark:border-zuora-400 text-zuora-600 dark:text-zuora-400'
                  : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              Request Body
            </button>
            <button
              onClick={() => setActiveTab('headers')}
              className={`pb-3 text-sm font-medium transition-colors border-b-2 flex items-center gap-2 ${
                activeTab === 'headers'
                  ? 'border-zuora-600 dark:border-zuora-400 text-zuora-600 dark:text-zuora-400'
                  : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              Headers
              {customHeaders.some(h => h.key.trim() !== '') && (
                <span className="w-2 h-2 rounded-full bg-zuora-500"></span>
              )}
            </button>
          </nav>

          {/* UI / JSON mode toggle — only visible on the body tab */}
          {activeTab === 'body' && endpoint.bodyFields && endpoint.bodyFields.length > 0 && (
            <div className="flex items-center mb-1 bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5 gap-0.5">
              <button
                type="button"
                onClick={switchToUiMode}
                className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                  !jsonMode
                    ? 'bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h10M4 18h6" />
                </svg>
                UI
              </button>
              <button
                type="button"
                onClick={switchToJsonMode}
                className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                  jsonMode
                    ? 'bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                JSON
              </button>
            </div>
          )}
        </div>
      </div>

      <form id={formId} onSubmit={handleSubmit} className="space-y-6">
        
        {/* Body Tab */}
        <div className={activeTab === 'body' ? 'block' : 'hidden'}>
          {endpoint.bodyFields && endpoint.bodyFields.length > 0 ? (
            jsonMode ? (
              /* ── JSON editor mode ── */
              <div className="space-y-3">
                {/* Toolbar */}
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Edit the request payload as raw JSON. Changes sync to the form automatically.
                  </p>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    {endpoint.exampleRequest && (
                      <button
                        type="button"
                        onClick={() => {
                          const text = JSON.stringify(endpoint.exampleRequest, null, 2);
                          setJsonText(text);
                          applyJsonToForm(JSON.stringify(endpoint.exampleRequest));
                        }}
                        className="text-xs font-medium text-zuora-600 dark:text-zuora-400 hover:text-zuora-700 dark:hover:text-zuora-300 hover:underline transition-colors"
                      >
                        Load Example
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        const template = generateJsonTemplate(endpoint.bodyFields!);
                        const text = JSON.stringify(template, null, 2);
                        setJsonText(text);
                        applyJsonToForm(JSON.stringify(template));
                      }}
                      className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 hover:underline transition-colors"
                    >
                      Reset Template
                    </button>
                  </div>
                </div>

                {/* Textarea */}
                <div>
                  <textarea
                    value={jsonText}
                    onChange={(e) => handleJsonChange(e.target.value)}
                    spellCheck={false}
                    rows={16}
                    className={`w-full bg-slate-950 rounded-lg p-4 border font-mono text-sm leading-relaxed resize-y focus:outline-none focus:ring-2 transition-colors duration-200
                      text-emerald-400
                      ${jsonError
                        ? 'border-rose-500 focus:ring-rose-500/30'
                        : 'border-slate-700 focus:ring-zuora-500/30'
                      }`}
                  />
                  {jsonError ? (
                    <p className="mt-1.5 text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                      </svg>
                      {jsonError}
                    </p>
                  ) : jsonText.trim() ? (
                    <p className="mt-1.5 text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Valid JSON — preview and form fields updating automatically
                    </p>
                  ) : null}
                </div>

                {/* Field Reference panel */}
                <div className="rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setFieldRefOpen(o => !o)}
                    className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-left"
                  >
                    <span className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                      <svg className="w-3.5 h-3.5 text-zuora-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Field Reference
                      <span className="normal-case font-normal text-slate-400 dark:text-slate-500">
                        — {endpoint.bodyFields!.length} fields · click a name to copy
                      </span>
                    </span>
                    <svg
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${fieldRefOpen ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {fieldRefOpen && (
                    <div className="divide-y divide-slate-100 dark:divide-slate-800 max-h-72 overflow-y-auto">
                      {endpoint.bodyFields!.map(field => (
                        <div key={field.name} className="flex items-start gap-3 px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                          <button
                            type="button"
                            title="Click to copy field name"
                            onClick={() => {
                              navigator.clipboard.writeText(field.name).catch(() => {});
                              setCopiedField(field.name);
                              setTimeout(() => setCopiedField(null), 1500);
                            }}
                            className="font-mono text-xs text-zuora-600 dark:text-zuora-400 hover:text-zuora-700 dark:hover:text-zuora-300 hover:underline transition-colors flex-shrink-0 mt-0.5"
                          >
                            {copiedField === field.name ? (
                              <span className="text-emerald-500 dark:text-emerald-400">✓ copied</span>
                            ) : (
                              field.name
                            )}
                          </button>
                          <div className="flex items-center gap-1.5 flex-shrink-0 mt-0.5">
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                              {field.type}
                            </span>
                            {field.required && (
                              <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-500/20">
                                required
                              </span>
                            )}
                          </div>
                          {field.description && (
                            <p className="text-xs text-slate-400 dark:text-slate-500 truncate min-w-0">
                              {field.description.split('**Note**')[0].split('.')[0].trim()}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* ── UI form mode ── */
              <div className="space-y-4">
                <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
                  <div className="space-x-2">
                    <button
                      type="button"
                      onClick={expandAll}
                      className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      Expand All
                    </button>
                    <button
                      type="button"
                      onClick={collapseAll}
                      className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      Collapse All
                    </button>
                  </div>
                  <div className="space-x-4">
                    {endpoint.exampleRequest && (
                      <button
                        type="button"
                        onClick={loadExample}
                        className="text-xs font-medium text-zuora-600 dark:text-zuora-400 hover:text-zuora-700 dark:hover:text-zuora-300 hover:underline transition-colors"
                      >
                        Load Example
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={clearForm}
                      className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 hover:underline transition-colors"
                    >
                      Clear Form
                    </button>
                  </div>
                </div>

                {/* Required Fields */}
                {groupedFields.required.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="col-span-1 md:col-span-2">
                      <h4 className="font-semibold text-slate-500 dark:text-slate-300 flex items-center text-xs uppercase tracking-wider">
                        <span className="text-rose-500 mr-1">*</span>
                        Required
                      </h4>
                    </div>
                    {groupedFields.required.map((field) => (
                      <FormField
                        key={field.name}
                        field={field}
                        value={formData[field.name]}
                        onChange={(value) => handleFieldChange(field.name, value)}
                        onTouched={markTouched}
                        className={field.type === 'object' || field.type === 'array' || field.type === 'textarea' ? 'col-span-1 md:col-span-2' : ''}
                      />
                    ))}
                  </div>
                )}

                {/* Grouped Optional Fields */}
                {Object.entries(groupedFields.sections).map(([sectionName, fields]) => (
                  <FieldSection
                    key={sectionName}
                    title={sectionName}
                    fields={fields}
                    formData={formData}
                    onFieldChange={handleFieldChange}
                    onFieldTouched={markTouched}
                    defaultExpanded={false}
                    isAdvanced={sectionName === 'Additional Fields'}
                    isExpanded={expandedSections[sectionName]}
                    onToggle={() => toggleSection(sectionName)}
                  />
                ))}
              </div>
            )
          ) : (
            <div className="text-center py-8 text-slate-500 dark:text-slate-400 text-sm">
              No body parameters required for this request.
            </div>
          )}
        </div>

        {/* Headers Tab */}
        <div className={activeTab === 'headers' ? 'block' : 'hidden'}>
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">Custom Headers</h3>
              <button
                type="button"
                onClick={() => setCustomHeaders([...customHeaders, createHeaderRow()])}
                className="text-xs font-medium text-zuora-600 dark:text-zuora-400 hover:text-zuora-700 dark:hover:text-zuora-300 hover:underline transition-colors"
              >
                + Add Header
              </button>
            </div>
            
            <div className="space-y-3">
              {customHeaders.map((header, index) => (
                <div key={header.id} className="flex gap-2 items-start">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={header.key}
                      onChange={(e) => {
                        const next = [...customHeaders];
                        next[index] = { ...next[index], key: e.target.value };
                        setCustomHeaders(next);
                      }}
                      placeholder="Key"
                      className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-zuora-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      value={header.value}
                      onChange={(e) => {
                        const next = [...customHeaders];
                        next[index] = { ...next[index], value: e.target.value };
                        setCustomHeaders(next);
                      }}
                      placeholder="Value"
                      className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-zuora-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const next = customHeaders.filter((_, i) => i !== index);
                      setCustomHeaders(next.length ? next : [createHeaderRow()]);
                    }}
                    className="p-2 text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
                    aria-label="Remove header"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-4">
              Note: Common headers like 'Content-Type' and 'Authorization' are added automatically.
            </p>
          </div>
        </div>

        {showSubmit && (
          <div className="flex space-x-4 pt-4 border-t border-slate-200 dark:border-slate-700">
            <button
              type="submit"
              disabled={isLoading}
              className={`flex-1 bg-gradient-to-r from-zuora-600 to-zuora-600 text-white py-3 px-6 rounded-lg font-bold shadow-lg shadow-zuora-500/25 hover:shadow-zuora-500/40 hover:from-zuora-500 hover:to-zuora-500 focus:outline-none focus:ring-2 focus:ring-zuora-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 transition-all transform active:scale-[0.99] ${
                isLoading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? 'Executing...' : 'Execute API'}
            </button>
          </div>
        )}
      </form>
    </div>
  );
};
