import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_bookingdatebackfilljobbyidEndpoint: ApiEndpoint = {
  "id": "get-bookingdatebackfilljobbyid",
  "name": "Retrieve a booking date backfill job",
  "description": "",
  "method": "GET",
  "path": "/v1/uno/data-backfill/bookingdate/jobs/{jobId}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "jobId",
      "label": "Job Id",
      "type": "string",
      "required": true,
      "maxLength": 32,
      "minLength": 32
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
