import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const updateaspecificgroupEndpoint: ApiEndpoint = {
  "id": "updateaspecificgroup",
  "name": "Update a group",
  "description": "",
  "method": "PUT",
  "path": "/scim/v2/Groups/{id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "schemas",
      "label": "Schemas",
      "type": "array",
      "required": false,
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "operations",
      "label": "Operations",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "op",
          "label": "Op",
          "type": "string",
          "required": true,
          "section": "Additional Fields"
        },
        {
          "name": "path",
          "label": "Path",
          "type": "string",
          "required": true,
          "section": "Additional Fields"
        },
        {
          "name": "value",
          "label": "Value",
          "type": "array",
          "required": true,
          "itemType": "object",
          "itemFields": [
            {
              "name": "value",
              "label": "Value",
              "type": "string",
              "required": true,
              "section": "Additional Fields"
            }
          ],
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
