import MenuLink from '@components/MenuLink'

const MexhaMenu = ({ showMenu }) => (
  <div id="mexha-menu" className={`menu-wrapper ${showMenu ? 'show' : ''}`}>
    <div className="logo">
      <img layout='fill' src="/images/mexha-transparent.png" />
    </div>
    <ul>
      <li>
        <MenuLink href="/mexha/inmobiliaria">
          Inmobilaria
        </MenuLink>
      </li>
      <li>
        <MenuLink href="/mexha/residencial">
          Residencial
        </MenuLink>
      </li>
      <li>
        <MenuLink href="/mexha/habitacional">
          Habitacional
        </MenuLink>
      </li>
    </ul>
  </div>
)

export default MexhaMenu