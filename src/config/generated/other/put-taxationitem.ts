import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_taxationitemEndpoint: ApiEndpoint = {
  "id": "put-taxationitem",
  "name": "Update a taxation item",
  "description": "",
  "method": "PUT",
  "path": "/v1/taxation-items/{id}",
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
      "name": "exemptAmount",
      "label": "Exempt Amount",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "financeInformation",
      "label": "Finance Information",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "onAccountAccountingCode",
          "label": "On Account Accounting Code",
          "type": "string",
          "required": false,
          "maxLength": 100,
          "section": "Account Settings"
        },
        {
          "name": "salesTaxPayableAccountingCode",
          "label": "Sales Tax Payable Accounting Code",
          "type": "string",
          "required": false,
          "maxLength": 100,
          "section": "Account Settings"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "jurisdiction",
      "label": "Jurisdiction",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "locationCode",
      "label": "Location Code",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "taxAmount",
      "label": "Tax Amount",
      "type": "number",
      "required": false,
      "section": "Tax Settings"
    },
    {
      "name": "taxCode",
      "label": "Tax Code",
      "type": "string",
      "required": false,
      "section": "Tax Settings"
    },
    {
      "name": "taxCodeDescription",
      "label": "Tax Code Description",
      "type": "string",
      "required": false,
      "section": "Tax Settings"
    },
    {
      "name": "taxDate",
      "label": "Tax Date",
      "type": "date",
      "required": false,
      "section": "Tax Settings"
    },
    {
      "name": "taxRate",
      "label": "Tax Rate",
      "type": "number",
      "required": false,
      "section": "Tax Settings"
    },
    {
      "name": "taxRateDescription",
      "label": "Tax Rate Description",
      "type": "string",
      "required": false,
      "section": "Tax Settings"
    },
    {
      "name": "taxRateType",
      "label": "Tax Rate Type",
      "type": "string",
      "required": false,
      "enum": [
        "Percentage",
        "FlatFee"
      ],
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
