import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_attachmentsEndpoint: ApiEndpoint = {
  "id": "post-attachments",
  "name": "Create an attachment",
  "description": "",
  "method": "POST",
  "path": "/v1/attachments",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "description",
      "label": "Description",
      "type": "string",
      "required": false
    },
    {
      "name": "associatedObjectType",
      "label": "Associated Object Type",
      "type": "string",
      "required": true,
      "enum": [
        "Account",
        "Invoice",
        "Subscription",
        "CreditMemo",
        "DebitMemo"
      ]
    },
    {
      "name": "associatedObjectKey",
      "label": "Associated Object Key",
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
