import React from "react"
import Loader from "./Loader"
import {Link,NavLink} from "react-router-dom"

class User extends React.Component {
    constructor(props) {
        super()
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        let {username} = this.props.match.params
        console.log(username)
        let url = `https://api.github.com/users/${username}`
        fetch(url).then(res=> res.json()).then(githubData=> this.setState({data: githubData}));
    }
    componentWillUpdate() {
        this.componentDidMount()
    }
    render() {
        let {username} = this.props.match.params
        if(!this.state.data) {
            return <Loader/>
        }
        return (
            <section className="github-details">
                <div className="container">
                    <Link to="/">
                        <i className="fas fa-arrow-left arrow"></i>
                    </Link>
                    <div className="github-card">
                        <img src={this.state.data.avatar_url} alt="github-avtar"/>
                        <h2 className="user-name">{this.state.data.name}</h2>
                        <p className="user-bio">{this.state.bio ? this.state.bio : "No Bio"}</p>
                        <div className="flex-between user-details"> 
                            <NavLink activeClassName="active" to={{
                                pathname: `/users/${username}/public_repos`,
                                state: {
                                    repoData: this.state.data
                                }
                            }}>
                                <h3>Public Repos: {this.state.data.public_repos}</h3>
                            </NavLink>
                            <NavLink activeClassName="active" to={{
                                pathname: `/users/${username}/followers`,
                                state: {
                                    followersData: this.state.data
                                }
                            }}>
                                <h3>Followers: {this.state.data.followers}</h3>
                            </NavLink>
                            <NavLink activeClassName="active" to={{
                                pathname: `/users/${username}/following`,
                            }}>
                                <h3>Following: {this.state.data.following}</h3>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default User;