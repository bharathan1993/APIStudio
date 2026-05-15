import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const createsummarystatementrunEndpoint: ApiEndpoint = {
  "id": "createsummarystatementrun",
  "name": "Create a summary statement run",
  "description": "",
  "method": "POST",
  "path": "/v1/summary-statement-runs",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "runType",
      "label": "Run Type",
      "type": "string",
      "required": true,
      "enum": [
        "AdHoc"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "dateRangeType",
      "label": "Date Range Type",
      "type": "string",
      "required": true,
      "enum": [
        "Custom",
        "PreviousThreeCalendarMonth",
        "PreviousOneCalendarMonth"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "date",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "date",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "targetAccountCategory",
      "label": "Target Account Category",
      "type": "string",
      "required": true,
      "enum": [
        "SingleAccount",
        "AllAccounts",
        "AccountsWithOpenInvoices",
        "AccountsWithOpenBalances",
        "AccountsWithoutInvoices",
        "AccountsWithoutInvoicesAndOpenBalances"
      ],
      "section": "Account Settings"
    },
    {
      "name": "accountKey",
      "label": "Account Key",
      "type": "string",
      "required": false,
      "section": "Account Settings"
    },
    {
      "name": "batchName",
      "label": "Batch Name",
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
      "name": "autoEmailEnabled",
      "label": "Auto Email Enabled",
      "type": "boolean",
      "required": false,
      "section": "Communication Settings"
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
