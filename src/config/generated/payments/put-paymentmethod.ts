import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_paymentmethodEndpoint: ApiEndpoint = {
  "id": "put-paymentmethod",
  "name": "Update a payment method",
  "description": "",
  "method": "PUT",
  "path": "/v1/payment-methods/{payment-method-id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "payment-method-id",
      "label": "Payment Method Id",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "accountHolderInfo",
      "label": "Account Holder Info",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "addressLine1",
          "label": "Address Line1",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "addressLine2",
          "label": "Address Line2",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "city",
          "label": "City",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "country",
          "label": "Country",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "email",
          "label": "Email",
          "type": "string",
          "required": false,
          "section": "Communication Settings"
        },
        {
          "name": "phone",
          "label": "Phone",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "state",
          "label": "State",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "zipCode",
          "label": "Zip Code",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Account Settings"
    },
    {
      "name": "accountKey",
      "label": "Account Key",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "authGateway",
      "label": "Auth Gateway",
      "type": "string",
      "required": false,
      "section": "Payment Settings"
    },
    {
      "name": "gatewayOptions",
      "label": "Gateway Options",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "key",
          "label": "Key",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "value",
          "label": "Value",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Payment Settings"
    },
    {
      "name": "maxConsecutivePaymentFailures",
      "label": "Max Consecutive Payment Failures",
      "type": "number",
      "required": false,
      "section": "Payment Settings"
    },
    {
      "name": "paymentRetryWindow",
      "label": "Payment Retry Window",
      "type": "number",
      "required": false,
      "section": "Payment Settings"
    },
    {
      "name": "currencyCode",
      "label": "Currency Code",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "ipAddress",
      "label": "Ip Address",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "mandateInfo",
      "label": "Mandate Info",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "mandateId",
          "label": "Mandate Id",
          "type": "string",
          "required": false,
          "maxLength": 36,
          "section": "Additional Fields"
        },
        {
          "name": "mandateReason",
          "label": "Mandate Reason",
          "type": "string",
          "required": false,
          "maxLength": 64,
          "section": "Additional Fields"
        },
        {
          "name": "mandateStatus",
          "label": "Mandate Status",
          "type": "string",
          "required": false,
          "maxLength": 64,
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "processingOptions",
      "label": "Processing Options",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "checkDuplicated",
          "label": "Check Duplicated",
          "type": "boolean",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "useDefaultRetryRule",
      "label": "Use Default Retry Rule",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "expirationMonth",
      "label": "Expiration Month",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "expirationYear",
      "label": "Expiration Year",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "securityCode",
      "label": "Security Code",
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
