import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_createeinvoicefiletemplateEndpoint: ApiEndpoint = {
  "id": "post-createeinvoicefiletemplate",
  "name": "Create an e-invoice file template",
  "description": "",
  "method": "POST",
  "path": "/v1/einvoice/templates",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "content",
      "label": "Content",
      "type": "string",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "string",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "provider",
      "label": "Provider",
      "type": "string",
      "required": true,
      "enum": [
        "Sovos"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "documentType",
      "label": "Document Type",
      "type": "string",
      "required": true,
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
      "required": true,
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
