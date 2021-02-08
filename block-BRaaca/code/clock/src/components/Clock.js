import React from "react"
import data from "../data"
import moment from "moment-timezone";
import Dashboard from "./Dashboard"

class Clock extends React.Component{
    constructor(props) {
        super()

        this.state={
            clockData: [...data],
            clock : 3,
            date: new Date(),
            value: ""
        }
        this.time = null
    }
    componentDidMount() {
      this.time =  setInterval(() => {
            this.setState({
                date : new Date()
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.time);
    }
    handlerIncrement = ()=> {
       this.setState({
           clock: this.state.clock + 1
       })
    }
    handlerDecrement = () => {
        this.setState({
            clock: this.state.clock - 1
        })
    }
    render() {
        return (
            <section className="clock-section">
                <div className="container">
                    <div className="flex">
                        {
                        this.state.clockData.slice(0,this.state.clock).map(ele=>{

                                return(
                                    
                                        <Dashboard
                                        time={moment(this.state.date)
                                        .tz(ele.tz)
                                        .format("YY-MM-DD HH:mm:ss")}
                                        location={ele.city}
                                        key={ele.id}
                                    />
                                    )
                                })
                            }
                    </div>
                    <div className="button-center">
                        <button onClick={this.handlerIncrement}>+</button>
                        <button onClick={this.handlerDecrement}>-</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Clock;