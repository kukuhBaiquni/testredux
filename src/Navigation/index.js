import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "Navigation/config";
import Layout from "Layout";

const Children = () => (
    Routes.map((route, index) => <Route key={index} {...route} />)
);

const Navigation = () => {
    return (
        <Router>
            <Switch>
                <Layout children={<Children />} />
            </Switch>
        </Router>
    );
};

export default Navigation;
