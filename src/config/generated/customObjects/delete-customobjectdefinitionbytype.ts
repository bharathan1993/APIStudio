import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_customobjectdefinitionbytypeEndpoint: ApiEndpoint = {
  "id": "delete-customobjectdefinitionbytype",
  "name": "Delete a custom object definition",
  "description": "",
  "method": "DELETE",
  "path": "/objects/definitions/default/{object}",
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
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
