import React from "react";

export default function NewShipment() {
    return <div className={"card"}>
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col text-center"}>
                    <h6 className={"text-center mt-2"}>Quick form to</h6>
                    <h4>Add New Shipment</h4>
                    <img src={"img/shipment.png"} alt={"shipment"}/>
                    <button className={"btn btn-primary w-25"}>Go</button>
                </div>
            </div>
        </div>
    </div>
}
