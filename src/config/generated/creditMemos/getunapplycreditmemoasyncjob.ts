import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getunapplycreditmemoasyncjobEndpoint: ApiEndpoint = {
  "id": "getunapplycreditmemoasyncjob",
  "name": "Retrieve an async unapply credit memo job by ID",
  "description": "",
  "method": "GET",
  "path": "/v1/credit-memos/unapply-async-jobs/{unapplyAsyncJobId}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "unapplyAsyncJobId",
      "label": "Unapply Async Job Id",
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
