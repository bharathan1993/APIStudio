import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getapplycreditmemoasyncjobEndpoint: ApiEndpoint = {
  "id": "getapplycreditmemoasyncjob",
  "name": "Retrieve an async unapply credit memo job by ID",
  "description": "",
  "method": "GET",
  "path": "/v1/credit-memos/apply-async-jobs/{applyAsyncJobId}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "applyAsyncJobId",
      "label": "Apply Async Job Id",
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
