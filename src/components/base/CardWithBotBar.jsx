import React from "react";

export default function CardWithBotBar(props) {
    return <div className='card'>
        <div className="card-body py-1">
            <div className='row'>
                <div className='col'>
                    <h6 className="card-title">{props.title}</h6>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    {props.content}
                </div>
            </div>
        </div>
    </div>
}