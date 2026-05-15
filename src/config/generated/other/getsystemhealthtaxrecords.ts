import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getsystemhealthtaxrecordsEndpoint: ApiEndpoint = {
  "id": "getsystemhealthtaxrecords",
  "name": "List tax system health records",
  "description": "",
  "method": "GET",
  "path": "/system-health/tax/details",
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
      "name": "vendorName",
      "label": "Vendor Name",
      "type": "string",
      "required": false
    },
    {
      "name": "eventType",
      "label": "Event Type",
      "type": "string",
      "required": false
    },
    {
      "name": "status",
      "label": "Status",
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
