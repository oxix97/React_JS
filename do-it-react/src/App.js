import React from "react";
import Counter from "./Component/Counter";
import NewCounter from './Component/NewCounter'
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state={count : 10};
        this.resetCount = this.resetCount.bind(this);
    }
    resetCount(){
        this.setState(({count})=>({
            count : count + 10
        }))
    }
    
    render() {
        return (
            <div>
                <Counter count={this.state.count}/>
                <div><NewCounter count={this.state.count}/></div>
                <button onClick={this.resetCount}>{this.state.count+10}으로 초기화</button>
            </div>
        );
    }
}

export default App;