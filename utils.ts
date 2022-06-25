type RouteName = 'home' | 'shopAll' | 'aboutUs' | 'product' | 'notARoute'
type PossibleRoutes = '/' | '/shop-all' | '/about-us' | '/product/[id]' | ''

const routes: Record<RouteName, PossibleRoutes> = {
  home: '/',
  shopAll: '/shop-all',
  aboutUs: '/about-us',
  product: '/product/[id]',
  notARoute: '',
}

function getId(rawId: string) {
  return rawId.split('/').pop()
}

export { routes, getId }
export type { RouteName }
