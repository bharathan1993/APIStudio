import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const registerwalletdomainEndpoint: ApiEndpoint = {
  "id": "registerwalletdomain",
  "name": "Register a wallet domain",
  "description": "",
  "method": "POST",
  "path": "/v1/payment-methods/wallet/domains",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "domainName",
      "label": "Domain Name",
      "type": "string",
      "required": true,
      "section": "Account Settings"
    },
    {
      "name": "walletType",
      "label": "Wallet Type",
      "type": "string",
      "required": true,
      "enum": [
        "ApplePay",
        "GooglePay"
      ],
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
