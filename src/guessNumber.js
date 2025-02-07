import React, { useEffect, useState } from "react";

function GuessNumber(props) {
    console.log('props..',props)
    const [otp, setOtp] = useState('');  // State to store the generated OTP

    useEffect(() => {
       
            console.log('Guess Number component renders');

            const generateOtp = () => {
                let digits = '0123456789'; 
                let OTP = ''; 
                let len = digits.length;
                for (let i = 0; i < 4; i++) { 
                    OTP += digits[Math.floor(Math.random() * len)]; 
                } 
                console.log('OTP...', OTP);
                return OTP;
            };

            // Generate OTP and store it in the state
            const generatedOtp = generateOtp();
            setOtp(generatedOtp);

            // Reset isGenerated to false to allow for generating a new OTP on the next click
            props.falseCallback();
        
    }, [props.isgenerate]);

    // Render the OTP if it exists
    return otp ? (
        <div className="boder pad_10">
            <span>YOUR OTP IS</span>
            <h2 className="bmar0 tmar0">{otp}</h2>  {/* Render the OTP */}
        </div>
    ) : null;
}

export default React.memo(GuessNumber);
