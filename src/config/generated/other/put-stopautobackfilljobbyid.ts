import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_stopautobackfilljobbyidEndpoint: ApiEndpoint = {
  "id": "put-stopautobackfilljobbyid",
  "name": "Stop an auto backfill job",
  "description": "",
  "method": "PUT",
  "path": "/v1/uno/data-backfill/propagation/jobs/{jobId}",
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
