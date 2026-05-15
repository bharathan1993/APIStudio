import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_customexchangeratesEndpoint: ApiEndpoint = {
  "id": "get-customexchangerates",
  "name": "List custom exchange rates by currency",
  "description": "",
  "method": "GET",
  "path": "/v1/custom-exchange-rates/{currency}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "currency",
      "label": "Currency",
      "type": "string",
      "required": true
    }
  ],
  "queryParams": [
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "string",
      "required": true
    },
    {
      "name": "endDate",
      "label": "End Date",
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
