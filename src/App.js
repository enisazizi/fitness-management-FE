import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./pages/landing";
import data from "./data";
import { useRecoilState, RecoilRoot } from "recoil";
import Clients from "./components/client";
import Products from "./components/products/Products"
import EditProducts from "./components/products/EditProduct"
import Payments from "./components/payments/Payments"
import Activity from "./components/activity/Activity"
import Register from "./authentication/register"
function App() {
  return (
    <RecoilRoot>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/payments" component={Payments} />
          <Route exact path="/activity" component={Activity} />
          <Route  path="/product/:productId" component={EditProducts} />
          <Route path={"/clients"} component={Clients} />
          <Route path={"/products"} component={Products} />
        </Switch>
      </Router>
    </RecoilRoot>
  );
}

function Protected({ component: Component, ...rest }) {
  const [company, setCompany] = useRecoilState(data.atoms.Company);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const clientLog = async () => {
    setCompany({ auth: true, data: { ...data } });
  };
  useEffect(() => {});

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!company.auth) {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        } else return <Component {...props} />;
      }}
    />
  );
}

export default App;
