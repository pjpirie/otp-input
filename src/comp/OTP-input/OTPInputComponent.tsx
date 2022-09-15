import React from "react";
import { useOTPInput } from "./useOTPInput";
import styled from 'styled-components';

export default function OTPInputComponent() {
    const { otpValue, targetOTP, otpRef, handleOTPInputChange, handleFocus, handleSubmit } = useOTPInput({ otpSize: 5 });
    console.log(otpValue)
    return (
        <div className="otp__input__container">
            {otpValue.map((_: string, index: number) => {
                return (
                <span className="otp__input__item" key={index}>
                    <OTPInput 
                    className={`otp__input__item--${index}`} 
                    ref={targetOTP === index ? otpRef : null} 
                    type="text" 
                    onChange={(e) => handleOTPInputChange(e, index)} 
                    onFocus={(e) => handleFocus(e, index)}
                    />
                    {index < otpValue.length - 1 ? (
                    <span className={`otp__input__divider otp__input__divider--${index}`}>
                        -
                    </span>
                    ): (<></>)}
                </span>
                );
                
            })}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

const OTPInput = styled.input`
    width: 3em;
    height: 3em;
    text-align: center;
` 