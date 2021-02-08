function Dashboard(props) {
    return(
        <div className="card">
            <h2>{props.location}</h2>
            <h3>{props.time}</h3>
        </div>
    )
}

export default Dashboard;