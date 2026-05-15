import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_retrieveproductrateplandefinitionsEndpoint: ApiEndpoint = {
  "id": "get-retrieveproductrateplandefinitions",
  "name": "List product rate plan definitions",
  "description": "",
  "method": "GET",
  "path": "/v1/product-rateplan-definitions",
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
