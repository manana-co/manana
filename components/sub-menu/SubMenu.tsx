import { Drawer, DrawerBody, DrawerContent, useTheme } from '@chakra-ui/react'
import { ArrowButton } from 'components/arrow-button'
import { MainMenuButton } from 'components/main-menu-button'
import { MenuHeading } from 'components/menu-heading'
import { CollectionType, useCollection } from 'hooks/useCollection'

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
            <MainMenuButton key={product.id} text={product.title} />
          ))}
          {/* <MainMenuButton text="Molo" />
          <MainMenuButton text="Semi-Pro" onClick={onCloseMenu} route="product" />
          <MainMenuButton text="Leslie" />
          <MainMenuButton text="Cousin Greg" />
          <MainMenuButton text="Shop All" /> */}
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
