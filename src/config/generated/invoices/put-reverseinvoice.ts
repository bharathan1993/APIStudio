import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_reverseinvoiceEndpoint: ApiEndpoint = {
  "id": "put-reverseinvoice",
  "name": "Reverse an invoice",
  "description": "",
  "method": "PUT",
  "path": "/v1/invoices/{invoiceKey}/reverse",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "invoiceKey",
      "label": "Invoice Key",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "applyEffectiveDate",
      "label": "Apply Effective Date",
      "type": "date",
      "required": false,
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "memoDate",
      "label": "Memo Date",
      "type": "date",
      "required": false,
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "comment",
      "label": "Comment",
      "type": "string",
      "required": false,
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "reasonCode",
      "label": "Reason Code",
      "type": "string",
      "required": false,
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
