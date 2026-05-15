import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const truncateeventstoreEndpoint: ApiEndpoint = {
  "id": "truncateeventstore",
  "name": "Truncate all data from an event store",
  "description": "",
  "method": "POST",
  "path": "/meters/events/stores/{eventStoreId}/truncate",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "eventStoreId",
      "label": "Event Store Id",
      "type": "number",
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
