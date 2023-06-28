import { Link } from "react-router-dom";

const ButtonFound = (props) => {
  return (
    <Link to={props.to} className={`${props.className} button-3`}>
      {props.children}
    </Link>
  );
};

export default ButtonFound;
