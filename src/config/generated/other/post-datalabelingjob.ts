import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_datalabelingjobEndpoint: ApiEndpoint = {
  "id": "post-datalabelingjob",
  "name": "Submit a data labeling job",
  "description": "",
  "method": "POST",
  "path": "/v1/multi-organizations/data-labeling-job",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "ids",
      "label": "Ids",
      "type": "array",
      "required": false,
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "objectType",
      "label": "Object Type",
      "type": "string",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "orgIds",
      "label": "Org Ids",
      "type": "array",
      "required": false,
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "orgs",
      "label": "Orgs",
      "type": "array",
      "required": false,
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "queryType",
      "label": "Query Type",
      "type": "string",
      "required": true,
      "enum": [
        "ByZoql",
        "ById"
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
