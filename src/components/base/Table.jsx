import React from "react";
import {ReactComponent as SortIcon} from "../../assets/sort.svg";


export default function Table(props) {

    return <table className={"table bg-ot-gray1 rounded-3"} style={{borderCollapse: "seperated", borderSpacing: "0 1rem"}}>
        <thead className={"bg-ot-blue"} style={{backgroundColor: "#0000FF"}}>
        <tr className={"overflow-hidden"}>
            {props.header.map(header => {
                return <th style={{color: "#fff"}} scope={"col"}>{header}<SortIcon/></th>
            })}
        </tr>
        </thead>
        <tbody>
        {props.data.map((item, i) => {
            return <tr>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td>{item[2]}</td>
                <td>{item[3]}</td>
                <td>{item[4]}</td>
                <td>{item[5]}</td>
                <td>{item[6]}</td>
                <td>{item[7]}</td>
            </tr>
        })}
        </tbody>
    </table>
}
