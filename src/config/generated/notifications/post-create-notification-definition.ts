import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_create_notification_definitionEndpoint: ApiEndpoint = {
  "id": "post-create-notification-definition",
  "name": "Create a notification definition",
  "description": "",
  "method": "POST",
  "path": "/notifications/notification-definitions",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
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
      "name": "callout",
      "label": "Callout",
      "type": "object",
      "required": false,
      "fields": [
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
          "name": "eventTypeName",
          "label": "Event Type Name",
          "type": "string",
          "required": false,
          "minLength": 1,
          "section": "Account Settings"
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
          "name": "name",
          "label": "Name",
          "type": "string",
          "required": true,
          "maxLength": 255,
          "section": "Account Settings"
        },
        {
          "name": "requiredAuth",
          "label": "Required Auth",
          "type": "boolean",
          "required": true,
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
          "required": true,
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
      "section": "Additional Fields"
    },
    {
      "name": "calloutActive",
      "label": "Callout Active",
      "type": "boolean",
      "required": false,
      "defaultValue": false,
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
      "name": "filterRule",
      "label": "Filter Rule",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "condition",
          "label": "Condition",
          "type": "string",
          "required": true,
          "section": "Additional Fields"
        },
        {
          "name": "parameters",
          "label": "Parameters",
          "type": "object",
          "required": true,
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "filterRuleParams",
      "label": "Filter Rule Params",
      "type": "object",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "associatedAccount",
      "label": "Associated Account",
      "type": "string",
      "required": false,
      "section": "Account Settings"
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
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": true,
      "maxLength": 255,
      "section": "Account Settings"
    },
    {
      "name": "calloutTemplateIds",
      "label": "Callout Template Ids",
      "type": "array",
      "required": false,
      "itemType": "string",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "emailTemplateId",
      "label": "Email Template Id",
      "type": "string",
      "required": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "communicationProfileId",
      "label": "Communication Profile Id",
      "type": "string",
      "required": false,
      "section": "Communication Settings"
    },
    {
      "name": "communicationProfileIds",
      "label": "Communication Profile Ids",
      "type": "array",
      "required": false,
      "itemType": "string",
      "section": "Communication Settings"
    },
    {
      "name": "emailActive",
      "label": "Email Active",
      "type": "boolean",
      "required": false,
      "defaultValue": false,
      "section": "Communication Settings"
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
