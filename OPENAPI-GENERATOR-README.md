# OpenAPI Generator for Zuora API Studio

## Overview

This document covers the endpoint generator that converts the Zuora OpenAPI specification into TypeScript configuration files consumed by the API Studio UI.

## What Gets Generated

- **713 API endpoints** across 23 category folders (as of the 2026-05-01 spec)
- One TypeScript file per endpoint, each exporting a typed `ApiEndpoint` object
- An `index.ts` aggregating all exports into a single `zuoraEndpoints` array

---

## Category Breakdown

| Folder | Endpoints | Path patterns matched |
|---|---|---|
| `accounts` | 15 | `/accounts` |
| `subscriptions` | 21 | `/subscription` |
| `orders` | 25 | `/order` |
| `invoices` | 42 | `/invoice` |
| `payments` | 95 | `/payment` |
| `products` | 50 | `/product`, `/catalog` |
| `contacts` | 11 | `/contact` |
| `creditMemos` | 40 | `/credit-memo` |
| `debitMemos` | 31 | `/debit-memo` |
| `billRuns` | 6 | `/bill-run` |
| `refunds` | 16 | `/refund` |
| `usage` | 8 | `/usage`, `/object-postimport`, `/object-getusage` |
| `accounting` | 16 | `/accounting-code`, `/accounting-period` |
| `journalEntries` | 10 | `/journal-`, `/summary-journal`, `/journal-run` |
| `revenue` | 1 | `/revenue-`, `/revpro-` |
| `workflows` | 17 | `/workflow` |
| `dataQueries` | 8 | `/query/`, `/batch-query/` |
| `customObjects` | 10 | `/custom-object`, `/objects/definitions`, `/objects/records` |
| `fulfillments` | 10 | `/fulfillment` |
| `attachments` | 5 | `/attachment` |
| `notifications` | 39 | `/notification`, `/email-template`, `/event-trigger`, `/callout` |
| `settings` | 7 | `/setting`, `/sequence-set` |
| `other` | 230 | Everything else |

---

## How to Regenerate

### Step 1: Download the latest Zuora spec

Use Python (avoids curl/network issues in some environments):

```bash
python3 -c "
import urllib.request
urllib.request.urlretrieve(
    'https://developer.zuora.com/yaml/apis/zuora-openapi-full-compact.yaml',
    'zuora_openapi.yaml'
)
print('Downloaded zuora_openapi.yaml')
"
```

Available spec flavours from Zuora:

| Spec | URL | Notes |
|---|---|---|
| Full compact (recommended) | `https://developer.zuora.com/yaml/apis/zuora-openapi-full-compact.yaml` | All APIs, no descriptions |
| OTC detailed | `https://developer.zuora.com/yaml/apis/zuora-openapi-for-otc.yaml` | Order-to-Cash APIs only, full descriptions |
| OTC compact | `https://developer.zuora.com/yaml/apis/zuora-openapi-for-otc-compact.yaml` | Order-to-Cash APIs only, no descriptions |

> **Note:** Do not use `curl` to download the spec — some environments produce a 1-space-indented file (a text-extraction artifact) that is not valid YAML. Use Python's `urllib.request` which fetches the raw bytes correctly.

### Step 2: Run the generator

```bash
yarn generate-endpoints
# or
npm run generate-endpoints
```

This will:
1. Load and parse `zuora_openapi.yaml` using `js-yaml`
2. Resolve all `$ref` schema references (including `allOf`, `oneOf`, `anyOf`)
3. Extract `queryParams` from `parameters[in=query]` per operation
4. Extract `pathParams` from `parameters[in=path]` per operation (with spec metadata)
5. Convert request body schemas to `FieldDefinition[]` arrays
6. Add standard Zuora headers to every endpoint
7. Categorise endpoints by URL path patterns
8. Clean and recreate `src/config/generated/` category folders
9. Write one `.ts` file per endpoint
10. Write `src/config/generated/index.ts`

### Step 3: No further action required

The main app imports from `src/config/generated/index.ts` automatically. Rebuild with `npm run build` if needed.

---

## Architecture

