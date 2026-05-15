import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_stopdatabackfilljobbyidEndpoint: ApiEndpoint = {
  "id": "put-stopdatabackfilljobbyid",
  "name": "Stop a data backfill job",
  "description": "",
  "method": "PUT",
  "path": "/v1/uno/data-backfill/jobs/{jobId}",
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
  "bodyFields": [
    {
      "name": "status",
      "label": "Status",
      "type": "string",
      "required": true,
      "enum": [
        "Stopping"
      ],
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
