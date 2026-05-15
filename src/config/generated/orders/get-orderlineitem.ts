import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_orderlineitemEndpoint: ApiEndpoint = {
  "id": "get-orderlineitem",
  "name": "Retrieve an order line item",
  "description": "",
  "method": "GET",
  "path": "/v1/order-line-items/{itemId}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "itemId",
      "label": "Item Id",
      "type": "string",
      "required": true
    }
  ],
  "queryParams": [
    {
      "name": "fulfillment",
      "label": "Fulfillment",
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
