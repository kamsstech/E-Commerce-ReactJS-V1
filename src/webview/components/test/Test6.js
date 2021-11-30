
import { Checkbox } from "@material-ui/core";
import { useState } from "react";

const options = ["Selected  1","Selected  1", "Selected  2", "Selected  3"];

 function Test6() {
  const [selected, setSelected] = useState([]);



  const isAllSelected = options.length > 0 && selected.length === options.length;
  const handleChange = (event) => {
    const value = event.target.value;
    

    console.log(value);
    if (value === "all") {
      setSelected(selected.length === options.length ? [] : options);
      return;
    }
    
    const list = [...selected];
    const index = list;
    index === -1 ?  list.splice(index, 1) : list.push(value);
    setSelected(list);

    // setSelected(selected.length === options.length ? [] : list.push(value));
 
    
  };

  console.log(selected)

  const listItem = options.map((option) => {
    return (
      <div key={option}>
        <Checkbox
          value={option}
          onChange={handleChange}
          checked={selected.includes(option)}
        />
        <span>{option}</span>
       
      </div>
    );
  });

	return (
		<>

      <div style={{ display: "flex", alignItems: "center", margin: 10 }}>
      {listItem}
       
      </div>
      <div style={{ display: "flex", alignItems: "center", margin: 10 }}>
      <Checkbox value="all" onChange={handleChange} 
      checked={isAllSelected}
      
      />
      <span> Select All</span><br />
      
      
     
    </div>
    <span>{selected}</span>
    </>
    
  );
}
export default Test6;