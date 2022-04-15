import React from 'react'

export default function CardWithTopBar(props) {
    return <div className='card'>
        <div className="card-body py-1">
            <div className='row'>
                <div className='col'>
                    <h6 className="card-title">{props.title}</h6>
                </div>
                <div className='col-2'>
                    <button className='btn card-top-button'>...</button>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <h4 className="card-text">{props.content}</h4>
                </div>
                <div className='col-7 align-self-end'>
                    <div className='row'>
                        <div className='col ps-0 pe-1'>
                            <p className="card-text text-end card-subtext">{props.subTitle}</p>
                        </div>
                        <div className='col-auto p-0'>
                            <p className={"card-text text-end card-subtext-" + props.subContentColor}>
                                {props.subContent}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}


