import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const ingestusageeventsEndpoint: ApiEndpoint = {
  "id": "ingestusageevents",
  "name": "Ingest usage events for a meter",
  "description": "",
  "method": "POST",
  "path": "/usage/bulk/{meterGlobalId}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "meterGlobalId",
      "label": "Meter Global Id",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "CustomerId",
      "label": "Customer Id",
      "type": "string",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "UsageIdentifier",
      "label": "Usage Identifier",
      "type": "string",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "UsageDate",
      "label": "Usage Date",
      "type": "date",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "Quantity",
      "label": "Quantity",
      "type": "number",
      "required": true,
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
