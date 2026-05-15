import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_createeinvoicingbusinessregionEndpoint: ApiEndpoint = {
  "id": "post-createeinvoicingbusinessregion",
  "name": "Create an e-invoicing business region",
  "description": "",
  "method": "POST",
  "path": "/v1/einvoice/business-regions",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "addressLine1",
      "label": "Address Line1",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "addressLine2",
      "label": "Address Line2",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "city",
      "label": "City",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "string",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "digitalSignatureEnable",
      "label": "Digital Signature Enable",
      "type": "boolean",
      "required": false,
      "defaultValue": false,
      "section": "Additional Fields"
    },
    {
      "name": "digitalSignatureBoxEnable",
      "label": "Digital Signature Box Enable",
      "type": "boolean",
      "required": false,
      "defaultValue": false,
      "section": "Additional Fields"
    },
    {
      "name": "digitalSignatureBoxPosX",
      "label": "Digital Signature Box Pos X",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "digitalSignatureBoxPosY",
      "label": "Digital Signature Box Pos Y",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "endpointId",
      "label": "Endpoint Id",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "endpointSchemeId",
      "label": "Endpoint Scheme Id",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "postalCode",
      "label": "Postal Code",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "responseMapping",
      "label": "Response Mapping",
      "type": "object",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "processType",
      "label": "Process Type",
      "type": "string",
      "required": false,
      "enum": [
        "Clearance",
        "ClearanceWithCancellation",
        "PEPPOLNetwork"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "serviceProviderId",
      "label": "Service Provider Id",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "state",
      "label": "State",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "fileFormat",
      "label": "File Format",
      "type": "array",
      "required": false,
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "businessName",
      "label": "Business Name",
      "type": "string",
      "required": true,
      "maxLength": 255,
      "section": "Account Settings"
    },
    {
      "name": "businessNumber",
      "label": "Business Number",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "businessNumberSchemaId",
      "label": "Business Number Schema Id",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "contactName",
      "label": "Contact Name",
      "type": "string",
      "required": false,
      "maxLength": 255,
      "section": "Account Settings"
    },
    {
      "name": "phoneNumber",
      "label": "Phone Number",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "taxRegisterNumber",
      "label": "Tax Register Number",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "tradeName",
      "label": "Trade Name",
      "type": "string",
      "required": false,
      "maxLength": 100,
      "section": "Account Settings"
    },
    {
      "name": "email",
      "label": "Email",
      "type": "string",
      "required": false,
      "section": "Communication Settings"
    },
    {
      "name": "invoiceEnabled",
      "label": "Invoice Enabled",
      "type": "boolean",
      "required": false,
      "defaultValue": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "invoiceFilters",
      "label": "Invoice Filters",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "condition",
          "label": "Condition",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "conditions",
              "label": "Conditions",
              "type": "array",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "field",
              "label": "Field",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "operator",
              "label": "Operator",
              "type": "string",
              "required": false,
              "enum": [
                "eq",
                "neq",
                "gt",
                "lt",
                "gte",
                "lte",
                "lk",
                "in",
                "nl",
                "nnl"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "relation",
              "label": "Relation",
              "type": "string",
              "required": false,
              "enum": [
                "and",
                "or"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "value",
              "label": "Value",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "objectType",
              "label": "Object Type",
              "type": "string",
              "required": false,
              "enum": [
                "Invoice",
                "InvoiceItem"
              ],
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Invoice & Document Settings"
    },
    {
      "name": "creditMemoEnabled",
      "label": "Credit Memo Enabled",
      "type": "boolean",
      "required": false,
      "defaultValue": false,
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "debitMemoEnabled",
      "label": "Debit Memo Enabled",
      "type": "boolean",
      "required": false,
      "defaultValue": false,
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "creditMemoFilters",
      "label": "Credit Memo Filters",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "condition",
          "label": "Condition",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "conditions",
              "label": "Conditions",
              "type": "array",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "field",
              "label": "Field",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "operator",
              "label": "Operator",
              "type": "string",
              "required": false,
              "enum": [
                "eq",
                "neq",
                "gt",
                "lt",
                "gte",
                "lte",
                "lk",
                "in",
                "nl",
                "nnl"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "relation",
              "label": "Relation",
              "type": "string",
              "required": false,
              "enum": [
                "and",
                "or"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "value",
              "label": "Value",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "objectType",
              "label": "Object Type",
              "type": "string",
              "required": false,
              "enum": [
                "CreditMemo",
                "CreditMemoItem"
              ],
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "debitMemoFilters",
      "label": "Debit Memo Filters",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "condition",
          "label": "Condition",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "conditions",
              "label": "Conditions",
              "type": "array",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "field",
              "label": "Field",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "operator",
              "label": "Operator",
              "type": "string",
              "required": false,
              "enum": [
                "eq",
                "neq",
                "gt",
                "lt",
                "gte",
                "lte",
                "lk",
                "in",
                "nl",
                "nnl"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "relation",
              "label": "Relation",
              "type": "string",
              "required": false,
              "enum": [
                "and",
                "or"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "value",
              "label": "Value",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "objectType",
              "label": "Object Type",
              "type": "string",
              "required": false,
              "enum": [
                "DebitMemo",
                "DebitMemoItem"
              ],
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Credit & Settlement Settings"
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
