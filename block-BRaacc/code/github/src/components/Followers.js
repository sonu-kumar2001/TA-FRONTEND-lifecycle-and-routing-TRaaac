import React from "react"
import Loader from "./Loader"
import {Link} from "react-router-dom"
class Followers extends React.Component {
    constructor(props) {
        super()
        this.state ={
            followersData: null,
        }
    }
    componentDidMount() {
        const { followersData } = this.props.location.state;
        fetch(followersData.followers_url).then(res=> res.json()).then(followersData=> this.setState({followersData}));
    }
    render() {
        const followersData= this.state.followersData
        console.log(followersData);
        if(!this.state.followersData) {
            return <Loader/>
        }
        return(
            <div className="followers-div">
                    {
                        followersData.map(follower=> {
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