import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_update_email_templateEndpoint: ApiEndpoint = {
  "id": "put-update-email-template",
  "name": "Update an email template",
  "description": "",
  "method": "PUT",
  "path": "/notifications/email-templates/{id}",
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
      "name": "active",
      "label": "Active",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "encodingType",
      "label": "Encoding Type",
      "type": "string",
      "required": false,
      "enum": [
        "UTF8",
        "Shift_JIS",
        "ISO_2022_JP",
        "EUC_JP",
        "X_SJIS_0213"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "isHtml",
      "label": "Is Html",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "bccEmailAddress",
      "label": "Bcc Email Address",
      "type": "email",
      "required": false,
      "section": "Communication Settings"
    },
    {
      "name": "ccEmailAddress",
      "label": "Cc Email Address",
      "type": "string",
      "required": false,
      "section": "Communication Settings"
    },
    {
      "name": "ccEmailType",
      "label": "Cc Email Type",
      "type": "string",
      "required": false,
      "defaultValue": "SpecificEmails",
      "enum": [
        "BillToContact",
        "SoldToContact",
        "ShipToContact",
        "SpecificEmails",
        "TenantAdmin",
        "BillToAndSoldToContacts",
        "RunOwner",
        "AllContacts",
        "InvoiceOwnerBillToContact",
        "InvoiceOwnerSoldToContact",
        "InvoiceOwnerShipToContact",
        "InvoiceOwnerBillToAndSoldToContacts",
        "InvoiceOwnerAllContacts"
      ],
      "section": "Communication Settings"
    },
    {
      "name": "emailBody",
      "label": "Email Body",
      "type": "string",
      "required": false,
      "section": "Communication Settings"
    },
    {
      "name": "emailHeaders",
      "label": "Email Headers",
      "type": "object",
      "required": false,
      "section": "Communication Settings"
    },
    {
      "name": "emailSubject",
      "label": "Email Subject",
      "type": "string",
      "required": false,
      "section": "Communication Settings"
    },
    {
      "name": "fromEmailAddress",
      "label": "From Email Address",
      "type": "string",
      "required": false,
      "section": "Communication Settings"
    },
    {
      "name": "fromEmailType",
      "label": "From Email Type",
      "type": "string",
      "required": false,
      "enum": [
        "TenantEmail",
        "RunOwner",
        "SpecificEmail"
      ],
      "section": "Communication Settings"
    },
    {
      "name": "replyToEmailAddress",
      "label": "Reply To Email Address",
      "type": "string",
      "required": false,
      "section": "Communication Settings"
    },
    {
      "name": "replyToEmailType",
      "label": "Reply To Email Type",
      "type": "string",
      "required": false,
      "enum": [
        "TenantEmail",
        "RunOwner",
        "SpecificEmail"
      ],
      "section": "Communication Settings"
    },
    {
      "name": "toEmailAddress",
      "label": "To Email Address",
      "type": "string",
      "required": false,
      "section": "Communication Settings"
    },
    {
      "name": "toEmailType",
      "label": "To Email Type",
      "type": "string",
      "required": false,
      "enum": [
        "BillToContact",
        "SoldToContact",
        "ShipToContact",
        "SpecificEmails",
        "TenantAdmin",
        "BillToAndSoldToContacts",
        "RunOwner",
        "AllContacts",
        "InvoiceOwnerBillToContact",
        "InvoiceOwnerSoldToContact",
        "InvoiceOwnerShipToContact",
        "InvoiceOwnerBillToAndSoldToContacts",
        "InvoiceOwnerAllContacts"
      ],
      "section": "Communication Settings"
    },
    {
      "name": "fromName",
      "label": "From Name",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": false,
      "maxLength": 255,
      "section": "Account Settings"
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
