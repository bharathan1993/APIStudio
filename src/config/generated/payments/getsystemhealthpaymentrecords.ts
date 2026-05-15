import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getsystemhealthpaymentrecordsEndpoint: ApiEndpoint = {
  "id": "getsystemhealthpaymentrecords",
  "name": "List payment system health records",
  "description": "",
  "method": "GET",
  "path": "/system-health/payments/details",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
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
      "name": "paymentGatewayType",
      "label": "Payment Gateway Type",
      "type": "string",
      "required": false
    },
    {
      "name": "paymentMethodType",
      "label": "Payment Method Type",
      "type": "string",
      "required": false
    },
    {
      "name": "paymentStatus",
      "label": "Payment Status",
      "type": "string",
      "required": false
    },
    {
      "name": "paymentGatewayResponseCode",
      "label": "Payment Gateway Response Code",
      "type": "string",
      "required": false
    },
    {
      "name": "currency",
      "label": "Currency",
      "type": "string",
      "required": false
    },
    {
      "name": "sort",
      "label": "Sort",
      "type": "string",
      "required": false
    },
    {
      "name": "startTime",
      "label": "Start Time",
      "type": "date",
      "required": true
    },
    {
      "name": "endTime",
      "label": "End Time",
      "type": "date",
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
