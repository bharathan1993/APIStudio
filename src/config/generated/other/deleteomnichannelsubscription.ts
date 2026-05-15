import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const deleteomnichannelsubscriptionEndpoint: ApiEndpoint = {
  "id": "deleteomnichannelsubscription",
  "name": "Delete an omnichannel subscription",
  "description": "",
  "method": "DELETE",
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
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
