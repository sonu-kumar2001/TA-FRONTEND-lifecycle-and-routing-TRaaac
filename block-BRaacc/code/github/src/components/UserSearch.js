import React from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

class UserSearch extends React.Component{
    constructor(props) {
        super()
        this.state = {
            username : "",
        }
    }
    inputHandler = ({target}) => {
        this.setState({
            username : target.value
        })
    }
    render() {
        return (
            <section className="github-search">
                <div className="container">
                    <h3>Github Search</h3>
                    <div className="search-box">
                            <input type="text" placeholder="user search" name="username" value={this.state.username} onChange={this.inputHandler} />
                            <Link to= {`/users/${this.state.username}`}>
                                <button onClick={this.submitHandler} type="submit" > Submit</button>
                            </Link>
                    </div>
                </div>
            </section>
        )
    }
}

export default UserSearch;