import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_billingdocumentfilesdeletionjobEndpoint: ApiEndpoint = {
  "id": "post-billingdocumentfilesdeletionjob",
  "name": "Create a job to hard delete billing document files",
  "description": "",
  "method": "POST",
  "path": "/v1/accounts/billing-documents/files/deletion-jobs",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "accountIds",
      "label": "Account Ids",
      "type": "array",
      "required": false,
      "itemType": "string",
      "section": "Account Settings"
    },
    {
      "name": "accountKeys",
      "label": "Account Keys",
      "type": "array",
      "required": false,
      "itemType": "string",
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
