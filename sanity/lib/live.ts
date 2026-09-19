import { defineLive } from 'next-sanity/live'
import { client } from './client'

export const { sanityFetch: sanityLiveFetch, SanityLive } = defineLive({
  client,
  serverToken: process.env.SANITY_API_READ_TOKEN,
})
