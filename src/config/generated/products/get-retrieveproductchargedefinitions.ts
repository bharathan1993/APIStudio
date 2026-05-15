import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_retrieveproductchargedefinitionsEndpoint: ApiEndpoint = {
  "id": "get-retrieveproductchargedefinitions",
  "name": "List product charge definitions",
  "description": "",
  "method": "GET",
  "path": "/v1/product-charge-definitions",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "charge",
      "label": "Charge",
      "type": "string",
      "required": false
    },
    {
      "name": "rateplan",
      "label": "Rateplan",
      "type": "string",
      "required": false
    },
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
