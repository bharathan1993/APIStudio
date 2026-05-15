import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const createanewgroupEndpoint: ApiEndpoint = {
  "id": "createanewgroup",
  "name": "Create a group",
  "description": "",
  "method": "POST",
  "path": "/scim/v2/Groups",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "count",
      "label": "Count",
      "type": "number",
      "required": false
    },
    {
      "name": "filter",
      "label": "Filter",
      "type": "string",
      "required": false
    },
    {
      "name": "startIndex",
      "label": "Start Index",
      "type": "number",
      "required": false
    }
  ],
  "bodyFields": [
    {
      "name": "schemas",
      "label": "Schemas",
      "type": "array",
      "required": false,
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "urn:zuora:scim:schemas:1.0:GroupExtension",
      "label": "Urn:zuora:scim:schemas:1.0: Group Extension",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "schemas",
          "label": "Schemas",
          "type": "array",
          "required": false,
          "itemType": "string",
          "section": "Additional Fields"
        },
        {
          "name": "organizationId",
          "label": "Organization Id",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "displayName",
      "label": "Display Name",
      "type": "string",
      "required": false,
      "section": "Account Settings"
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
