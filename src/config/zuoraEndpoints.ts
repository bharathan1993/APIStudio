/**
 * Main entry point for all Zuora API endpoints
 *
 * All endpoints are auto-generated from the OpenAPI specification.
 * To regenerate endpoints, run: yarn generate-endpoints
 */

import type { ApiEndpoint } from '../types/api';
import { postAccountEndpoint } from './accountsEndpoint';

// Import all auto-generated endpoints
export { zuoraEndpoints as generatedEndpoints } from './generated/index';

// Re-import for local use
import { zuoraEndpoints as generatedEndpoints } from './generated/index';

const overrides: ApiEndpoint[] = [
  postAccountEndpoint,
];

const mergeOverrides = (endpoints: ApiEndpoint[], overrideList: ApiEndpoint[]) => {
  const overrideMap = new Map(overrideList.map((endpoint) => [endpoint.id, endpoint]));
  return endpoints.map((endpoint) => overrideMap.get(endpoint.id) ?? endpoint);
};

export const zuoraEndpoints = mergeOverrides(generatedEndpoints, overrides);

/**
 * Find an endpoint by its ID
 */
export const getEndpointById = (id: string): ApiEndpoint | undefined => {
  return zuoraEndpoints.find((endpoint) => endpoint.id === id);
};

/**
 * Get endpoints by category based on path patterns
 */
export const getEndpointsByCategory = (category: string): ApiEndpoint[] => {
  const categoryLower = category.toLowerCase();

  return zuoraEndpoints.filter((endpoint) => {
    const path = endpoint.path.toLowerCase();

    switch (categoryLower) {
      // ── Core billing objects ──────────────────────────────────────────
      case 'accounts':
        return path.includes('/accounts');
      case 'subscriptions':
        return path.includes('/subscription');
      case 'orders':
        return path.includes('/order');
      case 'invoices':
        return path.includes('/invoice');
      case 'payments':
        return path.includes('/payment');
      case 'products':
        return path.includes('/product') || path.includes('/catalog');
      case 'contacts':
        return path.includes('/contact');
      case 'credit-memos':
        return path.includes('/credit-memo');
      case 'debit-memos':
        return path.includes('/debit-memo');

      // ── Extended billing & finance ────────────────────────────────────
      case 'bill-runs':
        return path.includes('/bill-run');
      case 'refunds':
        return path.includes('/refund');
      case 'usage':
        return (
          path.includes('/usage') ||
          path.includes('/object-postimport') ||
          path.includes('/object-getusage') ||
          path.includes('/object-putusage') ||
          path.includes('/object-deleteusage')
        );
      case 'accounting':
        return path.includes('/accounting-code') || path.includes('/accounting-period');
      case 'journal-entries':
        return (
          path.includes('/journal-') ||
          path.includes('/summary-journal') ||
          path.includes('/journal-run')
        );
      case 'revenue':
        return (
          path.includes('/revenue-') ||
          path.includes('/revpro-') ||
          path.includes('/revenue_')
        );

      // ── Platform & integration ────────────────────────────────────────
      case 'workflows':
        return path.includes('/workflow');
      case 'data-queries':
        return (
          path.includes('/query/') ||
          path.includes('/batch-query') ||
          path.includes('/query-jobs') ||
          path.includes('/dataquery')
        );
      case 'custom-objects':
        return path.includes('/custom-object') || path.includes('/customobject') || path.includes('/objects/definitions') || path.includes('/objects/records');
      case 'fulfillments':
        return path.includes('/fulfillment');
      case 'attachments':
        return path.includes('/attachment');
      case 'notifications':
        return (
          path.includes('/notification') ||
          path.includes('/email-template') ||
          path.includes('/event-trigger') ||
          path.includes('/callout')
        );
      case 'settings':
        return path.includes('/setting') || path.includes('/sequence-set');

      default:
        return false;
    }
  });
};

/**
 * Get all available categories
 */
export const getAvailableCategories = (): string[] => {
  return [
    // Core billing objects
    'accounts',
    'subscriptions',
    'orders',
    'invoices',
    'payments',
    'products',
    'contacts',
    'credit-memos',
    'debit-memos',
    // Extended billing & finance
    'bill-runs',
    'refunds',
    'usage',
    'accounting',
    'journal-entries',
    'revenue',
    // Platform & integration
    'workflows',
    'data-queries',
    'custom-objects',
    'fulfillments',
    'attachments',
    'notifications',
    'settings',
  ];
};
