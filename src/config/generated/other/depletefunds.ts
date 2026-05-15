import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const depletefundsEndpoint: ApiEndpoint = {
  "id": "depletefunds",
  "name": "Deplete funds",
  "description": "",
  "method": "POST",
  "path": "/v1/prepaid-balance-funds/deplete",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "fundIds",
      "label": "Fund Ids",
      "type": "object",
      "required": false,
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
