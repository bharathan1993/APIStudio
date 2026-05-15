import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_reverserolloverEndpoint: ApiEndpoint = {
  "id": "post-reverserollover",
  "name": "Reverse fund rollover",
  "description": "",
  "method": "POST",
  "path": "/v1/ppdd/reverse-rollover",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "destinationValidityPeriod",
      "label": "Destination Validity Period",
      "type": "object",
      "required": true,
      "fields": [
        {
          "name": "endDate",
          "label": "End Date",
          "type": "date",
          "required": true,
          "section": "Additional Fields"
        },
        {
          "name": "startDate",
          "label": "Start Date",
          "type": "date",
          "required": true,
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "sourceValidityPeriod",
      "label": "Source Validity Period",
      "type": "object",
      "required": true,
      "fields": [
        {
          "name": "endDate",
          "label": "End Date",
          "type": "date",
          "required": true,
          "section": "Additional Fields"
        },
        {
          "name": "startDate",
          "label": "Start Date",
          "type": "date",
          "required": true,
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "prepaymentUom",
      "label": "Prepayment Uom",
      "type": "string",
      "required": true,
      "section": "Payment Settings"
    },
    {
      "name": "subscriptionNumber",
      "label": "Subscription Number",
      "type": "string",
      "required": true,
      "maxLength": 100,
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
