import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getaudittrailexportjobsEndpoint: ApiEndpoint = {
  "id": "getaudittrailexportjobs",
  "name": "Retrieve the list of export jobs for a meter",
  "description": "",
  "method": "GET",
  "path": "/meters/{meterId}/auditTrail/export",
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
      "name": "exportType",
      "label": "Export Type",
      "type": "string",
      "required": false,
      "enum": [
        "SAMPLE",
        "ERROR"
      ]
    },
    {
      "name": "sessionIds",
      "label": "Session Ids",
      "type": "array",
      "required": false,
      "itemType": "string"
    },
    {
      "name": "pageSize",
      "label": "Page Size",
      "type": "number",
      "required": false,
      "defaultValue": 30
    },
    {
      "name": "page",
      "label": "Page",
      "type": "number",
      "required": false,
      "defaultValue": 1
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
