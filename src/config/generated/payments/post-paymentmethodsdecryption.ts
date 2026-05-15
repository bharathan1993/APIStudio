import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_paymentmethodsdecryptionEndpoint: ApiEndpoint = {
  "id": "post-paymentmethodsdecryption",
  "name": "Create an Apple Pay payment method",
  "description": "",
  "method": "POST",
  "path": "/v1/payment-methods/decryption",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "accountID",
      "label": "Account I D",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "cardHolderInfo",
      "label": "Card Holder Info",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "addressLine1",
          "label": "Address Line1",
          "type": "string",
          "required": false,
          "maxLength": 255,
          "section": "Additional Fields"
        },
        {
          "name": "addressLine2",
          "label": "Address Line2",
          "type": "string",
          "required": false,
          "maxLength": 255,
          "section": "Additional Fields"
        },
        {
          "name": "cardHolderName",
          "label": "Card Holder Name",
          "type": "string",
          "required": false,
          "maxLength": 50,
          "section": "Account Settings"
        },
        {
          "name": "city",
          "label": "City",
          "type": "string",
          "required": false,
          "maxLength": 40,
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
          "maxLength": 80,
          "section": "Communication Settings"
        },
        {
          "name": "phone",
          "label": "Phone",
          "type": "string",
          "required": false,
          "maxLength": 40,
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
          "maxLength": 20,
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "integrationType",
      "label": "Integration Type",
      "type": "string",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "merchantID",
      "label": "Merchant I D",
      "type": "string",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "mitConsentAgreementSrc",
      "label": "Mit Consent Agreement Src",
      "type": "string",
      "required": false,
      "enum": [
        "External"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "invoiceId",
      "label": "Invoice Id",
      "type": "string",
      "required": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "mitProfileAction",
      "label": "Mit Profile Action",
      "type": "string",
      "required": false,
      "enum": [
        "Activate",
        "Persist"
      ],
      "section": "Communication Settings"
    },
    {
      "name": "mitProfileType",
      "label": "Mit Profile Type",
      "type": "string",
      "required": false,
      "enum": [
        "Recurring",
        "Unscheduled"
      ],
      "section": "Communication Settings"
    },
    {
      "name": "paymentGateway",
      "label": "Payment Gateway",
      "type": "string",
      "required": false,
      "section": "Payment Settings"
    },
    {
      "name": "paymentToken",
      "label": "Payment Token",
      "type": "object",
      "required": true,
      "section": "Payment Settings"
    },
    {
      "name": "processPayment",
      "label": "Process Payment",
      "type": "boolean",
      "required": false,
      "section": "Payment Settings"
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
