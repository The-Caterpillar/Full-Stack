import { Component } from "react";

class LifecycleLogger extends Component{
    constructor(props){
        super(props)
        console.log('component init...'); // initialized

        //this.incrementCount = this.incrementCount.bind(this); //to bind a regular fn to global this.
        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }))
    }

    componentDidMount(){
        console.log("Component mounted")
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.count != this.state.count)
        {
            console.log('component updated');
        }
    }

    componentWillUnmount(){
        console.log('component unmount...');
    }
    render () {
        return (
            <>
                <div className="logger-container">
                    <h2>LifecycleLogger (Class Component)</h2>
                    <p> {this.props.message} </p>
                    <p>Count: {this.state.count}</p>

                    <button onClick={this.incrementCount} className="secondary-btn">Update</button>
                </div>
            </>
        );
    }
}


export default LifecycleLogger;