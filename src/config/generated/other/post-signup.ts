import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_signupEndpoint: ApiEndpoint = {
  "id": "post-signup",
  "name": "Sign up",
  "description": "",
  "method": "POST",
  "path": "/v1/sign-up",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
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
          "name": "autoPay",
          "label": "Auto Pay",
          "type": "boolean",
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
          "name": "billCycleDay",
          "label": "Bill Cycle Day",
          "type": "number",
          "required": true,
          "section": "Invoice & Document Settings"
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
          "name": "communicationProfileId",
          "label": "Communication Profile Id",
          "type": "string",
          "required": false,
          "section": "Communication Settings"
        },
        {
          "name": "creditMemoTemplateId",
          "label": "Credit Memo Template Id",
          "type": "string",
          "required": false,
          "section": "Invoice & Document Settings"
        },
        {
          "name": "crmId",
          "label": "Crm Id",
          "type": "string",
          "required": false,
          "maxLength": 100,
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
          "name": "customFields",
          "label": "Custom Fields",
          "type": "object",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "debitMemoTemplateId",
          "label": "Debit Memo Template Id",
          "type": "string",
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
          "name": "name",
          "label": "Name",
          "type": "string",
          "required": true,
          "maxLength": 255,
          "section": "Account Settings"
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
          "name": "organizationLabel",
          "label": "Organization Label",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "paymentMethod",
          "label": "Payment Method",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "type",
              "label": "Type",
              "type": "string",
              "required": true,
              "enum": [
                "PayPalEC",
                "PayPalNativeEC",
                "PayPalAdaptive",
                "CreditCard",
                "CreditCardReferenceTransaction"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "secondTokenId",
              "label": "Second Token Id",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "tokenId",
              "label": "Token Id",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "BAID",
              "label": "B A I D",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "email",
              "label": "Email",
              "type": "string",
              "required": false,
              "section": "Communication Settings"
            },
            {
              "name": "preapprovalKey",
              "label": "Preapproval Key",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "cardHolderInfo",
              "label": "Card Holder Info",
              "type": "object",
              "required": false,
              "fields": [
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
                  "name": "cardHolderName",
                  "label": "Card Holder Name",
                  "type": "string",
                  "required": true,
                  "section": "Account Settings"
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
                  "name": "email",
                  "label": "Email",
                  "type": "string",
                  "required": false,
                  "section": "Communication Settings"
                },
                {
                  "name": "phone",
                  "label": "Phone",
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
                  "name": "zipCode",
                  "label": "Zip Code",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "cardNumber",
              "label": "Card Number",
              "type": "string",
              "required": false,
              "section": "Account Settings"
            },
            {
              "name": "cardType",
              "label": "Card Type",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "checkDuplicated",
              "label": "Check Duplicated",
              "type": "boolean",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "expirationMonth",
              "label": "Expiration Month",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "expirationYear",
              "label": "Expiration Year",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "mitConsentAgreementRef",
              "label": "Mit Consent Agreement Ref",
              "type": "string",
              "required": false,
              "maxLength": 128,
              "section": "Additional Fields"
            },
            {
              "name": "mitConsentAgreementSrc",
              "label": "Mit Consent Agreement Src",
              "type": "string",
              "required": false,
              "enum": [
                "External"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "mitNetworkTransactionId",
              "label": "Mit Network Transaction Id",
              "type": "string",
              "required": false,
              "maxLength": 128,
              "section": "Additional Fields"
            },
            {
              "name": "mitProfileAction",
              "label": "Mit Profile Action",
              "type": "string",
              "required": false,
              "enum": [
                "Activate",
                "Persist"
              ],
              "section": "Communication Settings"
            },
            {
              "name": "mitProfileAgreedOn",
              "label": "Mit Profile Agreed On",
              "type": "date",
              "required": false,
              "section": "Communication Settings"
            },
            {
              "name": "mitProfileType",
              "label": "Mit Profile Type",
              "type": "string",
              "required": false,
              "enum": [
                "Recurring"
              ],
              "section": "Communication Settings"
            },
            {
              "name": "securityCode",
              "label": "Security Code",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "accountKey",
              "label": "Account Key",
              "type": "string",
              "required": false,
              "section": "Account Settings"
            },
            {
              "name": "authGateway",
              "label": "Auth Gateway",
              "type": "string",
              "required": false,
              "section": "Payment Settings"
            },
            {
              "name": "ipAddress",
              "label": "Ip Address",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "makeDefault",
              "label": "Make Default",
              "type": "boolean",
              "required": false,
              "defaultValue": false,
              "section": "Additional Fields"
            }
          ],
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
          "name": "purchaseOrderNumber",
          "label": "Purchase Order Number",
          "type": "string",
          "required": false,
          "maxLength": 100,
          "section": "Account Settings"
        },
        {
          "name": "sequenceSetId",
          "label": "Sequence Set Id",
          "type": "string",
          "required": false,
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
              "maxLength": 25,
              "section": "Tax Settings"
            },
            {
              "name": "companyCode",
              "label": "Company Code",
              "type": "string",
              "required": false,
              "maxLength": 50,
              "section": "Additional Fields"
            },
            {
              "name": "exemptCertificateId",
              "label": "Exempt Certificate Id",
              "type": "string",
              "required": false,
              "maxLength": 32,
              "section": "Additional Fields"
            },
            {
              "name": "exemptCertificateType",
              "label": "Exempt Certificate Type",
              "type": "string",
              "required": false,
              "maxLength": 32,
              "section": "Additional Fields"
            },
            {
              "name": "exemptDescription",
              "label": "Exempt Description",
              "type": "string",
              "required": false,
              "maxLength": 500,
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
              "maxLength": 32,
              "section": "Additional Fields"
            },
            {
              "name": "exemptStatus",
              "label": "Exempt Status",
              "type": "string",
              "required": false,
              "defaultValue": "No",
              "enum": [
                "No",
                "Yes",
                "PendingVerification"
              ],
              "section": "Additional Fields"
            }
          ],
          "section": "Tax Settings"
        }
      ],
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
      "name": "customFields",
      "label": "Custom Fields",
      "type": "object",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "options",
      "label": "Options",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "billingTargetDate",
          "label": "Billing Target Date",
          "type": "date",
          "required": false,
          "section": "Invoice & Document Settings"
        },
        {
          "name": "collectPayment",
          "label": "Collect Payment",
          "type": "boolean",
          "required": false,
          "section": "Payment Settings"
        },
        {
          "name": "maxSubscriptionsPerAccount",
          "label": "Max Subscriptions Per Account",
          "type": "number",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "runBilling",
          "label": "Run Billing",
          "type": "boolean",
          "required": false,
          "section": "Invoice & Document Settings"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "paymentData",
      "label": "Payment Data",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "authTransactionId",
          "label": "Auth Transaction Id",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "authorizedAmount",
          "label": "Authorized Amount",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "authorizedCurrency",
          "label": "Authorized Currency",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Payment Settings"
    },
    {
      "name": "subscriptionData",
      "label": "Subscription Data",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "customFields",
          "label": "Custom Fields",
          "type": "object",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "invoiceSeparately",
          "label": "Invoice Separately",
          "type": "boolean",
          "required": false,
          "section": "Invoice & Document Settings"
        },
        {
          "name": "notes",
          "label": "Notes",
          "type": "string",
          "required": false,
          "maxLength": 500,
          "section": "Additional Fields"
        },
        {
          "name": "ratePlans",
          "label": "Rate Plans",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "customFields",
              "label": "Custom Fields",
              "type": "object",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "productRatePlanId",
              "label": "Product Rate Plan Id",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "startDate",
          "label": "Start Date",
          "type": "date",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "subscriptionNumber",
          "label": "Subscription Number",
          "type": "string",
          "required": false,
          "maxLength": 100,
          "section": "Account Settings"
        },
        {
          "name": "terms",
          "label": "Terms",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "autoRenew",
              "label": "Auto Renew",
              "type": "boolean",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "initialTerm",
              "label": "Initial Term",
              "type": "object",
              "required": true,
              "fields": [
                {
                  "name": "period",
                  "label": "Period",
                  "type": "number",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "periodType",
                  "label": "Period Type",
                  "type": "string",
                  "required": false,
                  "enum": [
                    "Month",
                    "Year",
                    "Day",
                    "Week"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "startDate",
                  "label": "Start Date",
                  "type": "date",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "termType",
                  "label": "Term Type",
                  "type": "string",
                  "required": true,
                  "enum": [
                    "TERMED",
                    "EVERGREEN"
                  ],
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "renewalSetting",
              "label": "Renewal Setting",
              "type": "string",
              "required": false,
              "enum": [
                "RENEW_WITH_SPECIFIC_TERM",
                "RENEW_TO_EVERGREEN"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "renewalTerms",
              "label": "Renewal Terms",
              "type": "object",
              "required": false,
              "fields": [
                {
                  "name": "period",
                  "label": "Period",
                  "type": "number",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "periodType",
                  "label": "Period Type",
                  "type": "string",
                  "required": false,
                  "enum": [
                    "Month",
                    "Year",
                    "Day",
                    "Week"
                  ],
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Subscription Settings"
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
