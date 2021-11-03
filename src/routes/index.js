import { Home, AboutUs } from "../containers";

import {Switch, Route, withRouter, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";



const Routes = () => {
        const { } = useSelector((state) => state);

        return <Switch>
                    <Route exact path="/">
                            <Home />
                    </Route>
                </Switch> 
}

export default withRouter(Routes);