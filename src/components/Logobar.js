import logo from '../assets/logo.png'

const Logobar = () => {
  return (
  <div className="logo-bar-container">
    <div className="top"></div>
   <div className="logo-bar"> 
    <img className="logo-logo" src={logo} alt="logo" />
   </div>
   </div>
  )
}
export default Logobar