import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_einvoicefiletemplatesEndpoint: ApiEndpoint = {
  "id": "get-einvoicefiletemplates",
  "name": "List e-invoice file templates",
  "description": "",
  "method": "GET",
  "path": "/v1/einvoice/templates",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "country",
      "label": "Country",
      "type": "string",
      "required": true
    },
    {
      "name": "documentType",
      "label": "Document Type",
      "type": "string",
      "required": true,
      "enum": [
        "Invoice",
        "CreditMemo",
        "DebitMemo"
      ]
    },
    {
      "name": "provider",
      "label": "Provider",
      "type": "string",
      "required": true
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
