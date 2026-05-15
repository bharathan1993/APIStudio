import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_usage_rate_detail_by_invoice_itemEndpoint: ApiEndpoint = {
  "id": "get-usage-rate-detail-by-invoice-item",
  "name": "Retrieve usage rate detail for an invoice item",
  "description": "",
  "method": "GET",
  "path": "/v1/invoices/invoice-item/{invoice-item-id}/usage-rate-detail",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "invoice-item-id",
      "label": "Invoice Item Id",
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
