import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_reconcilerefundEndpoint: ApiEndpoint = {
  "id": "post-reconcilerefund",
  "name": "Reconcile a refund",
  "description": "",
  "method": "POST",
  "path": "/v1/refunds/{refund-key}/reconcile",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "refund-key",
      "label": "Refund Key",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "action",
      "label": "Action",
      "type": "string",
      "required": false,
      "enum": [
        "settle",
        "reject"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "actionDate",
      "label": "Action Date",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "payoutId",
      "label": "Payout Id",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "gatewayReconciliationReason",
      "label": "Gateway Reconciliation Reason",
      "type": "string",
      "required": false,
      "section": "Payment Settings"
    },
    {
      "name": "gatewayReconciliationStatus",
      "label": "Gateway Reconciliation Status",
      "type": "string",
      "required": false,
      "section": "Payment Settings"
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
