import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const create_bulkpdftozipgenerationEndpoint: ApiEndpoint = {
  "id": "create-bulkpdftozipgeneration",
  "name": "Export bulk PDF files",
  "description": "",
  "method": "POST",
  "path": "/v1/operations/bulk-pdf",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "documents",
      "label": "Documents",
      "type": "array",
      "required": true,
      "itemType": "object",
      "itemFields": [
        {
          "name": "docType",
          "label": "Doc Type",
          "type": "string",
          "required": false,
          "enum": [
            "Invoice",
            "CreditMemo",
            "DebitMemo"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "objectIds",
          "label": "Object Ids",
          "type": "array",
          "required": false,
          "itemType": "string",
          "section": "Additional Fields"
        }
      ],
      "section": "Invoice & Document Settings"
    },
    {
      "name": "fileName",
      "label": "File Name",
      "type": "string",
      "required": true,
      "maxLength": 32,
      "section": "Account Settings"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": false,
      "maxLength": 32,
      "section": "Account Settings"
    },
    {
      "name": "indexFileFormat",
      "label": "Index File Format",
      "type": "string",
      "required": true,
      "enum": [
        "JSON",
        "CSV"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "generateMissingPDF",
      "label": "Generate Missing P D F",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "ignoreArchivedFiles",
      "label": "Ignore Archived Files",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "persistIndexFile",
      "label": "Persist Index File",
      "type": "boolean",
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
