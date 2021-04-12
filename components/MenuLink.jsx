import { useRouter } from 'next/router'

function MenuLink({ children, href }) {
  const router = useRouter()
  const style = {
    color: router.asPath === href ? 'orange' : 'white'
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a className="navigation-button ${h" type="button" onClick={handleClick} href={href} style={style}>
      {children}
    </a>
  )
}

export default MenuLink