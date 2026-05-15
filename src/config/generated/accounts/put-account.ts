import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_accountEndpoint: ApiEndpoint = {
  "id": "put-account",
  "name": "Update an account",
  "description": "",
  "method": "PUT",
  "path": "/v1/accounts/{account-key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "account-key",
      "label": "Account Key",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "additionalEmailAddresses",
      "label": "Additional Email Addresses",
      "type": "array",
      "required": false,
      "itemType": "string",
      "section": "Communication Settings"
    },
    {
      "name": "communicationProfileId",
      "label": "Communication Profile Id",
      "type": "string",
      "required": false,
      "section": "Communication Settings"
    },
    {
      "name": "autoPay",
      "label": "Auto Pay",
      "type": "boolean",
      "required": false,
      "section": "Payment Settings"
    },
    {
      "name": "defaultPaymentMethodId",
      "label": "Default Payment Method Id",
      "type": "string",
      "required": false,
      "maxLength": 64,
      "section": "Payment Settings"
    },
    {
      "name": "gatewayRoutingEligible",
      "label": "Gateway Routing Eligible",
      "type": "boolean",
      "required": false,
      "defaultValue": false,
      "section": "Payment Settings"
    },
    {
      "name": "paymentGateway",
      "label": "Payment Gateway",
      "type": "string",
      "required": false,
      "section": "Payment Settings"
    },
    {
      "name": "paymentTerm",
      "label": "Payment Term",
      "type": "string",
      "required": false,
      "section": "Payment Settings"
    },
    {
      "name": "batch",
      "label": "Batch",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "crmId",
      "label": "Crm Id",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "customerServiceRepName",
      "label": "Customer Service Rep Name",
      "type": "string",
      "required": false,
      "maxLength": 50,
      "section": "Account Settings"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "parentId",
      "label": "Parent Id",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "partnerAccount",
      "label": "Partner Account",
      "type": "boolean",
      "required": false,
      "defaultValue": false,
      "section": "Account Settings"
    },
    {
      "name": "profileNumber",
      "label": "Profile Number",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "purchaseOrderNumber",
      "label": "Purchase Order Number",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "billCycleDay",
      "label": "Bill Cycle Day",
      "type": "number",
      "required": false,
      "maxLength": 2,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "billToContact",
      "label": "Bill To Contact",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "address1",
          "label": "Address1",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "address2",
          "label": "Address2",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "city",
          "label": "City",
          "type": "string",
          "required": false,
          "maxLength": 100,
          "section": "Additional Fields"
        },
        {
          "name": "country",
          "label": "Country",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "county",
          "label": "County",
          "type": "string",
          "required": false,
          "maxLength": 100,
          "section": "Additional Fields"
        },
        {
          "name": "fax",
          "label": "Fax",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "firstName",
          "label": "First Name",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "homePhone",
          "label": "Home Phone",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "lastName",
          "label": "Last Name",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "mobilePhone",
          "label": "Mobile Phone",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "nickname",
          "label": "Nickname",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "otherPhone",
          "label": "Other Phone",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "otherPhoneType",
          "label": "Other Phone Type",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "personalEmail",
          "label": "Personal Email",
          "type": "email",
          "required": false,
          "maxLength": 80,
          "section": "Communication Settings"
        },
        {
          "name": "state",
          "label": "State",
          "type": "string",
          "required": false,
          "maxLength": 100,
          "section": "Additional Fields"
        },
        {
          "name": "taxRegion",
          "label": "Tax Region",
          "type": "string",
          "required": false,
          "maxLength": 100,
          "section": "Tax Settings"
        },
        {
          "name": "workEmail",
          "label": "Work Email",
          "type": "string",
          "required": false,
          "section": "Communication Settings"
        },
        {
          "name": "workPhone",
          "label": "Work Phone",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "zipCode",
          "label": "Zip Code",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Invoice & Document Settings"
    },
    {
      "name": "billToContactId",
      "label": "Bill To Contact Id",
      "type": "string",
      "required": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "creditMemoTemplateId",
      "label": "Credit Memo Template Id",
      "type": "string",
      "required": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "debitMemoTemplateId",
      "label": "Debit Memo Template Id",
      "type": "string",
      "required": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "einvoiceProfile",
      "label": "Einvoice Profile",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "businessCategory",
          "label": "Business Category",
          "type": "string",
          "required": false,
          "enum": [
            "B2B",
            "B2C",
            "B2G"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "businessName",
          "label": "Business Name",
          "type": "string",
          "required": false,
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
          "name": "businessNumberSchemeId",
          "label": "Business Number Scheme Id",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "enabled",
          "label": "Enabled",
          "type": "boolean",
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
          "name": "taxRegisterNumber",
          "label": "Tax Register Number",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        }
      ],
      "section": "Invoice & Document Settings"
    },
    {
      "name": "invoiceDeliveryPrefsEmail",
      "label": "Invoice Delivery Prefs Email",
      "type": "boolean",
      "required": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "invoiceDeliveryPrefsPrint",
      "label": "Invoice Delivery Prefs Print",
      "type": "boolean",
      "required": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "invoiceTemplateId",
      "label": "Invoice Template Id",
      "type": "string",
      "required": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "summaryStatementTemplateId",
      "label": "Summary Statement Template Id",
      "type": "string",
      "required": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "salesRep",
      "label": "Sales Rep",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "sequenceSetId",
      "label": "Sequence Set Id",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "tagging",
      "label": "Tagging",
      "type": "string",
      "required": false,
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
      "name": "CustomerType__NS",
      "label": "Customer Type N S",
      "type": "string",
      "required": false,
      "enum": [
        "Company",
        "Individual"
      ],
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
      "name": "Location__NS",
      "label": "Location N S",
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
      "name": "SynctoNetSuite__NS",
      "label": "Syncto Net Suite N S",
      "type": "string",
      "required": false,
      "enum": [
        "Yes",
        "No"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "shipToContact",
      "label": "Ship To Contact",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "address1",
          "label": "Address1",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "address2",
          "label": "Address2",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "city",
          "label": "City",
          "type": "string",
          "required": false,
          "maxLength": 100,
          "section": "Additional Fields"
        },
        {
          "name": "country",
          "label": "Country",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "county",
          "label": "County",
          "type": "string",
          "required": false,
          "maxLength": 100,
          "section": "Additional Fields"
        },
        {
          "name": "fax",
          "label": "Fax",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "firstName",
          "label": "First Name",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "homePhone",
          "label": "Home Phone",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "lastName",
          "label": "Last Name",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "mobilePhone",
          "label": "Mobile Phone",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "nickname",
          "label": "Nickname",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "otherPhone",
          "label": "Other Phone",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "otherPhoneType",
          "label": "Other Phone Type",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "personalEmail",
          "label": "Personal Email",
          "type": "email",
          "required": false,
          "maxLength": 80,
          "section": "Communication Settings"
        },
        {
          "name": "state",
          "label": "State",
          "type": "string",
          "required": false,
          "maxLength": 100,
          "section": "Additional Fields"
        },
        {
          "name": "taxRegion",
          "label": "Tax Region",
          "type": "string",
          "required": false,
          "maxLength": 100,
          "section": "Tax Settings"
        },
        {
          "name": "workEmail",
          "label": "Work Email",
          "type": "string",
          "required": false,
          "section": "Communication Settings"
        },
        {
          "name": "workPhone",
          "label": "Work Phone",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "zipCode",
          "label": "Zip Code",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Contact Information"
    },
    {
      "name": "shipToContactId",
      "label": "Ship To Contact Id",
      "type": "string",
      "required": false,
      "section": "Contact Information"
    },
    {
      "name": "soldToContact",
      "label": "Sold To Contact",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "address1",
          "label": "Address1",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "address2",
          "label": "Address2",
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
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "county",
          "label": "County",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "fax",
          "label": "Fax",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "firstName",
          "label": "First Name",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "homePhone",
          "label": "Home Phone",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "lastName",
          "label": "Last Name",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "mobilePhone",
          "label": "Mobile Phone",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "nickname",
          "label": "Nickname",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "otherPhone",
          "label": "Other Phone",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "otherPhoneType",
          "label": "Other Phone Type",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "personalEmail",
          "label": "Personal Email",
          "type": "email",
          "required": false,
          "maxLength": 80,
          "section": "Communication Settings"
        },
        {
          "name": "state",
          "label": "State",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "taxRegion",
          "label": "Tax Region",
          "type": "string",
          "required": false,
          "section": "Tax Settings"
        },
        {
          "name": "workEmail",
          "label": "Work Email",
          "type": "string",
          "required": false,
          "section": "Communication Settings"
        },
        {
          "name": "workPhone",
          "label": "Work Phone",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "zipCode",
          "label": "Zip Code",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Contact Information"
    },
    {
      "name": "soldToContactId",
      "label": "Sold To Contact Id",
      "type": "string",
      "required": false,
      "section": "Contact Information"
    },
    {
      "name": "taxInfo",
      "label": "Tax Info",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "VATId",
          "label": "V A T Id",
          "type": "string",
          "required": false,
          "section": "Tax Settings"
        },
        {
          "name": "companyCode",
          "label": "Company Code",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "exemptCertificateId",
          "label": "Exempt Certificate Id",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "exemptCertificateType",
          "label": "Exempt Certificate Type",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "exemptDescription",
          "label": "Exempt Description",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "exemptEffectiveDate",
          "label": "Exempt Effective Date",
          "type": "date",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "exemptEntityUseCode",
          "label": "Exempt Entity Use Code",
          "type": "string",
          "required": false,
          "maxLength": 64,
          "section": "Additional Fields"
        },
        {
          "name": "exemptExpirationDate",
          "label": "Exempt Expiration Date",
          "type": "date",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "exemptIssuingJurisdiction",
          "label": "Exempt Issuing Jurisdiction",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "exemptStatus",
          "label": "Exempt Status",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
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
