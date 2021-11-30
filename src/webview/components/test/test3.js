import React,{useState,useEffect} from 'react'

/**
* @author
* @function Test3
**/

const Test3 = (props) => {

  const yourArray = ['1', '2', '3', '4', '5','6','1','6'];


  const [duplicateAction, setDuplicateAction] = useState("");
  const yourArrayWithoutDuplicates = [...new Set(yourArray)]
  let duplicates = [...yourArray]
  yourArrayWithoutDuplicates.forEach((item) => {
    const i = duplicates.indexOf(item)
    duplicates = duplicates
      .slice(0, i)
      .concat(duplicates.slice(i + 1, duplicates.length))
  })

useEffect(() => {
 if(duplicates.length > 0){
  setDuplicateAction(true)
 }else{
  setDuplicateAction(false)
 }
}, [duplicates])



  console.log(duplicateAction,"<<< duplicateAction")
  return(
    <div>{duplicates.map((data,index)=>(
      <>
      <h4>{data}</h4>
      
      </>
      
    ))}</div>
   )

 }
 export default Test3