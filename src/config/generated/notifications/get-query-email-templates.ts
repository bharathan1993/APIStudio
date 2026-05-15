import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_query_email_templatesEndpoint: ApiEndpoint = {
  "id": "get-query-email-templates",
  "name": "List email templates",
  "description": "",
  "method": "GET",
  "path": "/notifications/email-templates",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "start",
      "label": "Start",
      "type": "number",
      "required": false,
      "defaultValue": 1
    },
    {
      "name": "limit",
      "label": "Limit",
      "type": "number",
      "required": false,
      "defaultValue": 20
    },
    {
      "name": "eventCategory",
      "label": "Event Category",
      "type": "number",
      "required": false
    },
    {
      "name": "eventTypeName",
      "label": "Event Type Name",
      "type": "string",
      "required": false
    },
    {
      "name": "name",
      "label": "Name",
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
