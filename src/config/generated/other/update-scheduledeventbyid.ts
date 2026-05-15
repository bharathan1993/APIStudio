import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const update_scheduledeventbyidEndpoint: ApiEndpoint = {
  "id": "update-scheduledeventbyid",
  "name": "Update a scheduled event by ID",
  "description": "",
  "method": "PUT",
  "path": "/events/scheduled-events/{id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "active",
      "label": "Active",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "condition",
      "label": "Condition",
      "type": "textarea",
      "required": false,
      "maxLength": 65535,
      "section": "Additional Fields"
    },
    {
      "name": "hours",
      "label": "Hours",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "minutes",
      "label": "Minutes",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "parameters",
      "label": "Parameters",
      "type": "object",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "displayName",
      "label": "Display Name",
      "type": "string",
      "required": false,
      "maxLength": 500,
      "minLength": 1,
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
