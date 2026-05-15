import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_downloaddeploymenttemplateEndpoint: ApiEndpoint = {
  "id": "get-downloaddeploymenttemplate",
  "name": "Download a template",
  "description": "",
  "method": "GET",
  "path": "/deployment-manager/deployment_artifacts",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "deployment_template_id",
      "label": "Deployment Template Id",
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
