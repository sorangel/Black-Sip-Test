import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import PropTypes from "prop-types";
import { nanoid as uuid } from "nanoid";

const history = createBrowserHistory();

function Routes({ routes = [] }) {
  return (
    <Router history={history}>
      <Switch>
        {routes.map((route) => (
          <Route key={uuid()} {...route} />
        ))}
      </Switch>
    </Router>
  );
}
Routes.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default Routes;
