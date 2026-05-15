import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_query_notification_definitionsEndpoint: ApiEndpoint = {
  "id": "get-query-notification-definitions",
  "name": "List notification definitions",
  "description": "",
  "method": "GET",
  "path": "/notifications/notification-definitions",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "start",
      "label": "Start",
      "type": "number",
      "required": false,
      "defaultValue": 1
    },
    {
      "name": "limit",
      "label": "Limit",
      "type": "number",
      "required": false,
      "defaultValue": 20
    },
    {
      "name": "profileId",
      "label": "Profile Id",
      "type": "string",
      "required": false
    },
    {
      "name": "eventCategory",
      "label": "Event Category",
      "type": "number",
      "required": false
    },
    {
      "name": "eventTypeName",
      "label": "Event Type Name",
      "type": "string",
      "required": false
    },
    {
      "name": "emailTemplateId",
      "label": "Email Template Id",
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
