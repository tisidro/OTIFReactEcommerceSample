import React from "react"
import {BrandIcon} from "../components/base/BrandIcon";
import GoogleBtn from "../components/base/GoogleBtn";

export default function SignUp() {
    return <>
        <img src={"img/porter.png"} style={{position: "absolute", left: 0, bottom: 0, width: '300px'}} />
        <div className={"container"}>
            <div className={"row mt-3"}>
                <div className={"col"}>
                    <BrandIcon/>
                </div>
                <div className={"col-7"}>
                    <h2>Create account</h2>
                    <p>For business and Individuals</p>
                </div>
                <div className={"col"}>
                    <a style={{color: "#4c38EE"}}>← Go Back to main site</a>
                </div>
            </div>
            <div className={"row w-70 mx-auto"}>
                <div className={"col-6 text-center mb-3"}>
                    <p className={"float-start"} style={{color: 'black'}}>Enter your full name</p>
                    <input type="password" className="form-control w-100" id="exampleInputPassword1"
                           placeholder="Your Name"/>
                </div>
                <div className={"col-6 text-center mb-3"}>
                    <p className={"float-start"} style={{color: 'black'}}>Enter your email</p>
                    <input type="password" className="form-control w-100" id="exampleInputPassword1"
                           placeholder="Your Email"/>
                </div>
                <div className={"col-6 text-center mb-3"}>
                    <p className={"float-start"} style={{color: 'black'}}>Phone number</p>
                    <input type="password" className="form-control w-100" id="exampleInputPassword1"
                           placeholder="Your Phone Number"/>
                </div>
                <div className={"col-6 text-center mb-3"}>
                    <p className={"float-start"} style={{color: 'black'}}>Enter your birthday (dd/mm/yyyy)</p>
                    <input type="password" className="form-control w-100" id="exampleInputPassword1"
                           placeholder="Your Birthday"/>
                </div>
                <div className={"col-6 text-center mb-3"}>
                    <p className={"float-start"} style={{color: 'black'}}>Choose password with at least 8 characters</p>
                    <input type="password" className="form-control w-100" id="exampleInputPassword1"
                           placeholder="Your Password"/>
                </div>
                <div className={"col-6 text-center mb-3"}>
                    <p className={"float-start"} style={{color: 'black'}}>Referral Code (Optional)</p>
                    <input type="password" className="form-control w-100" id="exampleInputPassword1"
                           placeholder="Your Referral Code"/>
                </div>
                <div className={"col-12 mb-3 align-middle"}>
                    <input className={"float-start align-middle"} type="checkbox"
                           aria-label="Checkbox for following text input"/>
                    <p style={{color: 'black', margin: 0, textAlign: "start"}}>I agree to all the <a
                        style={{color: "#4c38EE"}}>Terms</a> and <a style={{color: "#4c38EE"}}>Privacy
                        Policy</a></p>
                </div>
                <div className={"col-6 text-center mb-3"}>
                    <button className={"btn btn-primary w-100"}>Create account</button>
                </div>
                <div className={"col-6 text-center mb-3"}>
                    <GoogleBtn/>
                </div>
                <div className={"col-12 text-center"}>
                    <p style={{color: 'black'}}>Have an account already? <a style={{color: "#4c38EE"}}>Sign In</a></p>
                </div>
            </div>
        </div>
    </>
}