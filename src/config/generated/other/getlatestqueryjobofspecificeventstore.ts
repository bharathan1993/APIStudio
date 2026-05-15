import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getlatestqueryjobofspecificeventstoreEndpoint: ApiEndpoint = {
  "id": "getlatestqueryjobofspecificeventstore",
  "name": "Retrieve the latest query job of a specific event store",
  "description": "",
  "method": "GET",
  "path": "/meters/events/stores/{eventStoreId}/jobs/latest",
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
