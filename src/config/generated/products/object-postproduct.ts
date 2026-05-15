import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const object_postproductEndpoint: ApiEndpoint = {
  "id": "object-postproduct",
  "name": "CRUD: Create a product",
  "description": "",
  "method": "POST",
  "path": "/v1/object/product",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "rejectUnknownFields",
      "label": "Reject Unknown Fields",
      "type": "boolean",
      "required": false,
      "defaultValue": false
    }
  ],
  "bodyFields": [
    {
      "name": "AllowFeatureChanges",
      "label": "Allow Feature Changes",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "Category",
      "label": "Category",
      "type": "string",
      "required": false,
      "maxLength": 100,
      "section": "Additional Fields"
    },
    {
      "name": "Description",
      "label": "Description",
      "type": "string",
      "required": false,
      "maxLength": 500,
      "section": "Additional Fields"
    },
    {
      "name": "EffectiveEndDate",
      "label": "Effective End Date",
      "type": "date",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "EffectiveStartDate",
      "label": "Effective Start Date",
      "type": "date",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "SKU",
      "label": "S K U",
      "type": "string",
      "required": false,
      "maxLength": 50,
      "section": "Additional Fields"
    },
    {
      "name": "IntegrationId__NS",
      "label": "Integration Id N S",
      "type": "string",
      "required": false,
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "IntegrationStatus__NS",
      "label": "Integration Status N S",
      "type": "string",
      "required": false,
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "ItemType__NS",
      "label": "Item Type N S",
      "type": "string",
      "required": false,
      "enum": [
        "Inventory",
        "Non Inventory",
        "Service"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "SyncDate__NS",
      "label": "Sync Date N S",
      "type": "string",
      "required": false,
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "Name",
      "label": "Name",
      "type": "string",
      "required": true,
      "maxLength": 100,
      "section": "Account Settings"
    },
    {
      "name": "ProductNumber",
      "label": "Product Number",
      "type": "string",
      "required": false,
      "maxLength": 100,
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
