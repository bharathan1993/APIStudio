import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const create_fulfillmentEndpoint: ApiEndpoint = {
  "id": "create-fulfillment",
  "name": "Create fulfillments",
  "description": "",
  "method": "POST",
  "path": "/v1/fulfillments",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "fulfillments",
      "label": "Fulfillments",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "orderLineItemId",
          "label": "Order Line Item Id",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
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
          "name": "excludeItemBillingFromRevenueAccounting",
          "label": "Exclude Item Billing From Revenue Accounting",
          "type": "boolean",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "excludeItemBookingFromRevenueAccounting",
          "label": "Exclude Item Booking From Revenue Accounting",
          "type": "boolean",
          "required": false,
          "section": "Account Settings"
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
          "name": "fulfillmentType",
          "label": "Fulfillment Type",
          "type": "string",
          "required": false,
          "enum": [
            "Delivery",
            "Return"
          ],
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
        },
        {
          "name": "fulfillmentItems",
          "label": "Fulfillment Items",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "customFields",
              "label": "Custom Fields",
              "type": "object",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "itemIdentifier",
              "label": "Item Identifier",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "processingOptions",
      "label": "Processing Options",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "billingOptions",
          "label": "Billing Options",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "documentDate",
              "label": "Document Date",
              "type": "date",
              "required": false,
              "section": "Invoice & Document Settings"
            },
            {
              "name": "targetDate",
              "label": "Target Date",
              "type": "date",
              "required": false,
              "section": "Additional Fields"
            }
          ],
          "section": "Invoice & Document Settings"
        },
        {
          "name": "runBilling",
          "label": "Run Billing",
          "type": "boolean",
          "required": false,
          "section": "Invoice & Document Settings"
        }
      ],
      "section": "Additional Fields"
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
