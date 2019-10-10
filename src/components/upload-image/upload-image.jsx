import React, {useState} from "react";
import "./upload-image.css";

const UploadImage = props => {

    const [image, setImage] = useState(props.src ? props.src : "https://i.imgur.com/mkv5uIQ.png");

    const parseFile = (e) => {
        if(e.target.files.length > 0)
            setImage(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <div class="image-upload">
            <label for="file-input">
                <img src={image} 
                    alt ={props.alt}/>
            </label>
            <input id="file-input" type="file" accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*" onChange={(e) => parseFile(e)}/>
        </div>
    );
}

export default UploadImage;
