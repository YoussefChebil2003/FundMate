import React, { useRef } from "react";

function UploadButton() {
    const fileInput = useRef(null);

    const handleUpload = () => {
        fileInput.current.click();
    };
    return (
        <div className="m-3">
            <label className="mx-3">Choose file: </label>
            <input ref={fileInput} className="d-none" type="file" />
            <button onClick={handleUpload} className="btn btn-outline-primary">
                Upload
            </button>
        </div>
    );
}


export default UploadButton;