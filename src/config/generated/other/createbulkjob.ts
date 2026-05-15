import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const createbulkjobEndpoint: ApiEndpoint = {
  "id": "createbulkjob",
  "name": "Create a bulk job",
  "description": "",
  "method": "POST",
  "path": "/bulk-data/bulk-jobs",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": true,
      "section": "Account Settings"
    },
    {
      "name": "customObjectNamespace",
      "label": "Custom Object Namespace",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "objectType",
      "label": "Object Type",
      "type": "string",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "mappings",
      "label": "Mappings",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "source",
          "label": "Source",
          "type": "string",
          "required": true,
          "section": "Additional Fields"
        },
        {
          "name": "target",
          "label": "Target",
          "type": "string",
          "required": true,
          "section": "Additional Fields"
        },
        {
          "name": "type",
          "label": "Type",
          "type": "string",
          "required": false,
          "enum": [
            "array",
            "string",
            "number",
            "boolean"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "arrayType",
          "label": "Array Type",
          "type": "string",
          "required": false,
          "enum": [
            "string",
            "number",
            "boolean"
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "headers",
      "label": "Headers",
      "type": "array",
      "required": false,
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "rowIdHeader",
      "label": "Row Id Header",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "delimiter",
      "label": "Delimiter",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "hasHeaders",
      "label": "Has Headers",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "fileType",
      "label": "File Type",
      "type": "string",
      "required": false,
      "enum": [
        "csv",
        "jsonl"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "jobType",
      "label": "Job Type",
      "type": "string",
      "required": false,
      "enum": [
        "Import",
        "Delete",
        "Update",
        "Cancel"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "isCustomObject",
      "label": "Is Custom Object",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "dataSourceType",
      "label": "Data Source Type",
      "type": "string",
      "required": false,
      "enum": [
        "UserUpload",
        "Salesforce",
        "Chargebee",
        "Stripe"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "systemType",
      "label": "System Type",
      "type": "string",
      "required": false,
      "enum": [
        "BILLING"
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
