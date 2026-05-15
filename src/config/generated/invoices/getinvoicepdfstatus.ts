import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getinvoicepdfstatusEndpoint: ApiEndpoint = {
  "id": "getinvoicepdfstatus",
  "name": "Retrieve the PDF file generation status of invoices",
  "description": "",
  "method": "GET",
  "path": "/v1/invoices/pdf-status",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "invoiceKeys",
      "label": "Invoice Keys",
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
