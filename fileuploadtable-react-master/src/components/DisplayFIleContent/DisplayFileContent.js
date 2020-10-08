import React, { useRef, useState } from 'react';
import classes from './DisplayFileContent.css';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import Table from '../UI/Table/Table';

const DisplayFileContent = (props) => {
    const [uploadFileState, setUploadFileState] = useState({
        data: "",
        status: "",
        submitBtnStatus: true
    });
    const [tableState, setTableState] = useState({ data: [] });

    const uploadFileRef = useRef(null);
    const delimitInputRef = useRef(null);
    const linesInputRef = useRef(null);

    const uploadFile = (event) => {
        event.preventDefault();
        if (uploadFileRef.current.files.length && uploadFileRef.current.files[0].type === "text/plain") {
            const data = new FormData();
            data.append('file', uploadFileRef.current.files[0]);
            fetch('http://localhost:4000/upload', {
                method: 'POST',
                body: data
            })
                .then(response => response.text())
                .then(response => setUploadFileState({
                    data: response,
                    status: "File Upload Successfully",
                    submitBtnStatus: false
                }))
                .catch(err => {
                    setUploadFileState({
                        data: "",
                        response: `Error Occured, ${err.toString()}`,
                        submitBtnStatus: true
                    });
                })
        } else {
            setUploadFileState({
                data: "",
                status: "Please select file or selected file doesnt support. Only supports text file.",
                submitBtnStatus: true
            });
        }
    };

    const filterData = (event) => {
        event.preventDefault();
        const delimiter = delimitInputRef.current.value || ',';
        const linesCount = linesInputRef.current.value || 2;
        if (uploadFileState.data.length > 0) {
            let result = convertData(uploadFileState.data, delimiter);
            result = result.filter((item, index) => index < linesCount);
            setTableState({ data: result })
        }
    };

    const convertData = (data, delimiter) => {
        return data.split('\n').map(element => {
            if (element.includes(delimiter)) {
                return element.trim().split(delimiter).reduce((result, ele, index) => {
                    result[index] = ele;
                    return result;
                }, [])
            }
            return Object.assign({}, [element.toString().trim().split('|').join(',')]);
        });
    }

    return (
        <div>
            <form onSubmit={uploadFile}>
                <Input type="file" ref={uploadFileRef} label="Select file:" />
                <Button>Upload</Button>
                <div>
                    {uploadFileState.status}
                </div>
            </form>
            <hr />
            <form onSubmit={filterData}>
                <div className={classes.SingleRow}>
                    <Input type="text" label="Delimiter:" ref={delimitInputRef} />
                    <Input type="num" label="Lines:" ref={linesInputRef} />
                </div>
                <Button disabled={uploadFileState.submitBtnStatus}>Submit</Button>
            </form>
            {tableState.data.length > 0 ?
                <div className={classes.OutputTable}>
                    <Table data={tableState.data} />
                </div> : null}
        </div>
    );
}

export default DisplayFileContent;
