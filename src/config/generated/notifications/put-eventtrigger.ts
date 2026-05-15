import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_eventtriggerEndpoint: ApiEndpoint = {
  "id": "put-eventtrigger",
  "name": "Update an event trigger",
  "description": "",
  "method": "PUT",
  "path": "/events/event-triggers/{id}",
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
      "maxLength": 5000,
      "minLength": 1,
      "section": "Additional Fields"
    },
    {
      "name": "eventType",
      "label": "Event Type",
      "type": "object",
      "required": false,
      "fields": [
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
      "section": "Additional Fields"
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
