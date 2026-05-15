import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_createbillrunEndpoint: ApiEndpoint = {
  "id": "post-createbillrun",
  "name": "Create a bill run",
  "description": "",
  "method": "POST",
  "path": "/v1/bill-runs",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "autoEmail",
      "label": "Auto Email",
      "type": "boolean",
      "required": false,
      "defaultValue": false,
      "section": "Communication Settings"
    },
    {
      "name": "autoPost",
      "label": "Auto Post",
      "type": "boolean",
      "required": false,
      "defaultValue": false,
      "section": "Additional Fields"
    },
    {
      "name": "autoRenewal",
      "label": "Auto Renewal",
      "type": "boolean",
      "required": false,
      "defaultValue": false,
      "section": "Additional Fields"
    },
    {
      "name": "chargeTypeToExclude",
      "label": "Charge Type To Exclude",
      "type": "array",
      "required": false,
      "itemType": "string",
      "itemEnum": [
        "OneTime",
        "Recurring",
        "Usage"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "includeOrderLineItems",
      "label": "Include Order Line Items",
      "type": "boolean",
      "required": false,
      "defaultValue": true,
      "section": "Additional Fields"
    },
    {
      "name": "organizationLabels",
      "label": "Organization Labels",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "organizationId",
          "label": "Organization Id",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "organizationName",
          "label": "Organization Name",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "schedule",
      "label": "Schedule",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "repeatFrom",
          "label": "Repeat From",
          "type": "date",
          "required": true,
          "section": "Additional Fields"
        },
        {
          "name": "repeatTo",
          "label": "Repeat To",
          "type": "date",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "repeatType",
          "label": "Repeat Type",
          "type": "string",
          "required": true,
          "enum": [
            "None",
            "Daily",
            "Weekly",
            "Monthly"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "runTime",
          "label": "Run Time",
          "type": "number",
          "required": true,
          "section": "Additional Fields"
        },
        {
          "name": "weeklyOnDay",
          "label": "Weekly On Day",
          "type": "array",
          "required": false,
          "itemType": "string",
          "itemEnum": [
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "monthlyOnEndOfMonth",
          "label": "Monthly On End Of Month",
          "type": "boolean",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "targetDate",
      "label": "Target Date",
      "type": "date",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "targetDateMonthOffset",
      "label": "Target Date Month Offset",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "targetDateDayOfMonth",
      "label": "Target Date Day Of Month",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "batches",
      "label": "Batches",
      "type": "array",
      "required": false,
      "itemType": "string",
      "section": "Account Settings"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "billCycleDay",
      "label": "Bill Cycle Day",
      "type": "string",
      "required": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "billRunFilters",
      "label": "Bill Run Filters",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "accountId",
          "label": "Account Id",
          "type": "string",
          "required": true,
          "section": "Account Settings"
        },
        {
          "name": "filterType",
          "label": "Filter Type",
          "type": "string",
          "required": true,
          "enum": [
            "Account",
            "Subscription",
            "FilterCondition"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "condition",
          "label": "Condition",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "conditions",
              "label": "Conditions",
              "type": "array",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "field",
              "label": "Field",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "operator",
              "label": "Operator",
              "type": "string",
              "required": false,
              "enum": [
                "eq",
                "neq",
                "gt",
                "lt",
                "gte",
                "lte",
                "lk",
                "in",
                "nl",
                "nnl"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "relation",
              "label": "Relation",
              "type": "string",
              "required": false,
              "enum": [
                "and",
                "or"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "value",
              "label": "Value",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "objectType",
          "label": "Object Type",
          "type": "string",
          "required": false,
          "enum": [
            "Account",
            "Subscription",
            "RatePlanCharge"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "subscriptionId",
          "label": "Subscription Id",
          "type": "string",
          "required": false,
          "section": "Subscription Settings"
        }
      ],
      "section": "Invoice & Document Settings"
    },
    {
      "name": "billRunType",
      "label": "Bill Run Type",
      "type": "string",
      "required": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "invoiceDate",
      "label": "Invoice Date",
      "type": "date",
      "required": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "invoiceDateMonthOffset",
      "label": "Invoice Date Month Offset",
      "type": "number",
      "required": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "invoiceDateDayOfMonth",
      "label": "Invoice Date Day Of Month",
      "type": "number",
      "required": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "noEmailForZeroAmountInvoice",
      "label": "No Email For Zero Amount Invoice",
      "type": "boolean",
      "required": false,
      "defaultValue": false,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "includeSubscriptions",
      "label": "Include Subscriptions",
      "type": "boolean",
      "required": false,
      "defaultValue": true,
      "section": "Subscription Settings"
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
