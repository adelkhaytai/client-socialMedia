import React from 'react'
import "./PostShare.css";
import ProfileImage from '../../img/profileImg.jpg'
import { HiOutlinePhotograph } from "react-icons/hi";
import { RiVideoAddFill } from "react-icons/ri";
import { GrLocation } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage, uploadPost } from '../../redux/actions/UploadingActions';

const PostShare = () => {
    const [image, setImage] = useState(null);
    const imageRef = useRef();
    const { user } = useSelector((state) => state.authReducer.authData);
    const desc = useRef();
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.postReducer.uploading);

    // handle Image Change
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    //post data
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    // Reset Post Share
  const resetShare = () => {
    setImage(null);
    desc.current.value = "";
  };

     // if there is an image with post
     if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;

      data.append("name", fileName);
      data.append("file", image);
      newPost.image = fileName;
      console.log(newPost);
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(uploadPost(newPost));
    resetShare();

  }

  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <div className='PostShare'>
      
        <div>
            <input ref={desc} type="text" placeholder="What's happening" />
            <div className='postOptions'>
        <div className='option' style={{color:"var(--photo)"}} 
        onClick={()=>{imageRef.current.click()}}>
            <HiOutlinePhotograph/>          
            </div>
             <div className='option' style={{
            color:"var(--video)"
        }}>
            <RiVideoAddFill/>          
            </div> 
            <div className='option' style={{
            color:"var(--location)"
        }}>
            <GrLocation/>          
            </div> 
            <div className='option' style={{
            color:"var(--shedule)"
        }}>
            <SlCalender/>          
            </div>
            <button className='button ps-button' onClick={handelSubmit} >
                {loading ? "Uploading..." : "Share" }
            </button>
            <div style={{display:'none'}}>
                <input type="file" name='myImage' ref={imageRef}
                 onChange={onImageChange}/>
            </div>
        </div>
        {image && (
          <div className="previewImage">
            <AiOutlineClose onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        )}
        </div>
    </div>
  )

}
export default PostShare