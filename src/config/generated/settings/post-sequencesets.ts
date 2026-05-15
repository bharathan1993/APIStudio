import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_sequencesetsEndpoint: ApiEndpoint = {
  "id": "post-sequencesets",
  "name": "Create sequence sets",
  "description": "",
  "method": "POST",
  "path": "/v1/sequence-sets",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "sequenceSets",
      "label": "Sequence Sets",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "creditMemo",
          "label": "Credit Memo",
          "type": "object",
          "required": true,
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
          "required": true,
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
          "required": true,
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
          "required": true,
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
