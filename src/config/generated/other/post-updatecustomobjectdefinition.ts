import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_updatecustomobjectdefinitionEndpoint: ApiEndpoint = {
  "id": "post-updatecustomobjectdefinition",
  "name": "Update a custom object definition",
  "description": "",
  "method": "POST",
  "path": "/objects/migrations",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "actions",
      "label": "Actions",
      "type": "array",
      "required": true,
      "itemType": "object",
      "itemFields": [
        {
          "name": "enableCreateRecordAuditing",
          "label": "Enable Create Record Auditing",
          "type": "boolean",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "enableDeleteRecordAuditing",
          "label": "Enable Delete Record Auditing",
          "type": "boolean",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "field",
          "label": "Field",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "auditable",
              "label": "Auditable",
              "type": "boolean",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "definition",
              "label": "Definition",
              "type": "object",
              "required": false,
              "fields": [
                {
                  "name": "default",
                  "label": "Default",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "displayName",
                  "label": "Display Name",
                  "type": "boolean",
                  "required": false,
                  "section": "Account Settings"
                },
                {
                  "name": "format",
                  "label": "Format",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "label",
                  "label": "Label",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "maxLength",
                  "label": "Max Length",
                  "type": "number",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "multiselect",
                  "label": "Multiselect",
                  "type": "boolean",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "origin",
                  "label": "Origin",
                  "type": "string",
                  "required": false,
                  "enum": [
                    "custom"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "type",
                  "label": "Type",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "filterable",
              "label": "Filterable",
              "type": "boolean",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "name",
              "label": "Name",
              "type": "string",
              "required": false,
              "section": "Account Settings"
            },
            {
              "name": "required",
              "label": "Required",
              "type": "boolean",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "targetName",
              "label": "Target Name",
              "type": "string",
              "required": false,
              "section": "Account Settings"
            },
            {
              "name": "unique",
              "label": "Unique",
              "type": "boolean",
              "required": false,
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "label",
          "label": "Label",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "namespace",
          "label": "Namespace",
          "type": "string",
          "required": true,
          "section": "Account Settings"
        },
        {
          "name": "object",
          "label": "Object",
          "type": "string",
          "required": true,
          "section": "Additional Fields"
        },
        {
          "name": "relationship",
          "label": "Relationship",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "cardinality",
              "label": "Cardinality",
              "type": "string",
              "required": false,
              "enum": [
                "manyToOne"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "fields",
              "label": "Fields",
              "type": "object",
              "required": true,
              "section": "Additional Fields"
            },
            {
              "name": "namespace",
              "label": "Namespace",
              "type": "string",
              "required": true,
              "section": "Account Settings"
            },
            {
              "name": "object",
              "label": "Object",
              "type": "string",
              "required": true,
              "section": "Additional Fields"
            },
            {
              "name": "recordConstraints",
              "label": "Record Constraints",
              "type": "object",
              "required": false,
              "fields": [
                {
                  "name": "create",
                  "label": "Create",
                  "type": "object",
                  "required": false,
                  "fields": [
                    {
                      "name": "enforceValidMapping",
                      "label": "Enforce Valid Mapping",
                      "type": "boolean",
                      "required": false,
                      "defaultValue": true,
                      "section": "Additional Fields"
                    }
                  ],
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "type",
          "label": "Type",
          "type": "string",
          "required": true,
          "enum": [
            "addField",
            "deleteField",
            "updateField",
            "updateObject",
            "renameField",
            "addRelationship",
            "deleteRelationship"
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
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
