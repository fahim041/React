import React, { Component } from 'react';

let buttonStyle = {
    cursor: 'pointer'
}

class Like extends Component {
    state = {}
    render() {
        let classes = "fa fa-heart";
        if (!this.props.liked) classes += "-o";
        return (
            <>
                <i onClick={this.props.onClick} style={buttonStyle} className={classes}></i>
            </>
        );
    }
}

export default Like;