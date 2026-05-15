import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getlistgroupsEndpoint: ApiEndpoint = {
  "id": "getlistgroups",
  "name": "List groups",
  "description": "",
  "method": "GET",
  "path": "/scim/v2/Groups",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "count",
      "label": "Count",
      "type": "number",
      "required": false
    },
    {
      "name": "filter",
      "label": "Filter",
      "type": "string",
      "required": false
    },
    {
      "name": "startIndex",
      "label": "Start Index",
      "type": "number",
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
