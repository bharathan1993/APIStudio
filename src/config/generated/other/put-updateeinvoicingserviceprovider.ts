import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_updateeinvoicingserviceproviderEndpoint: ApiEndpoint = {
  "id": "put-updateeinvoicingserviceprovider",
  "name": "Update an e-invoicing service provider",
  "description": "",
  "method": "PUT",
  "path": "/v1/einvoice/service-providers/{key}",
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
      "name": "companyIdentifier",
      "label": "Company Identifier",
      "type": "string",
      "required": false,
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
      "required": false,
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
