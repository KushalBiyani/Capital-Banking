import React, { useEffect, useState } from 'react';
import { Redirect } from "react-router-dom";


export default function ErrorPage() {
    const [redirect, setRedirect] = useState(false)
    useEffect(() => {
        setInterval(() => {
            setRedirect(true);
        }, 4000);
    }, [redirect])
    if (redirect) {
         return <Redirect to={`/selectUser`} />;
    }
    return (
        <div >
            <div className="container" id="error" >
                <div className="printer-top">
                </div>
                <div className="paper-container">
                    <div className="printer-bottom">
                    </div>
                    <div className="paper zig-zag-bottom">
                        <div className="main-contents">
                            <div className="failed icon">&#10006;</div>
                            <div className="fail-title">
                                Payment Failed
                            </div><br />
                            <div className="failed-description" >Transaction Failed Due To <br /> Insufficient Balance</div>
                        </div><br />
                        <div className="order-number-label success-title">Try Again</div>

                    </div>
                </div>
                <div className="continue" ><h3>Redirecting...</h3></div>
            </div>
        </div>
    )
}