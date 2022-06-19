type RouteName = 'home' | 'shopAll' | 'aboutUs' | 'product' | 'notARoute'
type PossibleRoutes = '/' | '/shop-all' | '/about-us' | '/product' | ''

const routes: Record<RouteName, PossibleRoutes> = {
  home: '/',
  shopAll: '/shop-all',
  aboutUs: '/about-us',
  product: '/product',
  notARoute: '',
}

function getId(rawId: string) {
  return rawId.split('/').pop()
}

export { routes, getId }
export type { RouteName }