import { useState, useEffect, useRef } from 'react';

interface JsonPreviewProps {
  data: Record<string, any>;
  title?: string;
  onSave?: () => void;
  onEdit?: (data: Record<string, any>) => void;
}

export const JsonPreview = ({ data, title = "Request Body Preview", onSave, onEdit }: JsonPreviewProps) => {
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState('');
  const [jsonError, setJsonError] = useState('');
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isEmpty = Object.keys(data).length === 0;

  const handleEnterEdit = () => {
    setEditText(JSON.stringify(data, null, 2));
    setJsonError('');
    setIsEditing(true);
  };

  const handleExitEdit = () => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    setIsEditing(false);
    setJsonError('');
  };

  const handleEditChange = (text: string) => {
    setEditText(text);
    setJsonError('');
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      if (!text.trim()) return;
      try {
        const parsed = JSON.parse(text);
        if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
          setJsonError('JSON must be an object { }');
          return;
        }
        setJsonError('');
        onEdit?.(parsed);
      } catch (e) {
        setJsonError((e as Error).message);
      }
    }, 500);
  };

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  const handleCopy = async () => {
    try {
      const textToCopy = isEditing ? editText : JSON.stringify(data, null, 2);
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (isEmpty && !isEditing) return null;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm dark:shadow-xl dark:shadow-black/20 transition-colors duration-200 animate-fadeIn">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-white flex items-center gap-2">
          <svg className="w-5 h-5 text-zuora-500 dark:text-zuora-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          {title}
        </h3>
        <div className="flex items-center gap-2">
          {onEdit && (
            isEditing ? (
              <button
                onClick={handleExitEdit}
                className="px-3 py-1.5 text-xs bg-zuora-600 hover:bg-zuora-500 text-white rounded-lg transition-colors border border-zuora-600 flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Done
              </button>
            ) : (
              <button
                onClick={handleEnterEdit}
                className="px-3 py-1.5 text-xs bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg transition-colors border border-slate-200 dark:border-slate-700 flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Edit
              </button>
            )
          )}
          {onSave && (
            <button
              onClick={onSave}
              className="px-3 py-1.5 text-xs bg-zuora-50 dark:bg-zuora-500/10 hover:bg-zuora-100 dark:hover:bg-zuora-500/20 text-zuora-700 dark:text-zuora-300 rounded-lg transition-colors border border-zuora-200 dark:border-zuora-500/30"
            >
              Save Request
            </button>
          )}
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 text-xs bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg transition-colors border border-slate-200 dark:border-slate-700"
          >
            {copied ? 'Copied!' : 'Copy JSON'}
          </button>
        </div>
      </div>

      <div className="relative">
        {isEditing ? (
          <>
            <textarea
              value={editText}
              onChange={(e) => handleEditChange(e.target.value)}
              spellCheck={false}
              className={`w-full bg-slate-50 dark:bg-slate-950 rounded-lg p-4 border shadow-inner font-mono text-sm leading-relaxed resize-none focus:outline-none focus:ring-2 transition-colors duration-200 min-h-[200px] max-h-[400px]
                text-slate-800 dark:text-emerald-400
                ${jsonError
                  ? 'border-rose-400 dark:border-rose-500 focus:ring-rose-400/40'
                  : 'border-slate-200 dark:border-slate-800 focus:ring-zuora-500/40'
                }`}
            />
            {jsonError && (
              <p className="mt-1.5 text-xs text-rose-500 dark:text-rose-400 flex items-center gap-1">
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                </svg>
                {jsonError}
              </p>
            )}
            {!jsonError && editText.trim() && (
              <p className="mt-1.5 text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Valid JSON — form fields updating automatically
              </p>
            )}
          </>
        ) : (
          <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 overflow-x-auto border border-slate-200 dark:border-slate-800 shadow-inner transition-colors duration-200 max-h-[400px]">
            <pre className="text-slate-800 dark:text-emerald-400 text-sm font-mono whitespace-pre-wrap leading-relaxed">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};
