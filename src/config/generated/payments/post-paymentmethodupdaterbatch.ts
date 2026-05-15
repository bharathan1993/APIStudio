import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_paymentmethodupdaterbatchEndpoint: ApiEndpoint = {
  "id": "post-paymentmethodupdaterbatch",
  "name": "Create a Payment Method Updater batch asynchronously",
  "description": "",
  "method": "POST",
  "path": "/v1/payment-method-updaters/batches",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "billingCycleDay",
      "label": "Billing Cycle Day",
      "type": "number",
      "required": true,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "updaterAccountId",
      "label": "Updater Account Id",
      "type": "string",
      "required": true,
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
