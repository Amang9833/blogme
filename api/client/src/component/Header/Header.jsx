import './header.css'

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">React & Node</span>
          <span className="headerTitlelg" style={{zIndex:'3'}}>Blog</span>
        </div>
        <img
          className="headerImg"
          src="https://cdn.pixabay.com/photo/2018/01/30/22/50/forest-3119826__340.jpg"
          alt=""
        />
      </div>
    </>
  );
}
