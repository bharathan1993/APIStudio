import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_retrieveproductchargedefinitionEndpoint: ApiEndpoint = {
  "id": "get-retrieveproductchargedefinition",
  "name": "Retrieve a product charge definition",
  "description": "",
  "method": "GET",
  "path": "/v1/product-charge-definitions/{product-charge-definition-key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "product-charge-definition-key",
      "label": "Product Charge Definition Key",
      "type": "string",
      "required": true
    }
  ],
  "queryParams": [
    {
      "name": "hide-inherited-values",
      "label": "Hide Inherited Values",
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
