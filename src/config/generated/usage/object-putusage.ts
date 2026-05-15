import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const object_putusageEndpoint: ApiEndpoint = {
  "id": "object-putusage",
  "name": "CRUD: Update a usage record",
  "description": "",
  "method": "PUT",
  "path": "/v1/object/usage/{id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": true
    }
  ],
  "queryParams": [
    {
      "name": "rejectUnknownFields",
      "label": "Reject Unknown Fields",
      "type": "boolean",
      "required": false,
      "defaultValue": false
    }
  ],
  "bodyFields": [
    {
      "name": "EndDateTime",
      "label": "End Date Time",
      "type": "date",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "Quantity",
      "label": "Quantity",
      "type": "number",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "RbeStatus",
      "label": "Rbe Status",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "StartDateTime",
      "label": "Start Date Time",
      "type": "date",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "UOM",
      "label": "U O M",
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
