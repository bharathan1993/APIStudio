import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const object_posttaxationitemEndpoint: ApiEndpoint = {
  "id": "object-posttaxationitem",
  "name": "CRUD: Create a taxation item",
  "description": "",
  "method": "POST",
  "path": "/v1/object/taxation-item",
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
      "name": "AccountingCode",
      "label": "Accounting Code",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "Name",
      "label": "Name",
      "type": "string",
      "required": true,
      "section": "Account Settings"
    },
    {
      "name": "ExemptAmount",
      "label": "Exempt Amount",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "Jurisdiction",
      "label": "Jurisdiction",
      "type": "string",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "LocationCode",
      "label": "Location Code",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "InvoiceItemId",
      "label": "Invoice Item Id",
      "type": "string",
      "required": true,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "TaxAmount",
      "label": "Tax Amount",
      "type": "number",
      "required": true,
      "section": "Tax Settings"
    },
    {
      "name": "TaxCode",
      "label": "Tax Code",
      "type": "string",
      "required": false,
      "section": "Tax Settings"
    },
    {
      "name": "TaxCodeDescription",
      "label": "Tax Code Description",
      "type": "string",
      "required": false,
      "section": "Tax Settings"
    },
    {
      "name": "TaxDate",
      "label": "Tax Date",
      "type": "date",
      "required": true,
      "section": "Tax Settings"
    },
    {
      "name": "TaxRate",
      "label": "Tax Rate",
      "type": "number",
      "required": true,
      "section": "Tax Settings"
    },
    {
      "name": "TaxRateDescription",
      "label": "Tax Rate Description",
      "type": "string",
      "required": false,
      "section": "Tax Settings"
    },
    {
      "name": "TaxRateType",
      "label": "Tax Rate Type",
      "type": "string",
      "required": true,
      "section": "Tax Settings"
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
