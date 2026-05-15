import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_updatecataloggroupEndpoint: ApiEndpoint = {
  "id": "put-updatecataloggroup",
  "name": "Update a catalog group",
  "description": "",
  "method": "PUT",
  "path": "/v1/catalog-groups/{catalog-group-key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "catalog-group-key",
      "label": "Catalog Group Key",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "add",
      "label": "Add",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "grade",
          "label": "Grade",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "id",
          "label": "Id",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "remove",
      "label": "Remove",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "id",
          "label": "Id",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "name",
      "label": "Name",
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
