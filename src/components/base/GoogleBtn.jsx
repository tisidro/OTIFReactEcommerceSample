import React from "react"

export default function GoogleBtn() {
    return <button className={"btn w-100 btn-dark"}>
        <img src={"img/goog.png"} className={"me-1"} style={{height: "18px"}}/>
        <span>Continue with Google</span>
    </button>
}