import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_attachmentslistEndpoint: ApiEndpoint = {
  "id": "get-attachmentslist",
  "name": "List attachments by object type and key",
  "description": "",
  "method": "GET",
  "path": "/v1/attachments/{object-type}/{object-key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "object-type",
      "label": "Object Type",
      "type": "string",
      "required": true,
      "enum": [
        "account",
        "invoice",
        "subscription",
        "creditmemo",
        "debitmemo"
      ]
    },
    {
      "name": "object-key",
      "label": "Object Key",
      "type": "string",
      "required": true
    }
  ],
  "queryParams": [
    {
      "name": "page",
      "label": "Page",
      "type": "number",
      "required": false,
      "defaultValue": 1
    },
    {
      "name": "pageSize",
      "label": "Page Size",
      "type": "number",
      "required": false,
      "defaultValue": 20
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
