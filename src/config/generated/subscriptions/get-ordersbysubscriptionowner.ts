import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_ordersbysubscriptionownerEndpoint: ApiEndpoint = {
  "id": "get-ordersbysubscriptionowner",
  "name": "List orders of a subscription owner",
  "description": "",
  "method": "GET",
  "path": "/v1/orders/subscriptionOwner/{accountNumber}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "accountNumber",
      "label": "Account Number",
      "type": "string",
      "required": true
    }
  ],
  "queryParams": [
    {
      "name": "page",
      "label": "Page",
      "type": "number",
      "required": false,
      "defaultValue": 1
    },
    {
      "name": "pageSize",
      "label": "Page Size",
      "type": "number",
      "required": false,
      "defaultValue": 20
    },
    {
      "name": "dateFilterOption",
      "label": "Date Filter Option",
      "type": "string",
      "required": false
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "date",
      "required": false
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "date",
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
