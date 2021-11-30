import React, { useState } from "react";

const Test2 = () => {

  let input = "9123456789";
  input = input.replace(/^(\d{0,4})(\d{0,4})/, "$1 $2");
  let prefix = input.substr(0, input.length - 4);
  let suffix = input.substr(-4);
  let masked = prefix.replace(/\d/g, "*");
  let a = masked + suffix;
  // console.log(a, "card");




  const [formValues, setFormValues] = useState([
    { 
    druglicence_no: "", 
    date: "" 
  
  }
  ]);
const [array, setArray] = useState([])



  const [count, setCount] = useState(1);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setCount((prevCount) => prevCount + 1);
    setFormValues([...formValues, { druglicence_no: "", date: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
    setCount((prevCount) => prevCount - 1);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setArray(formValues)
    // alert(JSON.stringify(formValues));
    
    // let temp1 = {};
    // Object.entries(formValues).map((entry,index) => {
    //   temp1 = entry[1];
    // });
    
  };
console.log(array,"<<< ARRAY")
// console.log(array[1].druglicence_no,"<<< ARRAY")



  return (
  <>

<div className="button-section">
        <button
          disabled={count === 3 ? true : false}
          className="button add"
          type="button"
          onClick={() => addFormFields()}
        >
          {" "}
          Add{" "}
        </button>
       </div>
    <form onSubmit={handleSubmit}>
      <h1>count: {count}</h1>

      {formValues.map((element, index) => (
        <div key={index}>
          <div>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="druglicence_no"
                value=""
                value={element.druglicence_no || ""}
                onChange={(e) => handleChange(index, e)}
              />
            </div>
            <div>
              <label>Date</label>
              <input
                type="text"
                name="date"
                value=""
                value={element.date || ""}
                onChange={(e) => handleChange(index, e)}
              />
            </div>
            <br />

            {index ? (
              <button
                type="button"
                className="button remove"
                onClick={() => removeFormFields(index)}
              >
                Remove
              </button>
            ) : null}
          </div>
        </div>
      ))}

      


      <div className="button-section">
        {/* <button
          disabled={count === 3 ? true : false}
          className="button add"
          type="button"
          onClick={() => addFormFields()}
        >
          {" "}
          Add{" "}
        </button> */}
        <button className="button submit" type="submit">
          Submit
        </button>
      </div>
    </form>
  </>
    
  );
};

export default Test2;
