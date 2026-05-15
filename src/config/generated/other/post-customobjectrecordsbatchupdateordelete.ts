import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_customobjectrecordsbatchupdateordeleteEndpoint: ApiEndpoint = {
  "id": "post-customobjectrecordsbatchupdateordelete",
  "name": "Update or delete custom object records",
  "description": "",
  "method": "POST",
  "path": "/objects/batch/default/{object}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "object",
      "label": "Object",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "action",
      "label": "Action",
      "type": "object",
      "required": true,
      "fields": [
        {
          "name": "allowPartialSuccess",
          "label": "Allow Partial Success",
          "type": "boolean",
          "required": false,
          "defaultValue": false,
          "section": "Additional Fields"
        },
        {
          "name": "ids",
          "label": "Ids",
          "type": "array",
          "required": false,
          "itemType": "string",
          "section": "Additional Fields"
        },
        {
          "name": "records",
          "label": "Records",
          "type": "object",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "type",
          "label": "Type",
          "type": "string",
          "required": true,
          "enum": [
            "delete",
            "update"
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
