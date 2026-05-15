import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_storedcredentialprofilesEndpoint: ApiEndpoint = {
  "id": "get-storedcredentialprofiles",
  "name": "List stored credential profiles of a payment method",
  "description": "",
  "method": "GET",
  "path": "/v1/payment-methods/{payment-method-id}/profiles",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "payment-method-id",
      "label": "Payment Method Id",
      "type": "string",
      "required": true
    }
  ],
  "queryParams": [
    {
      "name": "includeAll",
      "label": "Include All",
      "type": "boolean",
      "required": false,
      "defaultValue": false
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
