import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getpresignedurlformeterexportEndpoint: ApiEndpoint = {
  "id": "getpresignedurlformeterexport",
  "name": "Retrieve the presigned URL for an export job",
  "description": "",
  "method": "GET",
  "path": "/meters/auditTrail/presignedUrl",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "fileKey",
      "label": "File Key",
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
