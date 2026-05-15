import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_sequencesetEndpoint: ApiEndpoint = {
  "id": "put-sequenceset",
  "name": "Update a sequence set",
  "description": "",
  "method": "PUT",
  "path": "/v1/sequence-sets/{id}",
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
      "name": "creditMemo",
      "label": "Credit Memo",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "prefix",
          "label": "Prefix",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "startNumber",
          "label": "Start Number",
          "type": "number",
          "required": false,
          "section": "Account Settings"
        }
      ],
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "debitMemo",
      "label": "Debit Memo",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "prefix",
          "label": "Prefix",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "startNumber",
          "label": "Start Number",
          "type": "number",
          "required": false,
          "section": "Account Settings"
        }
      ],
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "invoice",
      "label": "Invoice",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "prefix",
          "label": "Prefix",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "startNumber",
          "label": "Start Number",
          "type": "number",
          "required": false,
          "section": "Account Settings"
        }
      ],
      "section": "Invoice & Document Settings"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "payment",
      "label": "Payment",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "prefix",
          "label": "Prefix",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "startNumber",
          "label": "Start Number",
          "type": "number",
          "required": false,
          "section": "Account Settings"
        }
      ],
      "section": "Payment Settings"
    },
    {
      "name": "refund",
      "label": "Refund",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "prefix",
          "label": "Prefix",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "startNumber",
          "label": "Start Number",
          "type": "number",
          "required": false,
          "section": "Account Settings"
        }
      ],
      "section": "Additional Fields"
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
