import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_systemhealthapivolumesummaryEndpoint: ApiEndpoint = {
  "id": "get-systemhealthapivolumesummary",
  "name": "List API volume summary records",
  "description": "",
  "method": "GET",
  "path": "/system-health/api-requests/volume-summary",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "path",
      "label": "Path",
      "type": "string",
      "required": false
    },
    {
      "name": "httpMethod",
      "label": "Http Method",
      "type": "string",
      "required": false
    },
    {
      "name": "startTime",
      "label": "Start Time",
      "type": "date",
      "required": true
    },
    {
      "name": "endTime",
      "label": "End Time",
      "type": "date",
      "required": true
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
