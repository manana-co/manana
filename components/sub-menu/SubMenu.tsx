import { Drawer, DrawerBody, DrawerContent, useTheme } from '@chakra-ui/react'
import { ArrowButton } from 'components/arrow-button'
import { MainMenuButton } from 'components/main-menu-button'
import { MenuHeading } from 'components/menu-heading'
import { CollectionType, useCollection } from 'hooks/useCollection'
import Link from 'next/link'
import { getId } from 'utils'

function SubMenu({ onClose, isOpen, onCloseMenu, collectionType }: Props) {
  const {
    colors: { brandRed },
  } = useTheme()

  const { collection, isError, isLoading } = useCollection(collectionType)

  if (isLoading || !collection || isError) return null

  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="md" placement="left">
      <DrawerContent bg={brandRed}>
        <ArrowButton direction="back" onClick={onClose} isMenuButton />
        <DrawerBody>
          <MenuHeading text={collection.title} />
          {collection.products.map((product) => (
            <Link key={product.id} href={`product/${getId(product.id as string)}`}>
              <MainMenuButton text={product.title} onClick={onCloseMenu} />
            </Link>
          ))}
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
