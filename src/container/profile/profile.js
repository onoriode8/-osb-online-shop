import React, { useState, useRef, useEffect } from "react";


const Profile = () => {
    const [file, setFile] = useState();
    const [selectedFile, setSelectedFile] = useState();

    const fileRef = useRef();

    const filePickerHandler = () => {
        fileRef.current.click();
    }

    const fileReaderHandler = (event) => {
        const e = event.target.files[0];
        if(!e) {
            return;
        };
        setFile(e);
    };

    useEffect(() => {
        if(!file) return;
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            setSelectedFile(fileReader.result);
        };

    }, [file]);


    return (
        <div>
            <img src={selectedFile} alt="selected" style={{width: "50px", height: "50px"}}/>
            <input ref={fileRef} type="file" style={{display: "none"}} onChange={fileReaderHandler} />
            <button onClick={filePickerHandler}>choose a file</button>
        </div>
    );
};

export default Profile;