import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_executeinvoicescheduleEndpoint: ApiEndpoint = {
  "id": "post-executeinvoiceschedule",
  "name": "Execute an invoice schedule",
  "description": "",
  "method": "POST",
  "path": "/v1/invoice-schedules/{scheduleKey}/execute",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "scheduleKey",
      "label": "Schedule Key",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "scheduleItemId",
      "label": "Schedule Item Id",
      "type": "string",
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
