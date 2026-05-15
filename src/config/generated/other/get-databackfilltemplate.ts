import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_databackfilltemplateEndpoint: ApiEndpoint = {
  "id": "get-databackfilltemplate",
  "name": "Download a data backfill template file",
  "description": "",
  "method": "GET",
  "path": "/v1/uno/data-backfill/jobs/{type}/template",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "type",
      "label": "Type",
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
