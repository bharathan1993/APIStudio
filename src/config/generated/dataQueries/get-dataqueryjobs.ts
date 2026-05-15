import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_dataqueryjobsEndpoint: ApiEndpoint = {
  "id": "get-dataqueryjobs",
  "name": "List data query jobs",
  "description": "",
  "method": "GET",
  "path": "/query/jobs",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "queryStatus",
      "label": "Query Status",
      "type": "string",
      "required": false,
      "enum": [
        "accepted",
        "in_progress",
        "completed",
        "failed",
        "cancelled"
      ]
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
