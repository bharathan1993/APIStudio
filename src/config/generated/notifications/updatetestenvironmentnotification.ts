import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const updatetestenvironmentnotificationEndpoint: ApiEndpoint = {
  "id": "updatetestenvironmentnotification",
  "name": "Update a test environment notification",
  "description": "",
  "method": "PATCH",
  "path": "/test-environments/{id}/notifications/{notificationId}",
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
    },
    {
      "name": "notificationId",
      "label": "Notification Id",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "address",
      "label": "Address",
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
