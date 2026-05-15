import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const updateproductrateplanEndpoint: ApiEndpoint = {
  "id": "updateproductrateplan",
  "name": "Update a product rate plan",
  "description": "",
  "method": "PUT",
  "path": "/commerce/plans",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "grade",
      "label": "Grade",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "date",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "date",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "name",
      "label": "Name",
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
