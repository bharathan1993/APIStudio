import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_createautobackfilljobEndpoint: ApiEndpoint = {
  "id": "post-createautobackfilljob",
  "name": "Create an auto backfill job",
  "description": "",
  "method": "POST",
  "path": "/v1/uno/data-backfill/propagation/jobs",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "type",
      "label": "Type",
      "type": "string",
      "required": true,
      "enum": [
        "RatePlanCharge",
        "OrderLineItem"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "dryRun",
      "label": "Dry Run",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "batchSize",
      "label": "Batch Size",
      "type": "number",
      "required": false,
      "defaultValue": 1000,
      "section": "Account Settings"
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
