import { Link } from "react-router-dom"

const Button = (props) => {
  return (
    <Link onClick={props.onClick} to={props.to} className={`${props.className} button-6 `}>{props.children}</Link>
  )
}

export default Button;