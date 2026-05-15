import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getcustomergroupmetricsEndpoint: ApiEndpoint = {
  "id": "getcustomergroupmetrics",
  "name": "List the customer group metrics",
  "description": "",
  "method": "GET",
  "path": "/api/v1/metrics/customer_group",
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
