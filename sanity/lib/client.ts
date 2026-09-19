import 'server-only'
import { createClient, type QueryParams } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

// Server-only Sanity client. Never exposed to browser bundles.
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production' && !process.env.SANITY_API_READ_TOKEN,
  token: process.env.SANITY_API_READ_TOKEN,
})

/**
 * Server-only fetch helper for querying Sanity with cache revalidation tags
 */
export async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: {
  query: QueryString
  params?: QueryParams
  revalidate?: number | false
  tags?: string[]
}) {
  return client.fetch(query, params, {
    next: {
      revalidate: typeof revalidate === 'number' ? revalidate : undefined,
      tags,
    },
  })
}
