import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_accountEndpoint: ApiEndpoint = {
  "id": "post-account",
  "name": "Create an account",
  "description": "",
  "method": "POST",
  "path": "/v1/accounts",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "accountNumber",
      "label": "Account Number",
      "type": "string",
      "required": false,
      "section": "Account Settings"
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
      "required": true,
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
      "name": "applicationOrder",
      "label": "Application Order",
      "type": "array",
      "required": false,
      "itemType": "string",
      "section": "Additional Fields"
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
      "type": "string",
      "required": false,
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
      "name": "targetDate",
      "label": "Target Date",
      "type": "date",
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
      "name": "applyCredit",
      "label": "Apply Credit",
      "type": "boolean",
      "required": false,
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "applyCreditBalance",
      "label": "Apply Credit Balance",
      "type": "boolean",
      "required": false,
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "creditMemoReasonCode",
      "label": "Credit Memo Reason Code",
      "type": "string",
      "required": false,
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "autoPay",
      "label": "Auto Pay",
      "type": "boolean",
      "required": false,
      "section": "Payment Settings"
    },
    {
      "name": "creditCard",
      "label": "Credit Card",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "cardHolderInfo",
          "label": "Card Holder Info",
          "type": "object",
          "required": true,
          "fields": [
            {
              "name": "addressLine1",
              "label": "Address Line1",
              "type": "string",
              "required": true,
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
              "required": true,
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
              "required": true,
              "section": "Additional Fields"
            },
            {
              "name": "zipCode",
              "label": "Zip Code",
              "type": "string",
              "required": true,
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "cardNumber",
          "label": "Card Number",
          "type": "string",
          "required": true,
          "section": "Account Settings"
        },
        {
          "name": "cardType",
          "label": "Card Type",
          "type": "string",
          "required": true,
          "section": "Additional Fields"
        },
        {
          "name": "expirationMonth",
          "label": "Expiration Month",
          "type": "string",
          "required": true,
          "section": "Additional Fields"
        },
        {
          "name": "expirationYear",
          "label": "Expiration Year",
          "type": "string",
          "required": true,
          "section": "Additional Fields"
        },
        {
          "name": "securityCode",
          "label": "Security Code",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        }
      ],
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
      "name": "hpmCreditCardPaymentMethodId",
      "label": "Hpm Credit Card Payment Method Id",
      "type": "string",
      "required": false,
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
            "CreditCard",
            "CreditCardReferenceTransaction",
            "ACH",
            "SEPA",
            "Betalingsservice",
            "Autogiro",
            "Bacs",
            "Becs",
            "Becsnz",
            "PAD",
            "PayPalCP",
            "PayPalEC",
            "PayPalNativeEC",
            "PayPalAdaptive",
            "AdyenApplePay",
            "AdyenGooglePay",
            "GooglePay",
            "AmazonPay"
          ],
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
          "name": "cardMaskNumber",
          "label": "Card Mask Number",
          "type": "string",
          "required": false,
          "section": "Account Settings"
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
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "expirationYear",
          "label": "Expiration Year",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "identityNumber",
          "label": "Identity Number",
          "type": "string",
          "required": false,
          "section": "Account Settings"
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
            "Recurring",
            "Unscheduled"
          ],
          "section": "Communication Settings"
        },
        {
          "name": "screeningAmount",
          "label": "Screening Amount",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "securityCode",
          "label": "Security Code",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "tokens",
          "label": "Tokens",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "gatewayType",
              "label": "Gateway Type",
              "type": "string",
              "required": true,
              "section": "Payment Settings"
            },
            {
              "name": "secondTokenId",
              "label": "Second Token Id",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "thirdTokenId",
              "label": "Third Token Id",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "tokenId",
              "label": "Token Id",
              "type": "string",
              "required": true,
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "tokenize",
          "label": "Tokenize",
          "type": "boolean",
          "required": false,
          "defaultValue": false,
          "section": "Additional Fields"
        },
        {
          "name": "mandateInfo",
          "label": "Mandate Info",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "mandateId",
              "label": "Mandate Id",
              "type": "string",
              "required": false,
              "maxLength": 36,
              "section": "Additional Fields"
            },
            {
              "name": "mandateReason",
              "label": "Mandate Reason",
              "type": "string",
              "required": false,
              "maxLength": 64,
              "section": "Additional Fields"
            },
            {
              "name": "mandateStatus",
              "label": "Mandate Status",
              "type": "string",
              "required": false,
              "maxLength": 64,
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "processingOptions",
          "label": "Processing Options",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "checkDuplicated",
              "label": "Check Duplicated",
              "type": "boolean",
              "required": false,
              "section": "Additional Fields"
            }
          ],
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
          "name": "currencyCode",
          "label": "Currency Code",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "gatewayOptions",
          "label": "Gateway Options",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "key",
              "label": "Key",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "value",
              "label": "Value",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            }
          ],
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
        },
        {
          "name": "skipValidation",
          "label": "Skip Validation",
          "type": "boolean",
          "required": false,
          "defaultValue": false,
          "section": "Additional Fields"
        },
        {
          "name": "creditCardMaskNumber",
          "label": "Credit Card Mask Number",
          "type": "string",
          "required": false,
          "maxLength": 19,
          "section": "Account Settings"
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
          "name": "bankABACode",
          "label": "Bank A B A Code",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "bankAccountMaskNumber",
          "label": "Bank Account Mask Number",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "bankAccountName",
          "label": "Bank Account Name",
          "type": "string",
          "required": false,
          "maxLength": 70,
          "section": "Account Settings"
        },
        {
          "name": "bankAccountNumber",
          "label": "Bank Account Number",
          "type": "string",
          "required": false,
          "maxLength": 30,
          "section": "Account Settings"
        },
        {
          "name": "bankAccountType",
          "label": "Bank Account Type",
          "type": "string",
          "required": false,
          "enum": [
            "BusinessChecking",
            "Checking",
            "Saving"
          ],
          "section": "Account Settings"
        },
        {
          "name": "bankName",
          "label": "Bank Name",
          "type": "string",
          "required": false,
          "maxLength": 70,
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
        },
        {
          "name": "IBAN",
          "label": "I B A N",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "accountHolderInfo",
          "label": "Account Holder Info",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "accountHolderName",
              "label": "Account Holder Name",
              "type": "string",
              "required": false,
              "maxLength": 60,
              "section": "Account Settings"
            },
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
              "name": "firstName",
              "label": "First Name",
              "type": "string",
              "required": false,
              "section": "Account Settings"
            },
            {
              "name": "lastName",
              "label": "Last Name",
              "type": "string",
              "required": false,
              "section": "Account Settings"
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
          "section": "Account Settings"
        },
        {
          "name": "accountMaskNumber",
          "label": "Account Mask Number",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "businessIdentificationCode",
          "label": "Business Identification Code",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "accountNumber",
          "label": "Account Number",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "bankCode",
          "label": "Bank Code",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "branchCode",
          "label": "Branch Code",
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
          "type": "email",
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
          "name": "applePaymentData",
          "label": "Apple Payment Data",
          "type": "string",
          "required": false,
          "section": "Payment Settings"
        },
        {
          "name": "googlePaymentToken",
          "label": "Google Payment Token",
          "type": "string",
          "required": false,
          "section": "Payment Settings"
        },
        {
          "name": "amazonPayToken",
          "label": "Amazon Pay Token",
          "type": "string",
          "required": false,
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
      "name": "billCycleDay",
      "label": "Bill Cycle Day",
      "type": "number",
      "required": false,
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
          "required": true,
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
          "required": true,
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
      "name": "documentDate",
      "label": "Document Date",
      "type": "date",
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
      "defaultValue": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "invoiceDeliveryPrefsPrint",
      "label": "Invoice Delivery Prefs Print",
      "type": "boolean",
      "required": false,
      "defaultValue": false,
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
      "name": "runBilling",
      "label": "Run Billing",
      "type": "boolean",
      "required": false,
      "defaultValue": true,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "shipToSameAsBillTo",
      "label": "Ship To Same As Bill To",
      "type": "boolean",
      "required": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "soldToSameAsBillTo",
      "label": "Sold To Same As Bill To",
      "type": "boolean",
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
      "name": "collect",
      "label": "Collect",
      "type": "boolean",
      "required": false,
      "defaultValue": true,
      "section": "Subscription Settings"
    },
    {
      "name": "subscription",
      "label": "Subscription",
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
          "name": "contractEffectiveDate",
          "label": "Contract Effective Date",
          "type": "date",
          "required": true,
          "section": "Additional Fields"
        },
        {
          "name": "customerAcceptanceDate",
          "label": "Customer Acceptance Date",
          "type": "date",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "initialTerm",
          "label": "Initial Term",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "invoiceOwnerAccountKey",
          "label": "Invoice Owner Account Key",
          "type": "string",
          "required": false,
          "section": "Account Settings"
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
          "section": "Additional Fields"
        },
        {
          "name": "renewalTerm",
          "label": "Renewal Term",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "serviceActivationDate",
          "label": "Service Activation Date",
          "type": "date",
          "required": false,
          "section": "Tax Settings"
        },
        {
          "name": "subscribeToRatePlans",
          "label": "Subscribe To Rate Plans",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "chargeOverrides",
              "label": "Charge Overrides",
              "type": "array",
              "required": false,
              "itemType": "object",
              "itemFields": [
                {
                  "name": "amendedByOrderOn",
                  "label": "Amended By Order On",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "applyDiscountTo",
                  "label": "Apply Discount To",
                  "type": "string",
                  "required": false,
                  "section": "Credit & Settlement Settings"
                },
                {
                  "name": "billCycleDay",
                  "label": "Bill Cycle Day",
                  "type": "string",
                  "required": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "billCycleType",
                  "label": "Bill Cycle Type",
                  "type": "string",
                  "required": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "billingPeriod",
                  "label": "Billing Period",
                  "type": "string",
                  "required": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "billingPeriodAlignment",
                  "label": "Billing Period Alignment",
                  "type": "string",
                  "required": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "billingTiming",
                  "label": "Billing Timing",
                  "type": "string",
                  "required": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "chargeModelConfiguration",
                  "label": "Charge Model Configuration",
                  "type": "object",
                  "required": false,
                  "fields": [
                    {
                      "name": "customFieldPerUnitRate",
                      "label": "Custom Field Per Unit Rate",
                      "type": "string",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "customFieldTotalAmount",
                      "label": "Custom Field Total Amount",
                      "type": "string",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "formula",
                      "label": "Formula",
                      "type": "string",
                      "required": false,
                      "section": "Additional Fields"
                    }
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "discountAmount",
                  "label": "Discount Amount",
                  "type": "number",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "discountLevel",
                  "label": "Discount Level",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "discountPercentage",
                  "label": "Discount Percentage",
                  "type": "number",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "endDateCondition",
                  "label": "End Date Condition",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "excludeItemBillingFromRevenueAccounting",
                  "label": "Exclude Item Billing From Revenue Accounting",
                  "type": "boolean",
                  "required": false,
                  "defaultValue": false,
                  "section": "Account Settings"
                },
                {
                  "name": "excludeItemBookingFromRevenueAccounting",
                  "label": "Exclude Item Booking From Revenue Accounting",
                  "type": "boolean",
                  "required": false,
                  "defaultValue": false,
                  "section": "Account Settings"
                },
                {
                  "name": "includedUnits",
                  "label": "Included Units",
                  "type": "number",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "isAllocationEligible",
                  "label": "Is Allocation Eligible",
                  "type": "boolean",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "isUnbilled",
                  "label": "Is Unbilled",
                  "type": "boolean",
                  "required": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "listPriceBase",
                  "label": "List Price Base",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "number",
                  "label": "Number",
                  "type": "string",
                  "required": false,
                  "section": "Account Settings"
                },
                {
                  "name": "numberOfPeriods",
                  "label": "Number Of Periods",
                  "type": "number",
                  "required": false,
                  "section": "Account Settings"
                },
                {
                  "name": "originalOrderDate",
                  "label": "Original Order Date",
                  "type": "date",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "overagePrice",
                  "label": "Overage Price",
                  "type": "number",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "overageUnusedUnitsCreditOption",
                  "label": "Overage Unused Units Credit Option",
                  "type": "string",
                  "required": false,
                  "section": "Credit & Settlement Settings"
                },
                {
                  "name": "price",
                  "label": "Price",
                  "type": "number",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "priceChangeOption",
                  "label": "Price Change Option",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "priceIncreasePercentage",
                  "label": "Price Increase Percentage",
                  "type": "number",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "productRatePlanChargeId",
                  "label": "Product Rate Plan Charge Id",
                  "type": "string",
                  "required": true,
                  "section": "Additional Fields"
                },
                {
                  "name": "productRatePlanChargeNumber",
                  "label": "Product Rate Plan Charge Number",
                  "type": "string",
                  "required": false,
                  "section": "Account Settings"
                },
                {
                  "name": "quantity",
                  "label": "Quantity",
                  "type": "number",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "ratingGroup",
                  "label": "Rating Group",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "specificBillingPeriod",
                  "label": "Specific Billing Period",
                  "type": "number",
                  "required": false,
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "specificEndDate",
                  "label": "Specific End Date",
                  "type": "date",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "specificListPriceBase",
                  "label": "Specific List Price Base",
                  "type": "number",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "tiers",
                  "label": "Tiers",
                  "type": "array",
                  "required": false,
                  "itemType": "object",
                  "itemFields": [
                    {
                      "name": "endingUnit",
                      "label": "Ending Unit",
                      "type": "number",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "price",
                      "label": "Price",
                      "type": "number",
                      "required": true,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "priceFormat",
                      "label": "Price Format",
                      "type": "string",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "startingUnit",
                      "label": "Starting Unit",
                      "type": "number",
                      "required": false,
                      "section": "Additional Fields"
                    },
                    {
                      "name": "tier",
                      "label": "Tier",
                      "type": "number",
                      "required": true,
                      "section": "Additional Fields"
                    }
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "triggerDate",
                  "label": "Trigger Date",
                  "type": "date",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "triggerEvent",
                  "label": "Trigger Event",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "unusedUnitsCreditRates",
                  "label": "Unused Units Credit Rates",
                  "type": "number",
                  "required": false,
                  "section": "Credit & Settlement Settings"
                },
                {
                  "name": "upToPeriods",
                  "label": "Up To Periods",
                  "type": "number",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "upToPeriodsType",
                  "label": "Up To Periods Type",
                  "type": "string",
                  "required": false,
                  "section": "Additional Fields"
                },
                {
                  "name": "weeklyBillCycleDay",
                  "label": "Weekly Bill Cycle Day",
                  "type": "string",
                  "required": false,
                  "section": "Invoice & Document Settings"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "externalCatalogPlanId",
              "label": "External Catalog Plan Id",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "externalIdSourceSystem",
              "label": "External Id Source System",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "externallyManagedPlanId",
              "label": "Externally Managed Plan Id",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "productRatePlanId",
              "label": "Product Rate Plan Id",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "productRatePlanNumber",
              "label": "Product Rate Plan Number",
              "type": "string",
              "required": false,
              "section": "Account Settings"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "subscriptionNumber",
          "label": "Subscription Number",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "termStartDate",
          "label": "Term Start Date",
          "type": "date",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "termType",
          "label": "Term Type",
          "type": "string",
          "required": true,
          "section": "Additional Fields"
        },
        {
          "name": "CpqBundleJsonId__QT",
          "label": "Cpq Bundle Json Id Q T",
          "type": "string",
          "required": false,
          "maxLength": 32,
          "section": "Additional Fields"
        },
        {
          "name": "OpportunityCloseDate__QT",
          "label": "Opportunity Close Date Q T",
          "type": "date",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "OpportunityName__QT",
          "label": "Opportunity Name Q T",
          "type": "string",
          "required": false,
          "maxLength": 100,
          "section": "Account Settings"
        },
        {
          "name": "QuoteBusinessType__QT",
          "label": "Quote Business Type Q T",
          "type": "string",
          "required": false,
          "maxLength": 32,
          "section": "Additional Fields"
        },
        {
          "name": "QuoteNumber__QT",
          "label": "Quote Number Q T",
          "type": "string",
          "required": false,
          "maxLength": 32,
          "section": "Account Settings"
        },
        {
          "name": "QuoteType__QT",
          "label": "Quote Type Q T",
          "type": "string",
          "required": false,
          "maxLength": 32,
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
          "name": "Project__NS",
          "label": "Project N S",
          "type": "string",
          "required": false,
          "maxLength": 255,
          "section": "Additional Fields"
        },
        {
          "name": "SalesOrder__NS",
          "label": "Sales Order N S",
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
        }
      ],
      "section": "Subscription Settings"
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
          "required": true,
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
          "required": true,
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
          "required": true,
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
          "required": true,
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
