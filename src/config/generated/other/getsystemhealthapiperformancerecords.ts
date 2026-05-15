import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getsystemhealthapiperformancerecordsEndpoint: ApiEndpoint = {
  "id": "getsystemhealthapiperformancerecords",
  "name": "List API usage detail records",
  "description": "",
  "method": "GET",
  "path": "/system-health/api-requests/details",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
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
    },
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
      "name": "responseCode",
      "label": "Response Code",
      "type": "string",
      "required": false
    },
    {
      "name": "requestId",
      "label": "Request Id",
      "type": "string",
      "required": false
    },
    {
      "name": "trackId",
      "label": "Track Id",
      "type": "string",
      "required": false
    },
    {
      "name": "sort",
      "label": "Sort",
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
