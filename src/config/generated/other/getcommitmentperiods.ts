import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getcommitmentperiodsEndpoint: ApiEndpoint = {
  "id": "getcommitmentperiods",
  "name": "List periods for a commitment",
  "description": "",
  "method": "GET",
  "path": "/commitments/periods",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "commitmentKey",
      "label": "Commitment Key",
      "type": "string",
      "required": false
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "date",
      "required": false
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "date",
      "required": false
    },
    {
      "name": "accountNumber",
      "label": "Account Number",
      "type": "string",
      "required": false
    },
    {
      "name": "page",
      "label": "Page",
      "type": "number",
      "required": false,
      "defaultValue": 1
    },
    {
      "name": "pageSize",
      "label": "Page Size",
      "type": "number",
      "required": false,
      "defaultValue": 20
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
