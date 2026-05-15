import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_workflowstaskrerunEndpoint: ApiEndpoint = {
  "id": "post-workflowstaskrerun",
  "name": "Rerun a workflow task",
  "description": "",
  "method": "POST",
  "path": "/workflows/tasks/{task_id}/rerun",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "task_id",
      "label": "Task Id",
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
