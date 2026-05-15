import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_customobjectdefinitionsEndpoint: ApiEndpoint = {
  "id": "post-customobjectdefinitions",
  "name": "Create custom object definitions",
  "description": "",
  "method": "POST",
  "path": "/objects/definitions/default",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "definitions",
      "label": "Definitions",
      "type": "object",
      "required": false,
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
