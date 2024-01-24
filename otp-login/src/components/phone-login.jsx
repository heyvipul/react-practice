import { useState } from "react"
import OtpInput from "./otp-input";
import toast, { Toaster } from 'react-hot-toast';

const PhoneOptForm = () => {

    const [phoneNumber, setPhoneNumber] = useState("");
    const [showOtp, setShowOtp] = useState(false)

    function handlePhoneNumber(event) {
        setPhoneNumber(event.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();

        // phone validations
        const regex = /[^0-9]/g;
        if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
            alert("Invalid Phone Number");
            return;
        }

        //call the Api
        //show otp filed
        setShowOtp(true);
    }

    function onOtpSubmit(){
        toast.success('Login successfull!')
    }

    return (
        <div>
            {!showOtp ? <form onSubmit={handleSubmit}>
                <input className="inputNumber" type="text" value={phoneNumber}
                    onChange={handlePhoneNumber}
                    placeholder="enter phone number"
                />
                <button className="inputNumber" type="submit">Submit</button>
            </form> : <div>
                <p>Enter the otp sent to {phoneNumber}</p>
                <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
                <Toaster />
            </div>
            }
        </div>
    )
}

export default PhoneOptForm