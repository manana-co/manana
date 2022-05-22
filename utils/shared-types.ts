type RouteName = 'home' | 'shopAll' | 'aboutUs' | 'product' | 'notARoute'
type PossibleRoutes = '/' | '/shop-all' | '/about-us' | '/product' | ''

const routes: Record<RouteName, PossibleRoutes> = {
  home: '/',
  shopAll: '/shop-all',
  aboutUs: '/about-us',
  product: '/product',
  notARoute: '',
}

type Product = {
  imageSrc: string
  title: string
  price: string
}

export { routes }
export type { RouteName, Product }
