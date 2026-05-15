import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const action_postquerymoreEndpoint: ApiEndpoint = {
  "id": "action-postquerymore",
  "name": "QueryMore",
  "description": "",
  "method": "POST",
  "path": "/v1/action/queryMore",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "rejectUnknownFields",
      "label": "Reject Unknown Fields",
      "type": "boolean",
      "required": false,
      "defaultValue": false
    }
  ],
  "bodyFields": [
    {
      "name": "conf",
      "label": "Conf",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "batchSize",
          "label": "Batch Size",
          "type": "number",
          "required": false,
          "section": "Account Settings"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "queryLocator",
      "label": "Query Locator",
      "type": "string",
      "required": true,
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
