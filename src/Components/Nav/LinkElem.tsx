import {Link} from "react-router-dom";
import React from "react";

function LinkElem(props: {
    isHidden: boolean,
    path: string,
    to: string,
    handlePath: () => void,
    src: string,
    textElemDescription: string
}) {
    const styleElem = {
        maxWidth: (props.isHidden) ? 80 + 'px' : 120 + 'px',
        maxHeight: (props.isHidden) ? 65 + 'px' : 120 + 'px',
        background: (props.path == props.to) ? '#3232ca' : ''
    }
    const styleElemDescription = {display: (props.isHidden) ? 'none' : 'block'}

    return (
        <Link to={props.to} className='elem' onClick={props.handlePath} style={styleElem}>
            <img src={props.src}/>
            <p className='elem_description' style={styleElemDescription}>
                {props.textElemDescription}
            </p>
        </Link>
    )
}

export default LinkElem;
