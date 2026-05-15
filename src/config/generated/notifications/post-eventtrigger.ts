import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_eventtriggerEndpoint: ApiEndpoint = {
  "id": "post-eventtrigger",
  "name": "Create an event trigger",
  "description": "",
  "method": "POST",
  "path": "/events/event-triggers",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "active",
      "label": "Active",
      "type": "boolean",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "baseObject",
      "label": "Base Object",
      "type": "string",
      "required": true,
      "maxLength": 100,
      "minLength": 1,
      "section": "Additional Fields"
    },
    {
      "name": "condition",
      "label": "Condition",
      "type": "textarea",
      "required": true,
      "maxLength": 5000,
      "minLength": 1,
      "section": "Additional Fields"
    },
    {
      "name": "eventType",
      "label": "Event Type",
      "type": "object",
      "required": true,
      "fields": [
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
