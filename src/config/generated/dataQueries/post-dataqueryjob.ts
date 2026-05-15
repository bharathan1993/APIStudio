import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_dataqueryjobEndpoint: ApiEndpoint = {
  "id": "post-dataqueryjob",
  "name": "Submit a data query",
  "description": "",
  "method": "POST",
  "path": "/query/jobs",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "columnSeparator",
      "label": "Column Separator",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "compression",
      "label": "Compression",
      "type": "string",
      "required": true,
      "enum": [
        "NONE",
        "GZIP",
        "ZIP"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "encryptionKey",
      "label": "Encryption Key",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "output",
      "label": "Output",
      "type": "object",
      "required": true,
      "fields": [
        {
          "name": "target",
          "label": "Target",
          "type": "string",
          "required": true,
          "enum": [
            "S3"
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "outputFormat",
      "label": "Output Format",
      "type": "string",
      "required": true,
      "enum": [
        "JSON",
        "CSV",
        "TSV",
        "DSV"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "string",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "readDeleted",
      "label": "Read Deleted",
      "type": "boolean",
      "required": false,
      "defaultValue": false,
      "section": "Additional Fields"
    },
    {
      "name": "sourceData",
      "label": "Source Data",
      "type": "string",
      "required": false,
      "enum": [
        "LIVE",
        "WAREHOUSE"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "useIndexJoin",
      "label": "Use Index Join",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "warehouseSize",
      "label": "Warehouse Size",
      "type": "string",
      "required": false,
      "enum": [
        "xsmall",
        "NULL"
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
