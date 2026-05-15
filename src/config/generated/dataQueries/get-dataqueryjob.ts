import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_dataqueryjobEndpoint: ApiEndpoint = {
  "id": "get-dataqueryjob",
  "name": "Retrieve a data query job",
  "description": "",
  "method": "GET",
  "path": "/query/jobs/{job-id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "job-id",
      "label": "Job Id",
      "type": "string",
      "required": true,
      "maxLength": 36,
      "minLength": 36
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
