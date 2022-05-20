type RouteName = 'home' | 'shopAll' | 'aboutUs' | 'notARoute'
type PossibleRoutes = '/' | '/shop-all' | '/about-us' | ''

const routes: Record<RouteName, PossibleRoutes> = {
  home: '/',
  shopAll: '/shop-all',
  aboutUs: '/about-us',
  notARoute: '',
}

type Product = {
  imageSrc: string
  title: string
  price: string
}

export { routes }
export type { RouteName, Product }
