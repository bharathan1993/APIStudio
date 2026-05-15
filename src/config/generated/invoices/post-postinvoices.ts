import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_postinvoicesEndpoint: ApiEndpoint = {
  "id": "post-postinvoices",
  "name": "Post invoices",
  "description": "",
  "method": "POST",
  "path": "/v1/invoices/bulk-post",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "invoices",
      "label": "Invoices",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "id",
          "label": "Id",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "invoiceDate",
          "label": "Invoice Date",
          "type": "date",
          "required": false,
          "section": "Invoice & Document Settings"
        }
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
