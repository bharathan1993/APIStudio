import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_einvoicefiletemplateEndpoint: ApiEndpoint = {
  "id": "put-einvoicefiletemplate",
  "name": "Update an e-invoice file template",
  "description": "",
  "method": "PUT",
  "path": "/v1/einvoice/templates/{key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "key",
      "label": "Key",
      "type": "string",
      "required": true
    }
  ],
  "bodyFields": [
    {
      "name": "content",
      "label": "Content",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "provider",
      "label": "Provider",
      "type": "string",
      "required": false,
      "enum": [
        "Sovos"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "documentType",
      "label": "Document Type",
      "type": "string",
      "required": false,
      "enum": [
        "Invoice",
        "CreditMemo",
        "DebitMemo"
      ],
      "section": "Invoice & Document Settings"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": false,
      "maxLength": 255,
      "section": "Account Settings"
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
