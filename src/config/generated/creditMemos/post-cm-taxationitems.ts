import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_cm_taxationitemsEndpoint: ApiEndpoint = {
  "id": "post-cm-taxationitems",
  "name": "Create taxation items for a credit memo",
  "description": "",
  "method": "POST",
  "path": "/v1/credit-memos/{creditMemoKey}/taxation-items",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "creditMemoKey",
      "label": "Credit Memo Key",
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
          "name": "memoItemId",
          "label": "Memo Item Id",
          "type": "string",
          "required": false,
          "section": "Credit & Settlement Settings"
        },
        {
          "name": "name",
          "label": "Name",
          "type": "string",
          "required": true,
          "section": "Account Settings"
        },
        {
          "name": "sourceTaxItemId",
          "label": "Source Tax Item Id",
          "type": "string",
          "required": false,
          "section": "Tax Settings"
        },
        {
          "name": "taxAmount",
          "label": "Tax Amount",
          "type": "number",
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
          "required": false,
          "section": "Tax Settings"
        },
        {
          "name": "taxRate",
          "label": "Tax Rate",
          "type": "number",
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
