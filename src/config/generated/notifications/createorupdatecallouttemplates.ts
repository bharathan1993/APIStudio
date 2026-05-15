import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const createorupdatecallouttemplatesEndpoint: ApiEndpoint = {
  "id": "createorupdatecallouttemplates",
  "name": "Create or update callout templates",
  "description": "",
  "method": "POST",
  "path": "/notifications/callout-templates/import",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "allowPartialSuccess",
      "label": "Allow Partial Success",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "calloutTemplates",
      "label": "Callout Templates",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
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
          "required": true,
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
          "name": "eventCategory",
          "label": "Event Category",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "eventTypeName",
          "label": "Event Type Name",
          "type": "string",
          "required": false,
          "minLength": 1,
          "section": "Account Settings"
        },
        {
          "name": "eventTypeNamespace",
          "label": "Event Type Namespace",
          "type": "string",
          "required": false,
          "defaultValue": "user.notification",
          "enum": [
            "user.notification",
            "com.zuora.notification"
          ],
          "section": "Account Settings"
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
          "required": true,
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
          "name": "id",
          "label": "Id",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "name",
          "label": "Name",
          "type": "string",
          "required": true,
          "maxLength": 255,
          "section": "Account Settings"
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
