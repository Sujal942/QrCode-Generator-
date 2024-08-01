import React, { useState } from "react";
import QRCode from "react-qr-code";

const QrCodeGenerator = () => {
  const [text, setText] = useState("");
  const [qrvalue, setQrvalue] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handelGenerateQrCode = () => {
    setQrvalue(text);
    setText("");
  };
  return (
    <>
      <div className="w-screen h-fit">
        <h1 className="text-blue-900 text-center mt-10 text-3xl">
          QrCode Generator
        </h1>
        <div className="flex flex-col gap-10 items-center w-80 mr-auto ml-auto mt-20">
          <input
            value={text}
            onChange={handleChange}
            type="text"
            className="border shadow-2xl rounded-md w-80 h-16 text-center"
            placeholder="Enter Name or URL"
          />
          <button
            onClick={handelGenerateQrCode}
            className="text-xl p-5 w-fit
        rounded-xl shadow-2xl bg-blue-700 text-white"
          >
            Generate QR
          </button>
          {qrvalue && (
            <QRCode
              value={qrvalue}
              size={200}
              className="shadow-xl rounded-md"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default QrCodeGenerator;
