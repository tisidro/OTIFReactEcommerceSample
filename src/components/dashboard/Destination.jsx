import React from "react";
import CardWithBotBar from "../base/CardWithBotBar";

export default function Destination() {
    const cardContent = <div className={"container px-0"}>
        <div className={"row"}>
            <div className={"col card m-2 p-3"}>
                <div className='card-text' style={{color: '#4c38ee'}}>15,074</div>
                <div className='card-subtext'>Active Destinations</div>
            </div>
            <div className={"col card m-2 p-3"}>
                <div className='card-text' style={{color: '#5dd4e6'}}>456</div>
                <div className='card-subtext'>Inactive Destinations</div>
            </div>
        </div>
        <div className={"row"}>
            <div className={"col card m-2 p-3"}>
                <div className='card-text' style={{color: '#7060f1'}}>175</div>
                <div className='card-subtext'>Old Destinations</div>
            </div>
            <div className={"col card m-2 p-3"}>
                <div className='card-text' style={{color: '#4caf50'}}>5,000</div>
                <div className='card-subtext'>New Destinations</div>
            </div>
        </div>
    </div>
    return <CardWithBotBar title={"Destination"} content={cardContent}/>
}
