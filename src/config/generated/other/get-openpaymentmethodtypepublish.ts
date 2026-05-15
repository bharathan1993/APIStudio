import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_openpaymentmethodtypepublishEndpoint: ApiEndpoint = {
  "id": "get-openpaymentmethodtypepublish",
  "name": "Retrieve a published custom payment method type",
  "description": "",
  "method": "GET",
  "path": "/open-payment-method-types/{paymentMethodTypeName}/published",
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
