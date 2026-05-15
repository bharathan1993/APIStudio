import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_processsettingsbatchrequestEndpoint: ApiEndpoint = {
  "id": "post-processsettingsbatchrequest",
  "name": "Submit settings requests",
  "description": "",
  "method": "POST",
  "path": "/settings/batch-requests",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "requests",
      "label": "Requests",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "body",
          "label": "Body",
          "type": "object",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "children",
          "label": "Children",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "body",
              "label": "Body",
              "type": "object",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "id",
              "label": "Id",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "method",
              "label": "Method",
              "type": "string",
              "required": false,
              "enum": [
                "GET",
                "HEAD",
                "POST",
                "PUT",
                "PATCH",
                "DELETE",
                "OPTIONS",
                "TRACE"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "url",
              "label": "Url",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "id",
          "label": "Id",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "method",
          "label": "Method",
          "type": "string",
          "required": false,
          "enum": [
            "GET",
            "HEAD",
            "POST",
            "PUT",
            "PATCH",
            "DELETE",
            "OPTIONS",
            "TRACE"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "url",
          "label": "Url",
          "type": "string",
          "required": false,
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
