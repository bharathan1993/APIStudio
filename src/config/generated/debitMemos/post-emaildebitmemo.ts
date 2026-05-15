import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_emaildebitmemoEndpoint: ApiEndpoint = {
  "id": "post-emaildebitmemo",
  "name": "Email a debit memo",
  "description": "",
  "method": "POST",
  "path": "/v1/debit-memos/{debitMemoKey}/emails",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "debitMemoKey",
      "label": "Debit Memo Key",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "emailAddresses",
      "label": "Email Addresses",
      "type": "string",
      "required": false,
      "section": "Communication Settings"
    },
    {
      "name": "includeAdditionalEmailAddresses",
      "label": "Include Additional Email Addresses",
      "type": "boolean",
      "required": false,
      "defaultValue": false,
      "enum": [
        "true",
        "false"
      ],
      "section": "Communication Settings"
    },
    {
      "name": "pdfFileId",
      "label": "Pdf File Id",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "useEmailTemplateSetting",
      "label": "Use Email Template Setting",
      "type": "boolean",
      "required": false,
      "defaultValue": false,
      "enum": [
        "true",
        "false"
      ],
      "section": "Invoice & Document Settings"
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
