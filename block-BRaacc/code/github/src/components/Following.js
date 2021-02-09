import React from "react"
import Loader from "./Loader"
import {Link} from "react-router-dom"
class Followers extends React.Component {
    constructor(props) {
        super()
        this.state ={
            followingData: null,
        }
    }
    componentDidMount() {
        let {username} = this.props.match.params
        fetch(`https://api.github.com/users/${username}/following`).then(res=> res.json()).then(followingData=> this.setState({followingData}));
    }
    render() {
        const followingData= this.state.followingData
        console.log(followingData);
        if(!this.state.followingData) {
            return <Loader/>
        }
        return(
            <div className="followers-div">
                    {
                        followingData.map(follower=> {
                            return (
                                <div className="flex">
                                    <img src={follower.avatar_url} alt="avtar"/>
                                    <Link to={`/users/${follower.login}`}>
                                        <h3>{follower.login}</h3>
                                    </Link>
                                </div>
                            )
                        })
                    }
            </div>
        )
    }
}

export default Followers;