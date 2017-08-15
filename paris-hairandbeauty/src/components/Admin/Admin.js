import React from 'react';
import Dropzone from 'react-dropzone';
import { csvToJSONArray } from './../../Util/CSV2JSON';
// import fs from 'fs';

class Admin extends React.Component {

  onDrop(acceptedFiles, rejectedFiles) {
      console.log('Accepted files: ', acceptedFiles);
      console.log('Rejected files: ', rejectedFiles);

      var services = acceptedFiles[0]; 
      console.log("SERVICES:" + (services.toString()));
      var reader = new FileReader();

      reader.onload = function(e) { 
          var jsonData = csvToJSONArray(reader.result);
          localStorage.removeItem("servicesparis");
          localStorage.setItem("servicesparis",JSON.stringify(jsonData));
        }
      reader.readAsText(services);
      
    }

  render() {
  return (
          <div>
            <Dropzone onDrop={this.onDrop}>
              <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
          </div>
      );
} 
}
export default Admin; 
