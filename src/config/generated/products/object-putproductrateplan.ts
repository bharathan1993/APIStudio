import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const object_putproductrateplanEndpoint: ApiEndpoint = {
  "id": "object-putproductrateplan",
  "name": "CRUD: Update a product rate plan",
  "description": "",
  "method": "PUT",
  "path": "/v1/object/product-rate-plan/{id}",
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
      "name": "ActiveCurrencies",
      "label": "Active Currencies",
      "type": "array",
      "required": false,
      "itemType": "string",
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
      "required": false,
      "maxLength": 29,
      "section": "Additional Fields"
    },
    {
      "name": "EffectiveStartDate",
      "label": "Effective Start Date",
      "type": "date",
      "required": false,
      "maxLength": 29,
      "section": "Additional Fields"
    },
    {
      "name": "ExternalIdSourceSystem",
      "label": "External Id Source System",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "ExternalRatePlanIds",
      "label": "External Rate Plan Ids",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "Grade",
      "label": "Grade",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "ProductId",
      "label": "Product Id",
      "type": "string",
      "required": false,
      "maxLength": 32,
      "section": "Additional Fields"
    },
    {
      "name": "Class__NS",
      "label": "Class N S",
      "type": "string",
      "required": false,
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "Department__NS",
      "label": "Department N S",
      "type": "string",
      "required": false,
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "IncludeChildren__NS",
      "label": "Include Children N S",
      "type": "string",
      "required": false,
      "enum": [
        "Yes",
        "No"
      ],
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
      "name": "Location__NS",
      "label": "Location N S",
      "type": "string",
      "required": false,
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "MultiCurrencyPrice__NS",
      "label": "Multi Currency Price N S",
      "type": "string",
      "required": false,
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "Price__NS",
      "label": "Price N S",
      "type": "string",
      "required": false,
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "Subsidiary__NS",
      "label": "Subsidiary N S",
      "type": "string",
      "required": false,
      "maxLength": 255,
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
      "required": false,
      "maxLength": 255,
      "section": "Account Settings"
    },
    {
      "name": "ProductRatePlanNumber",
      "label": "Product Rate Plan Number",
      "type": "string",
      "required": false,
      "maxLength": 100,
      "section": "Account Settings"
    },
    {
      "name": "BillingPeriod__NS",
      "label": "Billing Period N S",
      "type": "string",
      "required": false,
      "enum": [
        "Monthly",
        "Quarterly",
        "Annual",
        "Semi-Annual"
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
