import { useRouter } from 'next/router'

function MenuLink({ children, href }) {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a className={`navigation-button ${router.asPath === href ? 'active' : ''}`} type="button" onClick={handleClick} href={href}>
      {children}
    </a>
  )
}

export default MenuLink