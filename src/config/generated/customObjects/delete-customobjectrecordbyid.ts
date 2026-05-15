import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_customobjectrecordbyidEndpoint: ApiEndpoint = {
  "id": "delete-customobjectrecordbyid",
  "name": "Delete a custom object record",
  "description": "",
  "method": "DELETE",
  "path": "/objects/records/default/{object}/{id}",
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
    },
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": true,
      "maxLength": 36,
      "minLength": 36
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
