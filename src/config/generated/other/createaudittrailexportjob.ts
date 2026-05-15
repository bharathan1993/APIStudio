import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const createaudittrailexportjobEndpoint: ApiEndpoint = {
  "id": "createaudittrailexportjob",
  "name": "Create a job to export audit trail data for a meter",
  "description": "",
  "method": "POST",
  "path": "/meters/{meterId}/auditTrail/export",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "meterId",
      "label": "Meter Id",
      "type": "number",
      "required": true
    }
  ],
  "queryParams": [
    {
      "name": "exportType",
      "label": "Export Type",
      "type": "string",
      "required": true,
      "enum": [
        "SAMPLE",
        "ERROR"
      ]
    },
    {
      "name": "runType",
      "label": "Run Type",
      "type": "string",
      "required": true,
      "enum": [
        "DEBUG",
        "NORMAL"
      ]
    },
    {
      "name": "sessionIds",
      "label": "Session Ids",
      "type": "array",
      "required": false,
      "itemType": "string"
    },
    {
      "name": "runStatuses",
      "label": "Run Statuses",
      "type": "array",
      "required": false,
      "itemType": "string"
    },
    {
      "name": "operatorIds",
      "label": "Operator Ids",
      "type": "array",
      "required": false,
      "itemType": "string"
    },
    {
      "name": "queryFromTime",
      "label": "Query From Time",
      "type": "string",
      "required": true
    },
    {
      "name": "queryToTime",
      "label": "Query To Time",
      "type": "string",
      "required": true
    },
    {
      "name": "format",
      "label": "Format",
      "type": "string",
      "required": false,
      "defaultValue": "csv"
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
