import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_fulfillmentEndpoint: ApiEndpoint = {
  "id": "put-fulfillment",
  "name": "Update a fulfillment",
  "description": "",
  "method": "PUT",
  "path": "/v1/fulfillments/{key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "key",
      "label": "Key",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "billTargetDate",
      "label": "Bill Target Date",
      "type": "date",
      "required": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "carrier",
      "label": "Carrier",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "customFields",
      "label": "Custom Fields",
      "type": "object",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "externalId",
      "label": "External Id",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "fulfillmentDate",
      "label": "Fulfillment Date",
      "type": "date",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "fulfillmentLocation",
      "label": "Fulfillment Location",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "fulfillmentSystem",
      "label": "Fulfillment System",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "quantity",
      "label": "Quantity",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "state",
      "label": "State",
      "type": "string",
      "required": false,
      "enum": [
        "Executing",
        "Booked",
        "SentToBilling",
        "Complete",
        "Cancelled"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "trackingNumber",
      "label": "Tracking Number",
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
