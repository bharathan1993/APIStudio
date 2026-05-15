import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_inv_taxationitemsEndpoint: ApiEndpoint = {
  "id": "post-inv-taxationitems",
  "name": "Create taxation items for an invoice",
  "description": "",
  "method": "POST",
  "path": "/v1/invoices/{invoiceKey}/taxation-items",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "invoiceKey",
      "label": "Invoice Key",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "taxationItems",
      "label": "Taxation Items",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "exemptAmount",
          "label": "Exempt Amount",
          "type": "string",
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
              "name": "accountsReceivableAccountingCode",
              "label": "Accounts Receivable Accounting Code",
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
          "name": "invoiceItemId",
          "label": "Invoice Item Id",
          "type": "string",
          "required": true,
          "section": "Invoice & Document Settings"
        },
        {
          "name": "jurisdiction",
          "label": "Jurisdiction",
          "type": "string",
          "required": true,
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
          "required": true,
          "section": "Account Settings"
        },
        {
          "name": "taxAmount",
          "label": "Tax Amount",
          "type": "string",
          "required": true,
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
          "required": true,
          "section": "Tax Settings"
        },
        {
          "name": "taxMode",
          "label": "Tax Mode",
          "type": "string",
          "required": false,
          "enum": [
            "TaxInclusive",
            "TaxExclusive"
          ],
          "section": "Tax Settings"
        },
        {
          "name": "taxRate",
          "label": "Tax Rate",
          "type": "string",
          "required": true,
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
          "required": true,
          "enum": [
            "Percentage",
            "FlatFee"
          ],
          "section": "Tax Settings"
        }
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
