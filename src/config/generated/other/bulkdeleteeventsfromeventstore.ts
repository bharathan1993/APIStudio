import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const bulkdeleteeventsfromeventstoreEndpoint: ApiEndpoint = {
  "id": "bulkdeleteeventsfromeventstore",
  "name": "Bulk delete events from an event store",
  "description": "",
  "method": "POST",
  "path": "/meters/events/bulkDelete",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
