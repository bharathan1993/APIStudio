import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_refunditempartEndpoint: ApiEndpoint = {
  "id": "get-refunditempart",
  "name": "Retrieve a refund part item",
  "description": "",
  "method": "GET",
  "path": "/v1/refunds/{refundKey}/parts/{refundpartid}/item-parts/{itempartid}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "refundKey",
      "label": "Refund Key",
      "type": "string",
      "required": true
    },
    {
      "name": "refundpartid",
      "label": "Refundpartid",
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
