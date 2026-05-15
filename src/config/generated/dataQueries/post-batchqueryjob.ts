import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_batchqueryjobEndpoint: ApiEndpoint = {
  "id": "post-batchqueryjob",
  "name": "Submit an aggregate query job",
  "description": "",
  "method": "POST",
  "path": "/v1/batch-query",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "dateTimeUtc",
      "label": "Date Time Utc",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "format",
      "label": "Format",
      "type": "string",
      "required": false,
      "enum": [
        "csv",
        "zip",
        "gzip"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "incrementalTime",
      "label": "Incremental Time",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "notifyUrl",
      "label": "Notify Url",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "nullReplacement",
      "label": "Null Replacement",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "offset",
      "label": "Offset",
      "type": "number",
      "required": false,
      "defaultValue": 0,
      "section": "Additional Fields"
    },
    {
      "name": "partner",
      "label": "Partner",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "project",
      "label": "Project",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "queries",
      "label": "Queries",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "apiVersion",
          "label": "Api Version",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "convertToCurrencies",
          "label": "Convert To Currencies",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "deleted",
          "label": "Deleted",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "column",
              "label": "Column",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "format",
              "label": "Format",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            }
          ],
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
          "name": "query",
          "label": "Query",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "type",
          "label": "Type",
          "type": "string",
          "required": false,
          "enum": [
            "zoql",
            "zoqlexport"
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "sourceData",
      "label": "Source Data",
      "type": "string",
      "required": false,
      "enum": [
        "LIVE"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "useQueryLabels",
      "label": "Use Query Labels",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "version",
      "label": "Version",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": false,
      "section": "Account Settings"
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
