import MenuLink from '@components/MenuLink'

const FerboMenu = ({ showMenu }) => (
  <div id="ferbo-menu" className={`menu-wrapper ${showMenu ? 'show' : ''}`}>
    <div className="logo">
      <img layout='fill' src="/images/ferbo-transparent.png" />
    </div>
    <ul>
      <li>
        <MenuLink href="/ferbo/obra-publica">
          Obra Publica
        </MenuLink>
      </li>
      <li>
        <MenuLink href="/ferbo/carpinteria">
          Carpintería
        </MenuLink>
      </li>
      <li>
        <MenuLink href="/ferbo/producto">
          Producto
        </MenuLink>
      </li>
      <li>
        <MenuLink href="/ferbo/equipo">
          Equipo
        </MenuLink>
      </li>
    </ul>
  </div>
)

export default FerboMenu