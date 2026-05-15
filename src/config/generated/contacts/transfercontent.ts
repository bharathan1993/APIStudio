import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const transfercontentEndpoint: ApiEndpoint = {
  "id": "transfercontent",
  "name": "Transfer a contact",
  "description": "",
  "method": "PUT",
  "path": "/v1/contacts/{contactId}/transfer",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "contactId",
      "label": "Contact Id",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "destinationAccountKey",
      "label": "Destination Account Key",
      "type": "string",
      "required": false,
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
