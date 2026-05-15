import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const postomnichannelsubscriptionEndpoint: ApiEndpoint = {
  "id": "postomnichannelsubscription",
  "name": "Create an omnichannel subscription",
  "description": "",
  "method": "POST",
  "path": "/v1/omni-channel-subscriptions",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "accountId",
      "label": "Account Id",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "accountIdentifierField",
      "label": "Account Identifier Field",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "accountData",
      "label": "Account Data",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "accountNumber",
          "label": "Account Number",
          "type": "string",
          "required": false,
          "maxLength": 70,
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
          "name": "currency",
          "label": "Currency",
          "type": "string",
          "required": true,
          "section": "Additional Fields"
        },
        {
          "name": "notes",
          "label": "Notes",
          "type": "textarea",
          "required": false,
          "maxLength": 65535,
          "section": "Additional Fields"
        },
        {
          "name": "billToContact",
          "label": "Bill To Contact",
          "type": "object",
          "required": true,
          "fields": [
            {
              "name": "address1",
              "label": "Address1",
              "type": "string",
              "required": false,
              "maxLength": 255,
              "section": "Additional Fields"
            },
            {
              "name": "address2",
              "label": "Address2",
              "type": "string",
              "required": false,
              "maxLength": 255,
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
              "name": "contactDescription",
              "label": "Contact Description",
              "type": "string",
              "required": false,
              "maxLength": 100,
              "section": "Contact Information"
            },
            {
              "name": "country",
              "label": "Country",
              "type": "string",
              "required": false,
              "maxLength": 64,
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
              "name": "customFields",
              "label": "Custom Fields",
              "type": "object",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "fax",
              "label": "Fax",
              "type": "string",
              "required": false,
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "firstName",
              "label": "First Name",
              "type": "string",
              "required": true,
              "maxLength": 100,
              "section": "Account Settings"
            },
            {
              "name": "homePhone",
              "label": "Home Phone",
              "type": "string",
              "required": false,
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "lastName",
              "label": "Last Name",
              "type": "string",
              "required": true,
              "maxLength": 100,
              "section": "Account Settings"
            },
            {
              "name": "mobilePhone",
              "label": "Mobile Phone",
              "type": "string",
              "required": false,
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "nickname",
              "label": "Nickname",
              "type": "string",
              "required": false,
              "maxLength": 100,
              "section": "Account Settings"
            },
            {
              "name": "otherPhone",
              "label": "Other Phone",
              "type": "string",
              "required": false,
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "otherPhoneType",
              "label": "Other Phone Type",
              "type": "string",
              "required": false,
              "enum": [
                "Work",
                "Mobile",
                "Home",
                "Other"
              ],
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
              "name": "postalCode",
              "label": "Postal Code",
              "type": "string",
              "required": false,
              "maxLength": 20,
              "section": "Additional Fields"
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
              "type": "email",
              "required": false,
              "maxLength": 80,
              "section": "Communication Settings"
            },
            {
              "name": "workPhone",
              "label": "Work Phone",
              "type": "string",
              "required": false,
              "maxLength": 40,
              "section": "Additional Fields"
            }
          ],
          "section": "Invoice & Document Settings"
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
              "maxLength": 255,
              "section": "Additional Fields"
            },
            {
              "name": "address2",
              "label": "Address2",
              "type": "string",
              "required": false,
              "maxLength": 255,
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
              "name": "contactDescription",
              "label": "Contact Description",
              "type": "string",
              "required": false,
              "maxLength": 100,
              "section": "Contact Information"
            },
            {
              "name": "country",
              "label": "Country",
              "type": "string",
              "required": false,
              "maxLength": 64,
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
              "name": "customFields",
              "label": "Custom Fields",
              "type": "object",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "fax",
              "label": "Fax",
              "type": "string",
              "required": false,
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "firstName",
              "label": "First Name",
              "type": "string",
              "required": true,
              "maxLength": 100,
              "section": "Account Settings"
            },
            {
              "name": "homePhone",
              "label": "Home Phone",
              "type": "string",
              "required": false,
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "lastName",
              "label": "Last Name",
              "type": "string",
              "required": true,
              "maxLength": 100,
              "section": "Account Settings"
            },
            {
              "name": "mobilePhone",
              "label": "Mobile Phone",
              "type": "string",
              "required": false,
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "nickname",
              "label": "Nickname",
              "type": "string",
              "required": false,
              "maxLength": 100,
              "section": "Account Settings"
            },
            {
              "name": "otherPhone",
              "label": "Other Phone",
              "type": "string",
              "required": false,
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "otherPhoneType",
              "label": "Other Phone Type",
              "type": "string",
              "required": false,
              "enum": [
                "Work",
                "Mobile",
                "Home",
                "Other"
              ],
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
              "name": "postalCode",
              "label": "Postal Code",
              "type": "string",
              "required": false,
              "maxLength": 20,
              "section": "Additional Fields"
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
              "type": "email",
              "required": false,
              "maxLength": 80,
              "section": "Communication Settings"
            },
            {
              "name": "workPhone",
              "label": "Work Phone",
              "type": "string",
              "required": false,
              "maxLength": 40,
              "section": "Additional Fields"
            }
          ],
          "section": "Contact Information"
        },
        {
          "name": "customFields",
          "label": "Custom Fields",
          "type": "object",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Account Settings"
    },
    {
      "name": "externalSubscriptionId",
      "label": "External Subscription Id",
      "type": "string",
      "required": true,
      "section": "Subscription Settings"
    },
    {
      "name": "externalTransactionReason",
      "label": "External Transaction Reason",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "externalSourceSystem",
      "label": "External Source System",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "externalState",
      "label": "External State",
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
      "name": "externalProductId",
      "label": "External Product Id",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "externalReplaceByProductId",
      "label": "External Replace By Product Id",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "externalInAppOwnershipType",
      "label": "External In App Ownership Type",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "externalQuantity",
      "label": "External Quantity",
      "type": "number",
      "required": false,
      "defaultValue": 1,
      "section": "Additional Fields"
    },
    {
      "name": "currency",
      "label": "Currency",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "autoRenew",
      "label": "Auto Renew",
      "type": "boolean",
      "required": false,
      "defaultValue": false,
      "section": "Additional Fields"
    },
    {
      "name": "externalPurchaseDate",
      "label": "External Purchase Date",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "externalExpirationDate",
      "label": "External Expiration Date",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "externalApplicationId",
      "label": "External Application Id",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "externalBundleId",
      "label": "External Bundle Id",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "externalSubscriberId",
      "label": "External Subscriber Id",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "externalPrice",
      "label": "External Price",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "externalPurchaseType",
      "label": "External Purchase Type",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "externalLastRenewalDate",
      "label": "External Last Renewal Date",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "externalNextRenewalDate",
      "label": "External Next Renewal Date",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "externalActivationDate",
      "label": "External Activation Date",
      "type": "string",
      "required": false,
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
