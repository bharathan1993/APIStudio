import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const listprefetchauditrecordsEndpoint: ApiEndpoint = {
  "id": "listprefetchauditrecords",
  "name": "List prefetch audit records",
  "description": "",
  "method": "GET",
  "path": "/meters/{meterId}/prefetchAudit",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "meterId",
      "label": "Meter Id",
      "type": "number",
      "required": true
    }
  ],
  "queryParams": [
    {
      "name": "operatorId",
      "label": "Operator Id",
      "type": "string",
      "required": true
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "string",
      "required": false,
      "pattern": "^\\d{4}-\\d{2}-\\d{2}$"
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "string",
      "required": false,
      "pattern": "^\\d{4}-\\d{2}-\\d{2}$"
    },
    {
      "name": "triggerType",
      "label": "Trigger Type",
      "type": "string",
      "required": false,
      "enum": [
        "MANUAL",
        "AUTOMATIC"
      ]
    },
    {
      "name": "status",
      "label": "Status",
      "type": "array",
      "required": false,
      "itemType": "string",
      "itemEnum": [
        "RUNNING",
        "FINISHED",
        "FAILED",
        "CANCELED"
      ]
    },
    {
      "name": "pageSize",
      "label": "Page Size",
      "type": "number",
      "required": false,
      "defaultValue": 20
    },
    {
      "name": "cursor",
      "label": "Cursor",
      "type": "string",
      "required": false
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
