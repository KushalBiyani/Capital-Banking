import React ,{useEffect , useState} from 'react';
import { Redirect } from "react-router-dom";
import './style.css';

export default function SuccessPage() {
    const [redirect, setRedirect] = useState(false)
    const transaction = window.localStorage.getItem("transaction");
    var token = JSON.parse(transaction);
    useEffect(() => {
        setInterval(() => {
            setRedirect(true);
        }, 8000);
    }, [redirect])
      if (redirect) {
      //  return <Redirect to={`/history`} />;
    }
    return (
        <div id ="success">
        <div className="container" id ="success" >
            <div className="printer-top">
            </div>
            <div className="paper-container">
                <div className="printer-bottom">
                </div>
                <div className="paper zig-zag-bottom ">
                    <div className="main-contents">
                        <div className="success icon">&#10004;</div>
                        <div className="success-title">
                            Payment Successful
                        </div>
                        <div className="success-description">
                        <div className="row">
                            <div className="col-md-6 info"><h5 >Amount  </h5><h5>Sender </h5><h5>Reciever </h5></div>
                            <div className="col-md-6 des"><h5 >{token.amount}</h5><h5>{token.sendersName}</h5><h5>{token.recieversName}</h5></div>
                            <div></div>
                        </div>
                            <div className="order-details"><br></br>
                                <div className="order-number-label">Transaction Number</div>
                                <div className="order-number">{token.transactionNumber}</div>
                            </div>
                            <div className="order-footer">Thank you!</div>
                        </div>
                    </div>
                    
                </div>
            </div>
             
        </div>
</div>
    )
}