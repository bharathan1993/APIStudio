import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const retrievemetersummarydataEndpoint: ApiEndpoint = {
  "id": "retrievemetersummarydata",
  "name": "Retrieve summary data for a meter",
  "description": "",
  "method": "POST",
  "path": "/meters/{meterId}/summary",
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
  "bodyFields": [
    {
      "name": "runType",
      "label": "Run Type",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "sessionIds",
      "label": "Session Ids",
      "type": "array",
      "required": false,
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "operatorIds",
      "label": "Operator Ids",
      "type": "array",
      "required": false,
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "groupBy",
      "label": "Group By",
      "type": "array",
      "required": false,
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "queryFromTime",
      "label": "Query From Time",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "queryToTime",
      "label": "Query To Time",
      "type": "string",
      "required": false,
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
