import React from 'react';

let buttonStyle = {
    cursor: 'pointer'
}

const Like = (props) => {
    let classes = "fa fa-heart";
    if (!props.liked) classes += "-o";
    return (
        <>
            <i
                onClick={props.onClick}
                style={buttonStyle}
                className={classes}
            ></i>
        </>
    );
}

export default Like;