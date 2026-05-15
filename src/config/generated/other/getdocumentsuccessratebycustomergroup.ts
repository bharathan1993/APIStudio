import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getdocumentsuccessratebycustomergroupEndpoint: ApiEndpoint = {
  "id": "getdocumentsuccessratebycustomergroup",
  "name": "List the document success rate metrics by customer group",
  "description": "",
  "method": "GET",
  "path": "/api/v1/metrics/customer_group_over_time",
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
