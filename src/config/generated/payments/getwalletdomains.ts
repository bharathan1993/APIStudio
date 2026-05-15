import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getwalletdomainsEndpoint: ApiEndpoint = {
  "id": "getwalletdomains",
  "name": "List registered domains",
  "description": "",
  "method": "GET",
  "path": "/v1/payment-methods/wallet/domains",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "domainName",
      "label": "Domain Name",
      "type": "string",
      "required": false
    },
    {
      "name": "walletType",
      "label": "Wallet Type",
      "type": "string",
      "required": true,
      "enum": [
        "ApplePay",
        "GooglePay"
      ]
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
