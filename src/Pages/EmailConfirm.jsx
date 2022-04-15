import React from "react"
import {BrandIcon} from "../components/base/BrandIcon";

export default function EmailConfirm() {
    return <>
        <img src={"img/porter.png"} style={{position: "absolute", right: 0, bottom: 0}} />
        <div className={"container"}>
            <div className={"row mt-3"}>
                <div className={"col-9"}>
                    <BrandIcon/>
                </div>
                <div className={"col"}>
                    <a style={{color: "#4c38EE"}}>← Go Back to main site</a>
                </div>
            </div>
            <div className={"row"}>
                <div className={"col-12 text-center mb-3"}>
                    <p style={{color: "black"}}>Before continuing, we need to verify your email address. Please check
                        your
                        inbox for a confirmation link</p>
                    <p style={{color: "black"}}>If you do not receive the email
                        at <strong>pvillarreal@ikw.com.mx</strong> within an hour, we can <a style={{color: "#4c38EE"}}>resend
                            it to you.</a></p>
                </div>
            </div>
        </div>
    </>
}
