import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getmetricsbysubscriptionnumbersEndpoint: ApiEndpoint = {
  "id": "getmetricsbysubscriptionnumbers",
  "name": "List subscription metrics by subscription numbers",
  "description": "",
  "method": "GET",
  "path": "/v1/subscriptions/subscription-metrics",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "asOfDay",
      "label": "As Of Day",
      "type": "string",
      "required": false
    },
    {
      "name": "subscriptionNumbers[]",
      "label": "Subscription Numbers[]",
      "type": "array",
      "required": true,
      "itemType": "string"
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
