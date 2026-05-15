import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_decryptrsasignaturesEndpoint: ApiEndpoint = {
  "id": "post-decryptrsasignatures",
  "name": "Decrypt an RSA signature",
  "description": "",
  "method": "POST",
  "path": "/v1/rsa-signatures/decrypt",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "method",
      "label": "Method",
      "type": "string",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "publicKey",
      "label": "Public Key",
      "type": "string",
      "required": true,
      "section": "Additional Fields"
    },
    {
      "name": "signature",
      "label": "Signature",
      "type": "string",
      "required": true,
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
