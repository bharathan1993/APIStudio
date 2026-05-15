import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const runspecificversionofmeterEndpoint: ApiEndpoint = {
  "id": "runspecificversionofmeter",
  "name": "Run a specific version of a meter",
  "description": "",
  "method": "POST",
  "path": "/meters/run/{meterId}/{version}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "meterId",
      "label": "Meter Id",
      "type": "string",
      "required": true
    },
    {
      "name": "version",
      "label": "Version",
      "type": "string",
      "required": true,
      "enum": [
        "0.0.1"
      ]
    }
  ],
  "bodyFields": [
    {
      "name": "sourceOptions",
      "label": "Source Options",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "processorId",
          "label": "Processor Id",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "localFileId",
          "label": "Local File Id",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "eventStoreSourceOptions",
      "label": "Event Store Source Options",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "processorId",
          "label": "Processor Id",
          "type": "string",
          "required": true,
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
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "runtimeSourceConfigs",
      "label": "Runtime Source Configs",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "processorId",
          "label": "Processor Id",
          "type": "string",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "sourceType",
          "label": "Source Type",
          "type": "string",
          "required": true,
          "enum": [
            "LOCAL_FS",
            "S3",
            "SNOWFLAKE",
            "EVENT_STORE"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "localFs",
          "label": "Local Fs",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "fileId",
              "label": "File Id",
              "type": "number",
              "required": true,
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "s3",
          "label": "S3",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "connectionName",
              "label": "Connection Name",
              "type": "string",
              "required": false,
              "section": "Account Settings"
            },
            {
              "name": "connectionVersion",
              "label": "Connection Version",
              "type": "number",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "paths",
              "label": "Paths",
              "type": "array",
              "required": true,
              "itemType": "string",
              "section": "Additional Fields"
            },
            {
              "name": "fileFormat",
              "label": "File Format",
              "type": "string",
              "required": true,
              "enum": [
                "CSV",
                "EXCEL",
                "PARQUET",
                "JSON",
                "XML",
                "AVRO"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "incremental",
              "label": "Incremental",
              "type": "boolean",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "monitorInterval",
              "label": "Monitor Interval",
              "type": "number",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "retentionTime",
              "label": "Retention Time",
              "type": "number",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "batchSize",
              "label": "Batch Size",
              "type": "number",
              "required": false,
              "section": "Account Settings"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "snowflake",
          "label": "Snowflake",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "database",
              "label": "Database",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "schema",
              "label": "Schema",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "table",
              "label": "Table",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "query",
              "label": "Query",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "warehouse",
              "label": "Warehouse",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "role",
              "label": "Role",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "unloadFileFormat",
              "label": "Unload File Format",
              "type": "string",
              "required": false,
              "enum": [
                "CSV",
                "EXCEL",
                "PARQUET",
                "JSON",
                "XML",
                "AVRO"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "queryParameters",
              "label": "Query Parameters",
              "type": "object",
              "required": false,
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "eventStore",
          "label": "Event Store",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "storeId",
              "label": "Store Id",
              "type": "string",
              "required": true,
              "section": "Additional Fields"
            },
            {
              "name": "startDate",
              "label": "Start Date",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "endDate",
              "label": "End Date",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "query",
              "label": "Query",
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
      "name": "uniqueKey",
      "label": "Unique Key",
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
