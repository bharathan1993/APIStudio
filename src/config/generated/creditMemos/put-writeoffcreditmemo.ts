import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_writeoffcreditmemoEndpoint: ApiEndpoint = {
  "id": "put-writeoffcreditmemo",
  "name": "Write off a credit memo",
  "description": "",
  "method": "PUT",
  "path": "/v1/credit-memos/{creditMemoId}/write-off",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "creditMemoId",
      "label": "Credit Memo Id",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "comment",
      "label": "Comment",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "reasonCode",
      "label": "Reason Code",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "memoDate",
      "label": "Memo Date",
      "type": "date",
      "required": false,
      "section": "Credit & Settlement Settings"
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
