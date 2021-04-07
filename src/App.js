import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./pages/landing";
import Products from "./components/products/Products";
import { data } from "./data";
import { useRecoilState, RecoilRoot } from "recoil";
import Activity from "./components/activity/Activity";
import EditProduct from "./components/products/EditProduct";
function App() {
  return (
    <RecoilRoot>
      <Router>
        <Switch>
          <Route exact path="/activity" component={Activity} />
          <Route exact path="/products" component={Products} />
          <Route path='/:productId' exact component={EditProduct} />
          <Route exact path="/login" component={Landing} />
        </Switch>
      </Router>
    </RecoilRoot>
  );
}

function Protected({ component: Component, ...rest }) {
  const [client, setClient] = useRecoilState(data.atoms.client);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const clientLog = async () => {
    setClient({ auth: true, data: { ...data } });
  };

  useEffect(() => {
    clientLog();
  }, [client.auth, clientLog]);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!client.auth) {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        } else return <Component {...props} />;
      }}
    />
  );
}

export default App;
