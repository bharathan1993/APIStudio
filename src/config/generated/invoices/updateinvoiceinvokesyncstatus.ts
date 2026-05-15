import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const updateinvoiceinvokesyncstatusEndpoint: ApiEndpoint = {
  "id": "updateinvoiceinvokesyncstatus",
  "name": "Sync the e-Invoice status of an invoice",
  "description": "",
  "method": "PUT",
  "path": "/v1/invoices/{invoiceKey}/e-invoice/sync-status",
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
  "queryParams": [
    {
      "name": "shouldIncludeAcknowledged",
      "label": "Should Include Acknowledged",
      "type": "boolean",
      "required": false,
      "defaultValue": false
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
