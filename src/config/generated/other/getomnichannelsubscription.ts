import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getomnichannelsubscriptionEndpoint: ApiEndpoint = {
  "id": "getomnichannelsubscription",
  "name": "Retrieve an omnichannel subscription",
  "description": "",
  "method": "GET",
  "path": "/v1/omni-channel-subscriptions/{subscriptionKey}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "subscriptionKey",
      "label": "Subscription Key",
      "type": "string",
      "required": true
    }
  ],
  "queryParams": [
    {
      "name": "getAccountDetails",
      "label": "Get Account Details",
      "type": "boolean",
      "required": false
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
