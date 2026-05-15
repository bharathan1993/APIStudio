import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_rsasignaturesEndpoint: ApiEndpoint = {
  "id": "post-rsasignatures",
  "name": "Generate an RSA signature",
  "description": "",
  "method": "POST",
  "path": "/v1/rsa-signatures",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "IBAN",
      "label": "I B A N",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "authorizationAmount",
      "label": "Authorization Amount",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "bankBranchCode",
      "label": "Bank Branch Code",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "bankCheckDigit",
      "label": "Bank Check Digit",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "bankCity",
      "label": "Bank City",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "bankPostalCode",
      "label": "Bank Postal Code",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "businessIdentificationCode",
      "label": "Business Identification Code",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "cityBlackList",
      "label": "City Black List",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "cityWhiteList",
      "label": "City White List",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "currency",
      "label": "Currency",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "deviceSessionId",
      "label": "Device Session Id",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "key",
      "label": "Key",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "locale",
      "label": "Locale",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "method",
      "label": "Method",
      "type": "string",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "pageId",
      "label": "Page Id",
      "type": "string",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "param_gwOptions_[*option*]",
      "label": "Param Gw Options [*option*]",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "param_supportedTypes",
      "label": "Param Supported Types",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "passthrough[1,2,3,4,5]",
      "label": "Passthrough[1,2,3,4,5]",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "pmId",
      "label": "Pm Id",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "signature",
      "label": "Signature",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "signatureType",
      "label": "Signature Type",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "style",
      "label": "Style",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "submitEnabled",
      "label": "Submit Enabled",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "tenantId",
      "label": "Tenant Id",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "token",
      "label": "Token",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "uri",
      "label": "Uri",
      "type": "string",
      "required": true,
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
      "name": "accountId",
      "label": "Account Id",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "bankStreetName",
      "label": "Bank Street Name",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "bankStreetNumber",
      "label": "Bank Street Number",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "gatewayName",
      "label": "Gateway Name",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "maxConsecutivePaymentFailures",
      "label": "Max Consecutive Payment Failures",
      "type": "number",
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
      "name": "paymentRetryWindow",
      "label": "Payment Retry Window",
      "type": "number",
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
