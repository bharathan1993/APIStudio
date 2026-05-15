import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_workflowexportEndpoint: ApiEndpoint = {
  "id": "get-workflowexport",
  "name": "Export a workflow version",
  "description": "",
  "method": "GET",
  "path": "/workflows/{workflow_id}/export",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "workflow_id",
      "label": "Workflow Id",
      "type": "number",
      "required": true
    }
  ],
  "queryParams": [
    {
      "name": "version",
      "label": "Version",
      "type": "string",
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
