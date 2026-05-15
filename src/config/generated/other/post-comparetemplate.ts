import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_comparetemplateEndpoint: ApiEndpoint = {
  "id": "post-comparetemplate",
  "name": "Compare settings between a source tenant and a target tenant",
  "description": "",
  "method": "POST",
  "path": "/deployment-manager/deployment_artifacts/compare",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "tenant",
      "label": "Tenant",
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
