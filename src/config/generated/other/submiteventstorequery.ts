import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const submiteventstorequeryEndpoint: ApiEndpoint = {
  "id": "submiteventstorequery",
  "name": "Submit an event store query",
  "description": "",
  "method": "POST",
  "path": "/meters/event-store-queries",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "query",
      "label": "Query",
      "type": "string",
      "required": true,
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
