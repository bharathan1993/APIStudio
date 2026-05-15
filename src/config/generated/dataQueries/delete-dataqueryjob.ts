import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_dataqueryjobEndpoint: ApiEndpoint = {
  "id": "delete-dataqueryjob",
  "name": "Cancel a data query job",
  "description": "",
  "method": "DELETE",
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
      "maxLength": 64,
      "minLength": 64
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
