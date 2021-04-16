const MenuButtom = ({ backStyle, menuName, onClick, big }) => (
  <div className="menu-button" style={backStyle && { width: '100%' }} >
      {backStyle ? <div onClick={() => onClick()} id="back-button" className={big ? 'big' : ''}>HOME</div> : <img id={`${menuName}-toggle`} className={big ? 'big' : ''} onClick={() => onClick()} src={`/images/${menuName}-circle.png`} />}
  </div>
)

export default MenuButtom