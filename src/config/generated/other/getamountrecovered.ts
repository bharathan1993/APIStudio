import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getamountrecoveredEndpoint: ApiEndpoint = {
  "id": "getamountrecovered",
  "name": "List the amount recovered metrics",
  "description": "",
  "method": "GET",
  "path": "/api/v1/metrics/amount_recovered",
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
