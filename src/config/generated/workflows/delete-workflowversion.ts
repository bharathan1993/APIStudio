import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_workflowversionEndpoint: ApiEndpoint = {
  "id": "delete-workflowversion",
  "name": "Delete a workflow version",
  "description": "",
  "method": "DELETE",
  "path": "/workflows/versions/{version_id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "version_id",
      "label": "Version Id",
      "type": "number",
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
