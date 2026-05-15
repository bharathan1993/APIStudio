import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_openpaymentmethodtyperevisionEndpoint: ApiEndpoint = {
  "id": "get-openpaymentmethodtyperevision",
  "name": "Retrieve a specific draft revision of a custom payment method type",
  "description": "",
  "method": "GET",
  "path": "/open-payment-method-types/{paymentMethodTypeName}/draft/{revisionNumber}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "paymentMethodTypeName",
      "label": "Payment Method Type Name",
      "type": "string",
      "required": true
    },
    {
      "name": "revisionNumber",
      "label": "Revision Number",
      "type": "number",
      "required": true
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
