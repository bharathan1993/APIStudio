import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_customobjectbulkjobEndpoint: ApiEndpoint = {
  "id": "post-customobjectbulkjob",
  "name": "Submit a custom object bulk job",
  "description": "",
  "method": "POST",
  "path": "/objects/jobs",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "filter",
      "label": "Filter",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "conditions",
          "label": "Conditions",
          "type": "array",
          "required": true,
          "itemType": "object",
          "itemFields": [
            {
              "name": "field",
              "label": "Field",
              "type": "string",
              "required": true,
              "section": "Additional Fields"
            },
            {
              "name": "operator",
              "label": "Operator",
              "type": "string",
              "required": true,
              "enum": [
                "EQ",
                "GT",
                "LT",
                "GE",
                "LE"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "value",
              "label": "Value",
              "type": "string",
              "required": true,
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "object",
      "label": "Object",
      "type": "string",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "operation",
      "label": "Operation",
      "type": "string",
      "required": true,
      "enum": [
        "delete",
        "create",
        "update"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "namespace",
      "label": "Namespace",
      "type": "string",
      "required": true,
      "enum": [
        "default",
        "com_zuora"
      ],
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
