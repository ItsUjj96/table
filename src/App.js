import "./App.css";
import { Table } from "react-bootstrap";
import api from "./Api/API"
import { React, useEffect, useState } from "react";
function App() {
  const [documents, setDocuments] = useState([]);

  useEffect(()=>{
    const fetchDocuments = async() =>{
      try{
        const response = await api.get('/Documents');
        setDocuments(response.data);
      } catch(err){
        if (err.response){
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else{
          console.log(`Error:${err.message}`);
        }
      }
    }
    fetchDocuments();
  }, [setDocuments])
  return (
    <div className="App">
        
      <Table striped bordered hover size="sm">
       
        <thead >
     
          <tr>
            <th>IndexNo</th>
            <th>DocumentName</th>
            <th>DocumentSize</th>
            <th>Owner</th>
            <th>Download</th>
          </tr>
       
        </thead>
        <tbody>
        {documents && documents.map((Documents) => (
          // return (
<tr key={Documents.indexNo}>
            <td>{Documents.indexNo}</td>
            <td>{Documents.documentName}</td>
            <td>{Documents.documentSize}</td>
            <td>{Documents.owner}</td>
          </tr>
          // )
          
        ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
