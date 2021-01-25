import React, {useState} from 'react';
import { Redirect } from "react-router-dom";

export default function ErrorPage() {
    const [counter, setCounter] = useState(8);

    setInterval(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
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
            </div>
            <h3>Redirecting in {counter} seconds</h3>            
        </div>
    )
}