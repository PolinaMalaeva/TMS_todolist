import React from "react";

function PageStatistics(props: {
    className: string,
    textItem: string,
    src: string,
    value: number | string
}) {
    return (
        <div className={props.className}>
            <div className="item">{props.textItem}</div>
            <img src={props.src} alt=""/>
            <div className="value">{props.value}</div>
        </div>
    )
}

export default PageStatistics;