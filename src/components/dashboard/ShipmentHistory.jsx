import React from "react";
import CardWithBotBar from "../base/CardWithBotBar";

export default function ShipmentHistory() {

    const data = [
        ['John Wayne', '#23544', '27/09/22', '$40,000'],
        ['Medical Center', '#27589', '27/09/22', '$4,000'],
        ['James Jamison', '#25362', '26/09/22', '$700'],
        ['Harnold Heyes', '#24478', '26/09/22', '$440'],
        ['Ress Media', '#24435', '26/09/22', '$4,340'],
        ['Cultural Pop', '#23456', '26/09/22', '$945'],
        ['Tasty Mom Meals', '#23490', '26/09/22', '$676']]

    const shipmentHistoryTable = <table className="table" style={{fontSize: "12px"}}>
        <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Order</th>
            <th scope="col">Date</th>
            <th scope="col">Amount Paid</th>
        </tr>
        </thead>
        <tbody>
        {data.map(item => {
            return <tr style={{lineHeight: '12px'}}>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td>{item[2]}</td>
                <td><b>{item[3]}</b></td>
            </tr>
        })}
        </tbody>
    </table>

    return <CardWithBotBar title={"Shipment History"} content={shipmentHistoryTable}/>
}