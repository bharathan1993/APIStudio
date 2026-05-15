import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_cataloggroupEndpoint: ApiEndpoint = {
  "id": "delete-cataloggroup",
  "name": "Delete a catalog group",
  "description": "",
  "method": "DELETE",
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
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
