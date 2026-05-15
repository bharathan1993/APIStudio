import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_createpaymentsessionEndpoint: ApiEndpoint = {
  "id": "post-createpaymentsession",
  "name": "Create a payment session",
  "description": "",
  "method": "POST",
  "path": "/web-payments/sessions",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "accountId",
      "label": "Account Id",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "authAmount",
      "label": "Auth Amount",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "currency",
      "label": "Currency",
      "type": "string",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "gatewayOptions",
      "label": "Gateway Options",
      "type": "object",
      "required": false,
      "section": "Payment Settings"
    },
    {
      "name": "paymentGateway",
      "label": "Payment Gateway",
      "type": "string",
      "required": false,
      "section": "Payment Settings"
    },
    {
      "name": "processPayment",
      "label": "Process Payment",
      "type": "boolean",
      "required": true,
      "section": "Payment Settings"
    },
    {
      "name": "storePaymentMethod",
      "label": "Store Payment Method",
      "type": "boolean",
      "required": false,
      "defaultValue": true,
      "section": "Payment Settings"
    },
    {
      "name": "invoices",
      "label": "Invoices",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "invoiceNumber",
          "label": "Invoice Number",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        }
      ],
      "section": "Invoice & Document Settings"
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
