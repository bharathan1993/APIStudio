import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const canceleinvoicebyinvoicekeyEndpoint: ApiEndpoint = {
  "id": "canceleinvoicebyinvoicekey",
  "name": "Cancel the e-invoice file for an invoice",
  "description": "",
  "method": "PUT",
  "path": "/v1/invoices/{invoiceKey}/e-invoice/cancel",
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
      "name": "reason",
      "label": "Reason",
      "type": "string",
      "required": false,
      "enum": [
        "01",
        "02",
        "03",
        "04"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "documentReferenceID",
      "label": "Document Reference I D",
      "type": "string",
      "required": false,
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
