import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_reversepaymentEndpoint: ApiEndpoint = {
  "id": "post-reversepayment",
  "name": "Reverse a payment",
  "description": "",
  "method": "POST",
  "path": "/v1/gateway-settlement/payments/{payment-key}/chargeback",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "payment-key",
      "label": "Payment Key",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "required": true,
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
      "name": "referenceId",
      "label": "Reference Id",
      "type": "string",
      "required": false,
      "maxLength": 100,
      "section": "Additional Fields"
    },
    {
      "name": "secondReferenceId",
      "label": "Second Reference Id",
      "type": "string",
      "required": false,
      "maxLength": 100,
      "section": "Additional Fields"
    },
    {
      "name": "settledOn",
      "label": "Settled On",
      "type": "date",
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
    },
    {
      "name": "gatewayResponse",
      "label": "Gateway Response",
      "type": "string",
      "required": false,
      "section": "Payment Settings"
    },
    {
      "name": "gatewayResponseCode",
      "label": "Gateway Response Code",
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
