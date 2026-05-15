import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_rampmetricsbysubscriptionkeyEndpoint: ApiEndpoint = {
  "id": "get-rampmetricsbysubscriptionkey",
  "name": "List ramp metrics by subscription key",
  "description": "",
  "method": "GET",
  "path": "/v1/subscriptions/{subscriptionKey}/ramp-metrics",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "subscriptionKey",
      "label": "Subscription Key",
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
