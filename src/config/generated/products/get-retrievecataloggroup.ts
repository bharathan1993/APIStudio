import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_retrievecataloggroupEndpoint: ApiEndpoint = {
  "id": "get-retrievecataloggroup",
  "name": "Retrieve a catalog group",
  "description": "",
  "method": "GET",
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
