import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_datalabelingjobEndpoint: ApiEndpoint = {
  "id": "get-datalabelingjob",
  "name": "Retrieve a data labeling job",
  "description": "",
  "method": "GET",
  "path": "/v1/multi-organizations/data-labeling-job/{job-id}",
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
