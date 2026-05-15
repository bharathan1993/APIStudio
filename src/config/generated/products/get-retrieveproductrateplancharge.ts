import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_retrieveproductrateplanchargeEndpoint: ApiEndpoint = {
  "id": "get-retrieveproductrateplancharge",
  "name": "Retrieve a product rate plan charge",
  "description": "",
  "method": "GET",
  "path": "/v1/product-rate-plan-charges/{product-rate-plan-charge-key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "product-rate-plan-charge-key",
      "label": "Product Rate Plan Charge Key",
      "type": "string",
      "required": true
    }
  ],
  "queryParams": [
    {
      "name": "show-charge-definitions",
      "label": "Show Charge Definitions",
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
