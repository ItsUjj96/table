import './App.css';
import {Table} from 'react-bootstrap';
import {React, useEffect, useState} from 'react';
function App() {
  const [data,setData]=useState([]);

  const getData=()=>{
    fetch('sample.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="App">
      {
       data && data.length>0 && data.map(({owner, indexNo})=>

      <Table striped bordered hover size="sm">
{indexNo === "11" ? (

<h1>{indexNo}</h1>
):null}
  <thead>
    <tr>
      <th>IndexNo</th>
      <th>DocumentName</th>
      <th>DocumentSize</th>
      <th>Owner</th>
      <th>Download</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    
  </tbody>
      
</Table>
)
}
    </div>
  );
}

export default App;
