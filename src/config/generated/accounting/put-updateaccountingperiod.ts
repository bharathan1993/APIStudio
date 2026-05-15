import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_updateaccountingperiodEndpoint: ApiEndpoint = {
  "id": "put-updateaccountingperiod",
  "name": "Update an accounting period",
  "description": "",
  "method": "PUT",
  "path": "/v1/accounting-periods/{ap-id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "ap-id",
      "label": "Ap Id",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "endDate",
      "label": "End Date",
      "type": "date",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "fiscalYear",
      "label": "Fiscal Year",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "fiscalQuarter",
      "label": "Fiscal Quarter",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "string",
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
