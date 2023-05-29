import React, { useEffect, useRef, useState } from "react";

interface Props {}

let currentOtpNumber: number = 0;

const Home = (props: Props) => {
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  const [activeOtpIndex, setActiveOtpInput] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    let newOtp: string[] = [...otp];

    newOtp[currentOtpNumber] = value.substring(0, 1);

    if (!value) {
      setActiveOtpInput(currentOtpNumber - 1);
    } else if (value.length > 1 && currentOtpNumber < otp.length - 1) {
      let remainingValue = value.substring(1);
      for (let i = currentOtpNumber + 1; i < otp.length; i++) {
        if (remainingValue.length > 0) {
          newOtp[i] = remainingValue.substring(0, 1);
          remainingValue = remainingValue.substring(1);
        } else {
          break;
        }
      }
      setActiveOtpInput(
        currentOtpNumber + Math.min(value.length, otp.length - currentOtpNumber)
      );
    } else {
      setActiveOtpInput(currentOtpNumber + 1);
    }

    setOtp(newOtp);
  };

  const handleOnKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentOtpNumber = index;
    if (event.key === "Backspace") setActiveOtpInput(currentOtpNumber - 1);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);

  return (
    <div>
      {otp.map((_, index) => (
        <React.Fragment key={index}>
          <input
            style={{
              marginTop: "30px",
              height: "30px",
              width: "30px",
              border: "1px solid grey",
              textAlign: "center",
              borderRadius: "2",
            }}
            type="number"
            value={otp[index]}
            ref={index === activeOtpIndex ? inputRef : null}
            onChange={handleOnChange}
            onKeyDown={(e) => handleOnKeyDown(e, index)}
          />
          {index === otp.length - 1 ? null : <span>-</span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Home;
