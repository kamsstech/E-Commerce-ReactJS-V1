import React, { useEffect,useState } from "react";
import axios from "axios";

function Test4() {
    const [arrayRes, setArrayRes] = useState([]);

    console.log(arrayRes,"<< arrayRes")
          const headers = {
            "Content-Type": "application/json",
          };
  useEffect(() => {axios.get(`http://datasense.in/demo/taskapi/index.php/cart/api/manage_cart`,{headers}
      ).then((response) => {
        setArrayRes(response.data)
      });
  }, []);

  return (
    <div style={{padding:"20px",}}>
      {
          arrayRes.data && arrayRes.data.length > 0 && arrayRes.data.map((item, index) =>(
              <div key={index} style={{border:"1px solid #ddd",padding:"10px",marginBottom:"20px"}}>
                  <h4>{item.title}</h4>
                  <h4>{item.price}</h4>
                  <h4>{item.published}</h4>
                  <h4>{item.quantity}</h4>
              </div>
          ))
      }
    </div>
  );
}

export default Test4;
