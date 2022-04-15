import React from 'react'
import CardWithTopBar from '../components/base/CardWithTopBar'
import NewShipment from "../components/dashboard/NewShipment";
import Destination from "../components/dashboard/Destination";
import Savings from "../components/dashboard/Savings";
import ShipmentHistory from "../components/dashboard/ShipmentHistory";
import YearlyShipment from "../components/dashboard/YearlyShipment";

export default function Dashboard() {
    return (
        <div className="container">
            <div className="row mb-4">
                <div className={"col-4"}>
                    <NewShipment/>
                </div>
                <div className={"col-8"}>
                    <div className="row mb-4">
                        <div className="col-6">
                            <CardWithTopBar
                                title='Generated Points'
                                content='55097'
                                subTitle='Last 7 days:'
                                subContent='↓4.36%'
                                subContentColor='red'
                            />
                        </div>
                        <div className="col-6">
                            <CardWithTopBar
                                title='Average Shipping Time'
                                content='1 day'
                                subTitle='Yesterday:'
                                subContent='↑4.36%'
                                subContentColor='green'
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <Destination/>
                        </div>
                        <div className="col-6">
                            <Savings/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className={"col-8"}>
                    <YearlyShipment/>
                </div>
                <div className={"col-4"}>
                    <ShipmentHistory/>
                </div>
            </div>
        </div>
    )
}