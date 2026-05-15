import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_allrecordsforcustomobjecttypeEndpoint: ApiEndpoint = {
  "id": "get-allrecordsforcustomobjecttype",
  "name": "List records for a custom object",
  "description": "",
  "method": "GET",
  "path": "/objects/records/default/{object}",
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
  "queryParams": [
    {
      "name": "q",
      "label": "Q",
      "type": "string",
      "required": false
    },
    {
      "name": "ids",
      "label": "Ids",
      "type": "string",
      "required": false
    },
    {
      "name": "pageSize",
      "label": "Page Size",
      "type": "number",
      "required": false
    },
    {
      "name": "cursor",
      "label": "Cursor",
      "type": "string",
      "required": false
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
