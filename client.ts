import Client from 'shopify-buy'

const client = Client.buildClient({
  domain: 'manana-surf.myshopify.com',
  storefrontAccessToken: 'fb958a325caed70977e9c1cee0d71b5f',
})

export { client }
