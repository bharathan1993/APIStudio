import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_paymentitempartEndpoint: ApiEndpoint = {
  "id": "get-paymentitempart",
  "name": "Retrieve a payment part item",
  "description": "",
  "method": "GET",
  "path": "/v1/payments/{paymentKey}/parts/{partid}/item-parts/{itempartid}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "paymentKey",
      "label": "Payment Key",
      "type": "string",
      "required": true
    },
    {
      "name": "partid",
      "label": "Partid",
      "type": "string",
      "required": true
    },
    {
      "name": "itempartid",
      "label": "Itempartid",
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
