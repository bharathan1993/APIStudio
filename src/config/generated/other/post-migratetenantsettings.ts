import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_migratetenantsettingsEndpoint: ApiEndpoint = {
  "id": "post-migratetenantsettings",
  "name": "Migrate settings from source tenant to target tenant",
  "description": "",
  "method": "POST",
  "path": "/deployment-manager/deployment_artifacts/deploy",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "tenant",
      "label": "Tenant",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "comments",
      "label": "Comments",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "entityUuid",
      "label": "Entity Uuid",
      "type": "string",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "metaData",
      "label": "Meta Data",
      "type": "object",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "request",
      "label": "Request",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "attribute",
          "label": "Attribute",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "componentType",
          "label": "Component Type",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "currentTargetResponse",
          "label": "Current Target Response",
          "type": "object",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "disabled",
          "label": "Disabled",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "errorMessage",
          "label": "Error Message",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "httpMethods",
          "label": "Http Methods",
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
          "name": "migratedOn",
          "label": "Migrated On",
          "type": "date",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "migrationId",
          "label": "Migration Id",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "pathPattern",
          "label": "Path Pattern",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "previousTargetResponse",
          "label": "Previous Target Response",
          "type": "object",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "result",
          "label": "Result",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "segregationKey",
          "label": "Segregation Key",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "sourceResponse",
          "label": "Source Response",
          "type": "object",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "status",
          "label": "Status",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "updateStatus",
          "label": "Update Status",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "emailIds",
      "label": "Email Ids",
      "type": "string",
      "required": false,
      "section": "Communication Settings"
    },
    {
      "name": "sendEmail",
      "label": "Send Email",
      "type": "boolean",
      "required": true,
      "section": "Communication Settings"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": true,
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
