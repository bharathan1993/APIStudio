import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_rampbyrampnumberEndpoint: ApiEndpoint = {
  "id": "get-rampbyrampnumber",
  "name": "Retrieve a ramp",
  "description": "",
  "method": "GET",
  "path": "/v1/ramps/{rampNumber}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "rampNumber",
      "label": "Ramp Number",
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
