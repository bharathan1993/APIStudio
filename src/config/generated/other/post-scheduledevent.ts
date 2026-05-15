import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_scheduledeventEndpoint: ApiEndpoint = {
  "id": "post-scheduledevent",
  "name": "Create a scheduled event",
  "description": "",
  "method": "POST",
  "path": "/events/scheduled-events",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "active",
      "label": "Active",
      "type": "boolean",
      "required": false,
      "defaultValue": true,
      "section": "Additional Fields"
    },
    {
      "name": "apiField",
      "label": "Api Field",
      "type": "string",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "apiObject",
      "label": "Api Object",
      "type": "string",
      "required": true,
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
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "minutes",
      "label": "Minutes",
      "type": "number",
      "required": true,
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
      "required": true,
      "maxLength": 500,
      "minLength": 1,
      "section": "Account Settings"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": true,
      "maxLength": 200,
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
