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

function makeArrOfNums(numOfItems: number) {
  const arr = []
  for (let i = 0; i < numOfItems; i++) {
    arr.push(i + 1)
  }
  return arr
}

export { routes, getId, makeArrOfNums }
export type { RouteName }
