import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getaccountpaymentmethodcascadingEndpoint: ApiEndpoint = {
  "id": "getaccountpaymentmethodcascading",
  "name": "Retrieve configuration of cascading payment methods for an account",
  "description": "",
  "method": "GET",
  "path": "/v1/accounts/{account-key}/payment-methods/cascading",
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
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
