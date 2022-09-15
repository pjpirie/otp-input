import React, { useCallback, useEffect, useRef, useState } from "react";

interface otpInputProps {
    otpSize?: number;
}


export const useOTPInput = (props: otpInputProps) => {
    const { otpSize = 6 } = props;
    const [otpValue, setOTPValue] = useState<string[]>(new Array(otpSize).fill(''));
    const otpRef = useRef<HTMLInputElement>(null);
    const [targetOTP, setTargetOTP] = useState(0);

    useEffect(() => {
        otpRef.current?.focus();
    },[targetOTP])

    const updateOTP = (val: string, index: number) => {
        const OTP = otpValue;
        OTP[index] = val;
        setOTPValue(OTP);
    }
    const nextOTPTarget = (index: number) => {
        if (index < otpSize) setTargetOTP(index+1);
    } 

    const handleOTPInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number): void => {
        if(!e.target.value || e.target.value === '') return;
        if(e.target.value.length > 1) e.target.value = e.target.value.substring(e.target.value.length-1, e.target.value.length);
        updateOTP(e.target.value, index);
        nextOTPTarget(index);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>, index: number): void => {
        if (index < otpSize) setTargetOTP(index);
    }

    const handleSubmit = useCallback(() => {
        alert(otpValue)
    },[otpValue]);

    return { handleOTPInputChange, otpRef, targetOTP, otpValue, handleFocus, handleSubmit };
};
