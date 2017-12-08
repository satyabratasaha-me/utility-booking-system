import React from 'react';

class Button extends React.Component{
    render(){
        return(
            <button type='submit' width='48' height='100' name={this.props.name}>{this.props.value}</button>
        );
    }
}

export default Button;

