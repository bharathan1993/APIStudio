import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getaudittrailentriesformeterEndpoint: ApiEndpoint = {
  "id": "getaudittrailentriesformeter",
  "name": "Retrieve the audit trail entries for a meter",
  "description": "",
  "method": "GET",
  "path": "/meters/{meterId}/auditTrail/entries",
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
      "name": "sessionId",
      "label": "Session Id",
      "type": "string",
      "required": false
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
      "name": "operatorId",
      "label": "Operator Id",
      "type": "string",
      "required": false
    },
    {
      "name": "pageSize",
      "label": "Page Size",
      "type": "number",
      "required": false,
      "defaultValue": 30
    },
    {
      "name": "cursor",
      "label": "Cursor",
      "type": "string",
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
