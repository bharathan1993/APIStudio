import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const updatecallouttemplateEndpoint: ApiEndpoint = {
  "id": "updatecallouttemplate",
  "name": "Update a callout template",
  "description": "",
  "method": "PUT",
  "path": "/notifications/callout-templates/{id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "active",
      "label": "Active",
      "type": "boolean",
      "required": false,
      "defaultValue": true,
      "section": "Additional Fields"
    },
    {
      "name": "calloutBaseurl",
      "label": "Callout Baseurl",
      "type": "string",
      "required": false,
      "minLength": 10,
      "section": "Additional Fields"
    },
    {
      "name": "calloutHeaders",
      "label": "Callout Headers",
      "type": "object",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "calloutParams",
      "label": "Callout Params",
      "type": "object",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "calloutRetry",
      "label": "Callout Retry",
      "type": "boolean",
      "required": false,
      "defaultValue": true,
      "section": "Additional Fields"
    },
    {
      "name": "certificate",
      "label": "Certificate",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "confirmSuccessFromResponseContent",
      "label": "Confirm Success From Response Content",
      "type": "boolean",
      "required": false,
      "defaultValue": false,
      "section": "Additional Fields"
    },
    {
      "name": "customRequestBody",
      "label": "Custom Request Body",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "hmacAlgorithm",
      "label": "Hmac Algorithm",
      "type": "string",
      "required": false,
      "enum": [
        "MD5",
        "SHA-1",
        "SHA-224",
        "SHA-256",
        "SHA-384",
        "SHA-512"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "hmacData",
      "label": "Hmac Data",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "hmacKey",
      "label": "Hmac Key",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "hmacOutputFormat",
      "label": "Hmac Output Format",
      "type": "string",
      "required": false,
      "enum": [
        "BASE64",
        "HEX"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "hmacSecret",
      "label": "Hmac Secret",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "hmacValue",
      "label": "Hmac Value",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "httpMethod",
      "label": "Http Method",
      "type": "string",
      "required": false,
      "enum": [
        "POST",
        "GET",
        "PUT",
        "PATCH",
        "DELETE"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "useCustomRequestBody",
      "label": "Use Custom Request Body",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "requiredAuth",
      "label": "Required Auth",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "calloutAuth",
      "label": "Callout Auth",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "domain",
          "label": "Domain",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "password",
          "label": "Password",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "preemptive",
          "label": "Preemptive",
          "type": "boolean",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "username",
          "label": "Username",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "requiredOauth2",
      "label": "Required Oauth2",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "oauth2ProviderId",
      "label": "Oauth2 Provider Id",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": false,
      "maxLength": 255,
      "section": "Account Settings"
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
