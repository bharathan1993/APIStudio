import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_createstoredcredentialprofileEndpoint: ApiEndpoint = {
  "id": "post-createstoredcredentialprofile",
  "name": "Create a stored credential profile",
  "description": "",
  "method": "POST",
  "path": "/v1/payment-methods/{payment-method-id}/profiles",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "payment-method-id",
      "label": "Payment Method Id",
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
        "Activate",
        "Persist"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "agreedOn",
      "label": "Agreed On",
      "type": "date",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "cardSecurityCode",
      "label": "Card Security Code",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "consentAgreementRef",
      "label": "Consent Agreement Ref",
      "type": "string",
      "required": false,
      "maxLength": 128,
      "section": "Additional Fields"
    },
    {
      "name": "consentAgreementSrc",
      "label": "Consent Agreement Src",
      "type": "string",
      "required": true,
      "enum": [
        "External"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "networkTransactionId",
      "label": "Network Transaction Id",
      "type": "string",
      "required": false,
      "maxLength": 128,
      "section": "Additional Fields"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "string",
      "required": true,
      "enum": [
        "Agreed",
        "Active"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "type",
      "label": "Type",
      "type": "string",
      "required": true,
      "enum": [
        "Recurring",
        "Unscheduled"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "authGateway",
      "label": "Auth Gateway",
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
