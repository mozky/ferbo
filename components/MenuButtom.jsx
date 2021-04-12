const MenuButtom = ({ backStyle, menuName, onClick, width, height, big }) => (
  <div className="menu-button" style={backStyle && { width: '100%' }} >
    <div id={`${menuName}-toggle`} className={big ? 'big' : ''} onClick={() => onClick()}>
      {backStyle ? <p>HOME</p> : <img width={width} height={height} src={`/images/${menuName}-logo.png`} />}
    </div>
  </div>
)

export default MenuButtom