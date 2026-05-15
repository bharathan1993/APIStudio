import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_systemhealthbillingdocvolumesummaryEndpoint: ApiEndpoint = {
  "id": "get-systemhealthbillingdocvolumesummary",
  "name": "List billing document volume summary records",
  "description": "",
  "method": "GET",
  "path": "/system-health/billing-documents/volume-summary",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "startTime",
      "label": "Start Time",
      "type": "date",
      "required": true
    },
    {
      "name": "endTime",
      "label": "End Time",
      "type": "date",
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
