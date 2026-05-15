import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_allcustomobjectdefinitionsinnamespaceEndpoint: ApiEndpoint = {
  "id": "get-allcustomobjectdefinitionsinnamespace",
  "name": "List custom object definitions",
  "description": "",
  "method": "GET",
  "path": "/objects/definitions/default",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "select",
      "label": "Select",
      "type": "string",
      "required": false,
      "enum": [
        "type"
      ]
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
