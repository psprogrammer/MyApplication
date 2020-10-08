import React, { Component } from 'react';
import ApiService from '../ApiService';
import Table from 'react-bootstrap/Table'
import axios from 'axios';

class index extends Component {

    constructor() {
        super();
    
        this.state = {
          selectedFile: "",
          loaded: 1,
          files:[]
        } 
      }
      componentDidMount(){
       this.getFiles();
          
      }

      getFiles() {
        console.log("items List start");
        let url = "http://localhost:9001/api/upload"
        axios.get(url).then(response => {
            this.setState({
              files: response.data
            });
            console.log("items List"+this.state.files);
        });
    }

      onFileChangeHandler = (e) => {
        console.log(e.target.files[0])
        this.setState({
            selectedFile: e.target.files[0],
            loaded: 0,
          })
    };

    

    onClickHandler = () =>{
        console.log("this.state.selectedFile"+ this.state.selectedFile);
        const formData = new FormData();
        formData.append('file', this.state.selectedFile);
        ApiService.upload(formData)
            .then(res => {
                    console.log(res.data);
                    alert("File uploaded successfully.")
            })
    }
    render() {
      let list = [];
      console.log("file"+this.state.files);
      // if(this.state.files.size){
      list = this.state.files.map((invoice, index) => {
        return (
            <tr key={index}>
                <td>{invoice.zipFileName}</td>
                <td>{invoice.fileName}</td>
                <td>{invoice.country}</td>
                <td>{invoice.countryCode}</td>
            </tr>
        )
    });
  // }

        return (
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                        <div className="form-group files color">
                            <label>Upload Your File </label>
                            <input type="file" className="form-control" name="file" onChange={this.onFileChangeHandler}/>
                        </div>
                        <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
                </div>
            </div>
            <div>
                <br></br>
            </div>
            <div>
            <Table striped bordered hover size="sm">
  <thead>
    <tr>
        <th>Zip FileName</th>
        <th>File Name</th>
        
        <th>Country name</th>
        <th>Country code</th>
    </tr>
  </thead>
  <tbody>
    {list}
    
  </tbody>
</Table>
</div>
        </div>
        );
    }
}

export default index;