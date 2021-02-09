import React from "react"
import Loader from "./Loader"
class PublicRepos extends React.Component {
    constructor(props) {
        super()
        this.state ={
            reposData: null,
        }
    }
    componentDidMount() {
        const { repoData } = this.props.location.state;
        fetch(repoData.repos_url).then(res=> res.json()).then(reposData=> this.setState({reposData}));
        console.log(repoData);
    }
    render() {
        const reposData= this.state.reposData
        return(
            <div className="repos">
                {reposData? <div className="repo-div">
                    {
                        reposData.map(repo=> {
                            return(
                                <div className="repo-link">
                                    <a target="_blank" rel="noreferrer" href={repo.html_url} ><p>{repo.name}</p> </a>  
                                </div>
                            )
                        })
                    }
                </div> : <Loader/>}
            </div>
        )
    }
}

export default PublicRepos;