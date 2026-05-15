import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_einvoicingserviceproviderEndpoint: ApiEndpoint = {
  "id": "post-einvoicingserviceprovider",
  "name": "Create an e-invoicing service provider",
  "description": "",
  "method": "POST",
  "path": "/v1/einvoice/service-providers",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "companyIdentifier",
      "label": "Company Identifier",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "provider",
      "label": "Provider",
      "type": "string",
      "required": true,
      "enum": [
        "Sovos",
        "PEPPOL",
        "Avalara"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "test",
      "label": "Test",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "apiKey",
      "label": "Api Key",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "secretKey",
      "label": "Secret Key",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "use_certificate",
      "label": "Use Certificate",
      "type": "boolean",
      "required": false,
      "defaultValue": true,
      "section": "Additional Fields"
    },
    {
      "name": "clientCertificate",
      "label": "Client Certificate",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "clientCertificateType",
      "label": "Client Certificate Type",
      "type": "string",
      "required": false,
      "defaultValue": "PKCS12",
      "section": "Additional Fields"
    },
    {
      "name": "clientCertificatePassword",
      "label": "Client Certificate Password",
      "type": "string",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": true,
      "maxLength": 100,
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
