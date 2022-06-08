import Client from 'shopify-buy'

const client = Client.buildClient({
  domain: process.env.NEXT_PUBLIC_STOREFRONT_DOMAIN || '',
  storefrontAccessToken: process.env.NEXT_PUBLIC_STOREFRONT_TOKEN || '',
})

export { client }
