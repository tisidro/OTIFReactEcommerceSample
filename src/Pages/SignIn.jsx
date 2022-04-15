import React from "react";
import {BrandIcon} from "../components/base/BrandIcon";
import GoogleBtn from "../components/base/GoogleBtn";

export default function SignIn() {
    return <>
        <img src={"img/porter.png"} style={{position: "absolute", right: 0, bottom: 0, width: '300px'}}/>
        <div className={"container"}>
            <div className={"row mt-3"}>
                <div className={"col"}>
                    <BrandIcon/>
                </div>
                <div className={"col-7"}>
                    <h2>Sign In</h2>
                    <p>For business and Individuals</p>
                </div>
                <div className={"col"}>
                    <a style={{color: "#4c38EE"}}>← Go Back to main site</a>
                </div>
            </div>
            <div className={"row w-35 mx-auto"}>
                <div className={"col-12 text-center mb-3"}>
                    <GoogleBtn class={"mt-5"}/>
                    <div className="separator mt-2">OR</div>
                    <p className={"float-start"} style={{color: 'black'}}>Enter your full name</p>
                    <input type="password" className="form-control w-100" id="exampleInputPassword1"
                           placeholder="Your Name"/>
                    <p className={"float-start"} style={{color: 'black'}}>Password</p>
                    <input type="password" className="form-control w-100" id="exampleInputPassword1"
                           placeholder="Password"/>
                    <button className={"btn w-100 btn-primary mt-2"}>Sign In</button>
                    <p style={{color: 'black'}}>Don't have an account already? <a style={{color: "#4c38EE"}}>Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    </>
}