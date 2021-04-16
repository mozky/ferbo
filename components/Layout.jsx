import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import SocialIcons from '@components/SocialIcons'
import FerboMenu from '@components/FerboMenu'
import MexhaMenu from '@components/MexhaMenu'
import MenuButtom from '@components/MenuButtom'

const Layout = ({ props, children }) => {
  const router = useRouter()
  const [ openMenu, toggleOpenMenu ] = useState(false)
  const [ showLoading, toggleLoading ] = useState(true) 

  useEffect(() => {
    setTimeout(() => {
      const col1 = document.getElementById("col1")
      const col2 = document.getElementById("col2")
    
      col1 && col1.classList.add("visible")
      col2 && col2.classList.add("visible")
    }, 4000)
  }, [router])

  useEffect(() => {
    setTimeout(() => {
      toggleLoading(false)
    }, 2000)
  }, [])

  const routeSite = router.pathname.length > 1 ? router.pathname.substring(1, router.pathname.lastIndexOf("/")) : false

  const homeLayout = {
    col1: <img layout='fill' className="background-image" src="/images/background-house.jpg" />, // IDEA: Hacer un horizontal move de la imagen
    col2: true,
    col3: true,
    col4: <FerboMenu showMenu={openMenu === 'ferbo'} />,
    col5: <MexhaMenu showMenu={openMenu === 'mexha'} />,
    footer: 
      <>
        <SocialIcons/>
        <MenuButtom key="ferbo-menu" big={openMenu === 'ferbo'} menuName="ferbo" onClick={() => toggleOpenMenu(openMenu === 'ferbo' ? false : 'ferbo')} />
        <MenuButtom key="mexha-menu" big={openMenu === 'mexha'} menuName="mexha" onClick={() => toggleOpenMenu(openMenu === 'mexha' ? false : 'mexha')} />
      </>
  }

  const insideLayout = {
    col5: routeSite === 'ferbo' ? <FerboMenu showMenu="true" /> : <MexhaMenu showMenu="true" />,
    footer: <MenuButtom key={routeSite + "-menu"} big backStyle menuName={routeSite} onClick={() => router.push('/')} />
  }

  const layout = routeSite ? insideLayout : homeLayout

  return (
    <div className={`container ${routeSite ? 'inside_page' : ''}`}>
      <div id="loading" className={`${routeSite ? 'inside_page ': ' '} ${showLoading ? '' : 'hide'}`}><div id="top-half"></div><span>"Los detalles no son los detalles. Los detalles son el diseno" Charles Eames</span><div id="bottom-half"></div></div>
      <main>{children}</main>
      {layout.col1 && <div id="col1">{layout.col1}</div>}
      {layout.col2 && <div id="col2">{layout.col2}</div>}
      {layout.col3 && <div id="col3">{layout.col3}</div>}
      {layout.col4 && <div id="col4" className="menu">{layout.col4}</div>}
      {layout.col5 && <div id="col5" className="menu">{layout.col5}</div>}
      {layout.footer && <footer id="footer">{layout.footer}</footer>}
    </div>
  )
}

export default Layout