import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_acountpaymentmethodsEndpoint: ApiEndpoint = {
  "id": "get-acountpaymentmethods",
  "name": "List payment methods of an account",
  "description": "",
  "method": "GET",
  "path": "/v1/accounts/{account-key}/payment-methods",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "account-key",
      "label": "Account Key",
      "type": "string",
      "required": true
    }
  ],
  "queryParams": [
    {
      "name": "isDefaultOnly",
      "label": "Is Default Only",
      "type": "boolean",
      "required": false
    },
    {
      "name": "isActiveOnly",
      "label": "Is Active Only",
      "type": "boolean",
      "required": false
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
