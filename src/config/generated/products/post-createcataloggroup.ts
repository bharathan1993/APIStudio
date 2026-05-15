import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_createcataloggroupEndpoint: ApiEndpoint = {
  "id": "post-createcataloggroup",
  "name": "Create a catalog group",
  "description": "",
  "method": "POST",
  "path": "/v1/catalog-groups",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "productRatePlans",
      "label": "Product Rate Plans",
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
      "name": "type",
      "label": "Type",
      "type": "string",
      "required": false,
      "defaultValue": "Grading",
      "enum": [
        "Grading",
        "Display"
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
