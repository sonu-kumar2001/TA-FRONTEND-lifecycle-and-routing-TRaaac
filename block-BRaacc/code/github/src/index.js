import {render} from "react-dom"
import "./stylesheets/style.css"
import {BrowserRouter, Route} from "react-router-dom"
import UserSearch from "./components/UserSearch"
import User from "./components/User"
import PublicRepos from "./components/PublicRepos"
import Followers from "./components/Followers"
import Following from "./components/Following"

render( 
    <BrowserRouter>
            <Route path= "/" exact>
                <UserSearch/>
            </Route>
            <Route path = "/users/:username" component={User}/>
            <Route path="/users/:username/public_repos" component={PublicRepos}/>
            <Route path="/users/:username/followers" component={Followers}/>
            <Route path="/users/:username/following" component={Following}/>
        </BrowserRouter>
    ,document.getElementById("root"));