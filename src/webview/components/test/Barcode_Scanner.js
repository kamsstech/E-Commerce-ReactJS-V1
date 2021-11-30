import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

function Barcode_Scanner() {
  const [data, setData] = React.useState("Not Found");

  return (
    <>
      <BarcodeScannerComponent
      autoFocus
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData("Not Found");
        }}
      />
      <p>{data}</p>
    </>
  );
}

export default Barcode_Scanner;