```
zuora_openapi.yaml
       │
       ▼
scripts/generateEndpoints.ts
  ├── categorizeEndpoints()    — path-pattern bucketing into 23 folders
  ├── generateEndpointFile()   — serialises ApiEndpoint to TypeScript
  └── generateIndexFile()      — creates the barrel export
       │
       uses
       ▼
src/utils/openApiParser.ts
  ├── loadSpec()               — YAML → OpenAPISpec (js-yaml)
  ├── getAllEndpoints()         — walks paths, merges path+op parameters
  ├── resolveParameter()       — dereferences $ref component parameters
  ├── extractQueryParams()     — in:query params → FieldDefinition[]
  ├── extractPathParams()      — in:path params → FieldDefinition[] (with fallback)
  ├── resolveSchema()          — recursive $ref / allOf / oneOf resolution
  ├── schemaToFields()         — schema.properties → FieldDefinition[]
  └── convertToApiEndpoint()   — assembles final ApiEndpoint object
```

---

## Generated File Format

Each endpoint file exports a single `ApiEndpoint` constant:

```typescript
import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_subscriptionsbykeyEndpoint: ApiEndpoint = {
  "id": "get-subscriptionsbykey",
  "name": "Retrieve a subscription by key",
  "description": "",
  "method": "GET",
  "path": "/v1/subscriptions/{subscription-key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    { "name": "subscription-key", "label": "Subscription Key", "type": "string", "required": true }
  ],
  "queryParams": [
    { "name": "charge-detail", "label": "Charge Detail", "type": "string", "required": false },
    { "name": "as-of-date", "label": "As Of Date", "type": "string", "required": false },
    { "name": "exclude-rate-plans-with-no-charges", "label": "Exclude Rate Plans With No Charges", "type": "boolean", "required": false },
    { "name": "getDetailedMetrics", "label": "Get Detailed Metrics", "type": "boolean", "required": false, "defaultValue": false }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
```

---

## Manual Overrides

Some endpoints have hand-curated definitions that override the auto-generated versions. Overrides are defined in `src/config/` and registered in `src/config/zuoraEndpoints.ts`:

```typescript
const overrides: ApiEndpoint[] = [
  postAccountEndpoint,  // src/config/accountsEndpoint.ts (1000+ line curated definition)
];
```

The override replaces the generated file by matching `endpoint.id`. To add a new override:
1. Create `src/config/your-override.ts` exporting a full `ApiEndpoint`
2. Add it to the `overrides` array in `zuoraEndpoints.ts`

---

## Extending Categories

### Add a new sidebar category

Edit `src/config/zuoraEndpoints.ts`:

```typescript
// In getEndpointsByCategory():
case 'your-category':
  return path.includes('/your-path-pattern');

// In getAvailableCategories():
'your-category',
```

### Add a new generator folder

Edit `scripts/generateEndpoints.ts`:

```typescript
// In the categories object:
const categories = {
  // ... existing
  yourCategory: [],
};

// In categorizeEndpoints():
} else if (p.includes('/your-path-pattern')) {
  categories.yourCategory.push(endpoint);
}
```

Then re-run `yarn generate-endpoints`.

---

## Troubleshooting

### "Cannot find module 'fs'"

`openApiParser.ts` is a Node.js-only file. It is excluded from the browser TypeScript compilation in `tsconfig.app.json`. If this error appears in the browser build, check that the `exclude` entry is present:

```json
{
  "include": ["src"],
  "exclude": ["src/utils/openApiParser.ts"]
}
```

### "duplicated mapping key" YAML error

The spec file was fetched via a web scraping tool that collapsed all indentation to 1 space — making it invalid YAML. Re-download using `python3 urllib.request` as shown in Step 1 above.

### Generator runs out of memory

The spec can be large. Increase Node.js memory:

```bash
NODE_OPTIONS=--max-old-space-size=4096 yarn generate-endpoints
```

### Missing fields in generated endpoints

The compact spec strips descriptions and examples. If field descriptions are empty, use the OTC detailed spec for OTC operations, or request the full non-compact spec from Zuora Support.
