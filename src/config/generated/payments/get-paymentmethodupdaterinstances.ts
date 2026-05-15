import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_paymentmethodupdaterinstancesEndpoint: ApiEndpoint = {
  "id": "get-paymentmethodupdaterinstances",
  "name": "List Payment Method Updater instances",
  "description": "",
  "method": "GET",
  "path": "/v1/payment-method-updaters",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
