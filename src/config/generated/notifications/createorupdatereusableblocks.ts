import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const createorupdatereusableblocksEndpoint: ApiEndpoint = {
  "id": "createorupdatereusableblocks",
  "name": "Create or update reusable blocks",
  "description": "",
  "method": "POST",
  "path": "/notifications/reusable-blocks/import",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "allowPartialSuccess",
      "label": "Allow Partial Success",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "reusableBlocks",
      "label": "Reusable Blocks",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
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
          "name": "id",
          "label": "Id",
          "type": "string",
          "required": false,
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
        },
        {
          "name": "tags",
          "label": "Tags",
          "type": "array",
          "required": false,
          "itemType": "string",
          "section": "Additional Fields"
        }
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
