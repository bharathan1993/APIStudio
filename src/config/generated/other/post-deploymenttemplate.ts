import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_deploymenttemplateEndpoint: ApiEndpoint = {
  "id": "post-deploymenttemplate",
  "name": "Create a deployment template",
  "description": "",
  "method": "POST",
  "path": "/deployment-manager/deployment_templates",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "content",
      "label": "Content",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "customFields",
          "label": "Custom Fields",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "errors",
              "label": "Errors",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            },
            {
              "name": "originalPayload",
              "label": "Original Payload",
              "type": "object",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "response",
              "label": "Response",
              "type": "array",
              "required": false,
              "itemType": "object",
              "itemFields": [
                {
                  "name": "componentType",
                  "label": "Component Type",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "error",
                  "label": "Error",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "id",
                  "label": "Id",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "key",
                  "label": "Key",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "method",
                  "label": "Method",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "payload",
                  "label": "Payload",
                  "type": "object",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "result",
                  "label": "Result",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "segregationKey",
                  "label": "Segregation Key",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "templateId",
                  "label": "Template Id",
                  "type": "string",
                  "required": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "url",
                  "label": "Url",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "segregationKeys",
              "label": "Segregation Keys",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "customObjects",
          "label": "Custom Objects",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "errors",
              "label": "Errors",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            },
            {
              "name": "originalPayload",
              "label": "Original Payload",
              "type": "object",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "response",
              "label": "Response",
              "type": "array",
              "required": false,
              "itemType": "object",
              "itemFields": [
                {
                  "name": "componentType",
                  "label": "Component Type",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "error",
                  "label": "Error",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "id",
                  "label": "Id",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "key",
                  "label": "Key",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "method",
                  "label": "Method",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "payload",
                  "label": "Payload",
                  "type": "object",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "result",
                  "label": "Result",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "segregationKey",
                  "label": "Segregation Key",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "templateId",
                  "label": "Template Id",
                  "type": "string",
                  "required": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "url",
                  "label": "Url",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "segregationKeys",
              "label": "Segregation Keys",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "dataAccessControl",
          "label": "Data Access Control",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "errors",
              "label": "Errors",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            },
            {
              "name": "originalPayload",
              "label": "Original Payload",
              "type": "object",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "response",
              "label": "Response",
              "type": "array",
              "required": false,
              "itemType": "object",
              "itemFields": [
                {
                  "name": "componentType",
                  "label": "Component Type",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "error",
                  "label": "Error",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "id",
                  "label": "Id",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "key",
                  "label": "Key",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "method",
                  "label": "Method",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "payload",
                  "label": "Payload",
                  "type": "object",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "result",
                  "label": "Result",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "segregationKey",
                  "label": "Segregation Key",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "templateId",
                  "label": "Template Id",
                  "type": "string",
                  "required": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "url",
                  "label": "Url",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "segregationKeys",
              "label": "Segregation Keys",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "dataQuery",
          "label": "Data Query",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "errors",
              "label": "Errors",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            },
            {
              "name": "originalPayload",
              "label": "Original Payload",
              "type": "object",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "response",
              "label": "Response",
              "type": "array",
              "required": false,
              "itemType": "object",
              "itemFields": [
                {
                  "name": "componentType",
                  "label": "Component Type",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "error",
                  "label": "Error",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "id",
                  "label": "Id",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "key",
                  "label": "Key",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "method",
                  "label": "Method",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "payload",
                  "label": "Payload",
                  "type": "object",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "result",
                  "label": "Result",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "segregationKey",
                  "label": "Segregation Key",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "templateId",
                  "label": "Template Id",
                  "type": "string",
                  "required": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "url",
                  "label": "Url",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "segregationKeys",
              "label": "Segregation Keys",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "multiOrg",
          "label": "Multi Org",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "errors",
              "label": "Errors",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            },
            {
              "name": "originalPayload",
              "label": "Original Payload",
              "type": "object",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "response",
              "label": "Response",
              "type": "array",
              "required": false,
              "itemType": "object",
              "itemFields": [
                {
                  "name": "componentType",
                  "label": "Component Type",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "error",
                  "label": "Error",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "id",
                  "label": "Id",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "key",
                  "label": "Key",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "method",
                  "label": "Method",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "payload",
                  "label": "Payload",
                  "type": "object",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "result",
                  "label": "Result",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "segregationKey",
                  "label": "Segregation Key",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "templateId",
                  "label": "Template Id",
                  "type": "string",
                  "required": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "url",
                  "label": "Url",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "segregationKeys",
              "label": "Segregation Keys",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "notifications",
          "label": "Notifications",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "errors",
              "label": "Errors",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            },
            {
              "name": "originalPayload",
              "label": "Original Payload",
              "type": "object",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "response",
              "label": "Response",
              "type": "array",
              "required": false,
              "itemType": "object",
              "itemFields": [
                {
                  "name": "componentType",
                  "label": "Component Type",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "error",
                  "label": "Error",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "id",
                  "label": "Id",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "key",
                  "label": "Key",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "method",
                  "label": "Method",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "payload",
                  "label": "Payload",
                  "type": "object",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "result",
                  "label": "Result",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "segregationKey",
                  "label": "Segregation Key",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "templateId",
                  "label": "Template Id",
                  "type": "string",
                  "required": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "url",
                  "label": "Url",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "segregationKeys",
              "label": "Segregation Keys",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "organizationHierarchy",
          "label": "Organization Hierarchy",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "errors",
              "label": "Errors",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            },
            {
              "name": "originalPayload",
              "label": "Original Payload",
              "type": "object",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "response",
              "label": "Response",
              "type": "array",
              "required": false,
              "itemType": "object",
              "itemFields": [
                {
                  "name": "componentType",
                  "label": "Component Type",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "error",
                  "label": "Error",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "id",
                  "label": "Id",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "key",
                  "label": "Key",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "method",
                  "label": "Method",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "payload",
                  "label": "Payload",
                  "type": "object",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "result",
                  "label": "Result",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "segregationKey",
                  "label": "Segregation Key",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "templateId",
                  "label": "Template Id",
                  "type": "string",
                  "required": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "url",
                  "label": "Url",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "segregationKeys",
              "label": "Segregation Keys",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "productCatalog",
          "label": "Product Catalog",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "errors",
              "label": "Errors",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            },
            {
              "name": "originalPayload",
              "label": "Original Payload",
              "type": "object",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "response",
              "label": "Response",
              "type": "array",
              "required": false,
              "itemType": "object",
              "itemFields": [
                {
                  "name": "componentType",
                  "label": "Component Type",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "error",
                  "label": "Error",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "id",
                  "label": "Id",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "key",
                  "label": "Key",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "method",
                  "label": "Method",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "payload",
                  "label": "Payload",
                  "type": "object",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "result",
                  "label": "Result",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "segregationKey",
                  "label": "Segregation Key",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "templateId",
                  "label": "Template Id",
                  "type": "string",
                  "required": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "url",
                  "label": "Url",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "segregationKeys",
              "label": "Segregation Keys",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "settings",
          "label": "Settings",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "errors",
              "label": "Errors",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            },
            {
              "name": "originalPayload",
              "label": "Original Payload",
              "type": "object",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "response",
              "label": "Response",
              "type": "array",
              "required": false,
              "itemType": "object",
              "itemFields": [
                {
                  "name": "componentType",
                  "label": "Component Type",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "error",
                  "label": "Error",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "id",
                  "label": "Id",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "key",
                  "label": "Key",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "method",
                  "label": "Method",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "payload",
                  "label": "Payload",
                  "type": "object",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "result",
                  "label": "Result",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "segregationKey",
                  "label": "Segregation Key",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "templateId",
                  "label": "Template Id",
                  "type": "string",
                  "required": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "url",
                  "label": "Url",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "segregationKeys",
              "label": "Segregation Keys",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "workflows",
          "label": "Workflows",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "errors",
              "label": "Errors",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            },
            {
              "name": "originalPayload",
              "label": "Original Payload",
              "type": "object",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "response",
              "label": "Response",
              "type": "array",
              "required": false,
              "itemType": "object",
              "itemFields": [
                {
                  "name": "componentType",
                  "label": "Component Type",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "error",
                  "label": "Error",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "id",
                  "label": "Id",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "key",
                  "label": "Key",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "method",
                  "label": "Method",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "payload",
                  "label": "Payload",
                  "type": "object",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "result",
                  "label": "Result",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "segregationKey",
                  "label": "Segregation Key",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "templateId",
                  "label": "Template Id",
                  "type": "string",
                  "required": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "url",
                  "label": "Url",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "segregationKeys",
              "label": "Segregation Keys",
              "type": "array",
              "required": false,
              "itemType": "string",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "customFields",
      "label": "Custom Fields",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "customObjects",
      "label": "Custom Objects",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "notifications",
      "label": "Notifications",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "selectedComponents",
      "label": "Selected Components",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "componentType",
          "label": "Component Type",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "error",
          "label": "Error",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "id",
          "label": "Id",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "key",
          "label": "Key",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "method",
          "label": "Method",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "payload",
          "label": "Payload",
          "type": "object",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "result",
          "label": "Result",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "segregationKey",
          "label": "Segregation Key",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "templateId",
          "label": "Template Id",
          "type": "string",
          "required": false,
          "section": "Invoice & Document Settings"
        },
        {
          "name": "url",
          "label": "Url",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "settings",
      "label": "Settings",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "workflows",
      "label": "Workflows",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": true,
      "section": "Account Settings"
    },
    {
      "name": "templateTenant",
      "label": "Template Tenant",
      "type": "string",
      "required": true,
      "section": "Invoice & Document Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
