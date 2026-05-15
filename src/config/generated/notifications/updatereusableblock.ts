import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const updatereusableblockEndpoint: ApiEndpoint = {
  "id": "updatereusableblock",
  "name": "Update a reusable block",
  "description": "",
  "method": "PUT",
  "path": "/notifications/reusable-blocks/{blockKey}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "blockKey",
      "label": "Block Key",
      "type": "string",
      "required": true
    }
  ],
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
      "required": false,
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
      "required": false,
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
      "required": false,
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
