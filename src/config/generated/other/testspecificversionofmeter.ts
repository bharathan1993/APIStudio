import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const testspecificversionofmeterEndpoint: ApiEndpoint = {
  "id": "testspecificversionofmeter",
  "name": "Test a specific version of a meter",
  "description": "",
  "method": "POST",
  "path": "/meters/debug/{meterId}/{version}",
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
    },
    {
      "name": "version",
      "label": "Version",
      "type": "string",
      "required": true
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
          "name": "sampleFileId",
          "label": "Sample File Id",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "localFileId",
          "label": "Local File Id",
          "type": "number",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "testData",
          "label": "Test Data",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "Amount",
              "label": "Amount",
              "type": "number",
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
              "name": "UsageDate",
              "label": "Usage Date",
              "type": "date",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "CostCenter",
              "label": "Cost Center",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "CustomerId",
              "label": "Customer Id",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            },
            {
              "name": "UsageIdentifier",
              "label": "Usage Identifier",
              "type": "string",
              "required": false,
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "saveTestData",
          "label": "Save Test Data",
          "type": "boolean",
          "required": false,
          "section": "Additional Fields"
        },
        {
          "name": "testDataName",
          "label": "Test Data Name",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        },
        {
          "name": "testDataId",
          "label": "Test Data Id",
          "type": "number",
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
          "required": false,
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
