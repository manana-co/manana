import { Center, Drawer, DrawerBody, DrawerContent, useTheme } from '@chakra-ui/react'
import { ArrowButton } from 'components/arrow-button'
import { MainMenuButton } from 'components/main-menu-button'
import { MenuHeading } from 'components/menu-heading'
import { CollectionType, useCollection } from 'hooks/useCollection'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getId } from 'utils'

function SubMenu({ onClose, isOpen, onCloseMenu, collectionType }: Props) {
  const {
    colors: { brandRed },
  } = useTheme()
  const {
    query: { id: currentRouteProductId },
  } = useRouter()

  const { collection, isError, isLoading } = useCollection(collectionType)

  if (isLoading || !collection || isError) {
    return (
      <Drawer onClose={onCloseMenu} isOpen={isOpen} size="md" placement="left">
        <DrawerContent bg={brandRed}>
          <Center>
            <div className="donut" />
          </Center>
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <Drawer onClose={onCloseMenu} isOpen={isOpen} size="md" placement="left">
      <DrawerContent bg={brandRed}>
        <ArrowButton direction="back" onClick={onClose} isMenuButton />
        <DrawerBody>
          <MenuHeading text={collection.title.toUpperCase()} />
          {collection.products.map((product) => {
            const productId = getId(product.id as string)
            if (productId === currentRouteProductId) {
              return <MainMenuButton key={product.id} text={product.title} onClick={onCloseMenu} />
            }
            return (
              <Link
                key={product.id}
                href={{
                  pathname: '/product/[id]',
                  query: { id: productId },
                }}
              >
                <MainMenuButton
                  text={product.title}
                  onClick={onCloseMenu}
                  fontSize={['42px', '64px']}
                />
              </Link>
            )
          })}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

type Props = {
  onClose: () => void
  isOpen: boolean
  onCloseMenu: () => void
  collectionType: CollectionType | undefined
}

export { SubMenu }
