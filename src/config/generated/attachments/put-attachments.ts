import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_attachmentsEndpoint: ApiEndpoint = {
  "id": "put-attachments",
  "name": "Update an attachment",
  "description": "",
  "method": "PUT",
  "path": "/v1/attachments/{attachment-id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "attachment-id",
      "label": "Attachment Id",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "fileName",
      "label": "File Name",
      "type": "string",
      "required": false,
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
