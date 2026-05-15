import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const syncdeploymenttemplateEndpoint: ApiEndpoint = {
  "id": "syncdeploymenttemplate",
  "name": "Sync a deployment template with latest changes",
  "description": "",
  "method": "POST",
  "path": "/deployment-manager/deployment_templates/sync",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
