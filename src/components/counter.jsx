import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value
    };

    handleIncrement = () => {
        this.setState({value: this.state.count + 1})
    };

    render() {
        return ( 
          <div>
            <span className="badge badge-warning m-2">{this.formatCount()}</span>
            <button 
            onClick={this.handleIncrement} 
            className="btn btn-secondary btn-sm"
            >Increament</button>
          </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const{count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}


export default Counter;