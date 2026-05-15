import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_customobjectrecordsEndpoint: ApiEndpoint = {
  "id": "post-customobjectrecords",
  "name": "Create custom object records",
  "description": "",
  "method": "POST",
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
  "bodyFields": [
    {
      "name": "allowPartialSuccess",
      "label": "Allow Partial Success",
      "type": "boolean",
      "required": false,
      "defaultValue": false,
      "section": "Additional Fields"
    },
    {
      "name": "records",
      "label": "Records",
      "type": "array",
      "required": true,
      "itemType": "object",
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
