import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getrunstatusofspecificmeterversionEndpoint: ApiEndpoint = {
  "id": "getrunstatusofspecificmeterversion",
  "name": "Retrieve the run status of a specific meter version",
  "description": "",
  "method": "GET",
  "path": "/meters/{meterId}/{version}/runStatus",
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
    },
    {
      "name": "version",
      "label": "Version",
      "type": "string",
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
