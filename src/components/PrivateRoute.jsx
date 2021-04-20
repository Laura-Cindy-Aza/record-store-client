import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ path, component, redirectTo = "/login" }) => {
  // grab the info if user is logged in from context
  const user = useSelector((state) => state.user.user);

  // in case we are logged in => allow passing the given route
  // in case we are NOT logged in => redirect that fu**** not known person to login
  return user.avatar ? (
    <Route path={path} component={component} />
  ) : (
    <Redirect to={redirectTo} />
  );
};

export default PrivateRoute;
