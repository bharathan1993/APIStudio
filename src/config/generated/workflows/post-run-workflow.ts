import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_run_workflowEndpoint: ApiEndpoint = {
  "id": "post-run-workflow",
  "name": "Run a workflow",
  "description": "",
  "method": "POST",
  "path": "/workflows/{workflow_id}/run",
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
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
