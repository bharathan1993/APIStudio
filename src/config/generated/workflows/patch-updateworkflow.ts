import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const patch_updateworkflowEndpoint: ApiEndpoint = {
  "id": "patch-updateworkflow",
  "name": "Update a workflow",
  "description": "",
  "method": "PATCH",
  "path": "/workflows/{workflow_id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "workflow_id",
      "label": "Workflow Id",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "active_workflow_version_id",
      "label": "Active Workflow Version Id",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
