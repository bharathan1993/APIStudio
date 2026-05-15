import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const fetchdeploymentlogsEndpoint: ApiEndpoint = {
  "id": "fetchdeploymentlogs",
  "name": "Retrieve a deployment log",
  "description": "",
  "method": "GET",
  "path": "/deployment-manager/deployments/{migrationId}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "migrationId",
      "label": "Migration Id",
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
