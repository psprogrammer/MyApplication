import React, { useState, createRef } from 'react';
import ProgressBar from './ProgressBar';

function FileUploader(props) {
    const [progress, setProgress] = useState("0%");
    let files = [];
    const fileInput = createRef();
    const processFiles = () => {
        var request = new XMLHttpRequest();
        setProgress("0%");
        files = fileInput.current.files;
        if (files.length === 0) return;
        request.upload.addEventListener("progress", showProgress);
        request.open("POST", "/uploadFile", true);
        var formData = new FormData();
        for (var file = 0; file < files.length; file++) {

            formData.append("file" + file, files[file], files[file].name);

        }
        request.send(formData);
    }
    const showProgress = (evt) => {
        let percentage = (((evt.loaded / evt.total) * 100)) + "%";
        console.log(percentage);
        setProgress(percentage);

    }

    return <>
        <input type="file" multiple={true} id='browser' style={{ display: 'none' }} ref={fileInput} onChange={processFiles} />
        <button onClick={() => { document.getElementById('browser').click(); }}>Browse</button>
        <ProgressBar progress={progress} />
        {progress === "100%" && <span>File Uploaded Successfully!</span>}
    </>

}

export default FileUploader;