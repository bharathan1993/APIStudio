import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const geteinvoicemandatesEndpoint: ApiEndpoint = {
  "id": "geteinvoicemandates",
  "name": "List mandates for downloading files",
  "description": "",
  "method": "GET",
  "path": "/v1/e-invoice/mandates",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "countryCode",
      "label": "Country Code",
      "type": "string",
      "required": false
    },
    {
      "name": "processType",
      "label": "Process Type",
      "type": "string",
      "required": false,
      "enum": [
        "Clearance",
        "ClearanceWithCancellation",
        "PEPPOLNetwork",
        "Unknown"
      ]
    },
    {
      "name": "provider",
      "label": "Provider",
      "type": "string",
      "required": false
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
