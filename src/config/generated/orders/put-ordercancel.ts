import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_ordercancelEndpoint: ApiEndpoint = {
  "id": "put-ordercancel",
  "name": "Cancel an order",
  "description": "",
  "method": "PUT",
  "path": "/v1/orders/{orderNumber}/cancel",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "orderNumber",
      "label": "Order Number",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "cancelReason",
      "label": "Cancel Reason",
      "type": "string",
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
