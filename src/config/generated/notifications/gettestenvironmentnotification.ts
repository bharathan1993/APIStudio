import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const gettestenvironmentnotificationEndpoint: ApiEndpoint = {
  "id": "gettestenvironmentnotification",
  "name": "Retrieve a notification response of a test environment",
  "description": "",
  "method": "GET",
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
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
