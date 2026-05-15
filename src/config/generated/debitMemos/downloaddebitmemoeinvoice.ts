import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const downloaddebitmemoeinvoiceEndpoint: ApiEndpoint = {
  "id": "downloaddebitmemoeinvoice",
  "name": "Download a debit memo in the specified file format",
  "description": "",
  "method": "GET",
  "path": "/v1/debit-memos/{debitMemoKey}/e-invoice/download",
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
  "queryParams": [
    {
      "name": "fileFormat",
      "label": "File Format",
      "type": "string",
      "required": false,
      "enum": [
        "XML",
        "PDF",
        "ZIP",
        "OASIS_Universal_Business_Language_XML"
      ]
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
