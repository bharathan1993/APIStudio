import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const createreusableblockEndpoint: ApiEndpoint = {
  "id": "createreusableblock",
  "name": "Create a reusable block",
  "description": "",
  "method": "POST",
  "path": "/notifications/reusable-blocks",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "active",
      "label": "Active",
      "type": "boolean",
      "required": false,
      "defaultValue": true,
      "section": "Additional Fields"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "string",
      "required": true,
      "enum": [
        "Headers",
        "Footers",
        "Other"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "content",
      "label": "Content",
      "type": "string",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "tags",
      "label": "Tags",
      "type": "array",
      "required": false,
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": true,
      "section": "Account Settings"
    },
    {
      "name": "number",
      "label": "Number",
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
