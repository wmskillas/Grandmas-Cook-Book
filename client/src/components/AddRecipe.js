import React, { useState } from "react";
import ImageUploader from "react-images-upload";
// import axios from 'axios';


function AddRecipe() {
  const [input,setInput] = useState({
    title: "",
    ingredients: "",
    directions: "",
  });
  const [setErrorMessage] = useState("");
  

  const [url, setImageURL] = useState(undefined);
  const onUrlChange = (e) => {
    setImageURL(e.target.value);
  };
  const onImage = async (successImages) => {
    if (!url) {
      console.log("missing URL");
      setErrorMessage("missing a URL to upload to");
      return;
    }
    try {
      console.log("successImages", successImages);
    } catch (err) {
      console.log("error in upload");
    }
  };
  function handleChange (event) {
  
    const { name,value} = event.target;
   setInput(prevInput=>{
     return{
       ...prevInput,
       [name]: value
     }
   })
  };
function handleClick(event){
  event.preventDefault();
  const newRecipe={
    title:input.title,
    ingredients:input.ingredients,
    directions:input.directions
  }
  console.log(newRecipe);
  // .post('http://localhost:3001/',newRecipe)
}
  const UploadComponent = (props) => (
    <form>
      {/* <input id='urlInput' type='text' onChange={props.onUrlChange} value={props.url}></input> */}
      <ImageUploader
        className='imageuploader'
        key='image-uploader'
        withIcon={true}
        single={true}
        withPreview={true}
        label='Maximum size file:5MB'
        buttonText='Choose an image'
        onChange={props.onImage}
        imgExtension={[".jpg", ".png", ".jpeg"]}
        maxFileSize={5242880}
      ></ImageUploader>
    </form>
  );
  return (
    <section className='recipe'>
      <div>
        <UploadComponent
          className='imageuploader'
          onUrlChange={onUrlChange}
          onImage={onImage}
          url={url}
        ></UploadComponent>
        <form className='' id='addrecipe' onChange={handleChange}>
          <div>
            <div className='mealchoicebuttons'>
              <button>Breakfast</button>
              <button>Lunch</button>
              <button>Dinner</button>
            </div>
            <label htmlFor='name'>Title:</label>
            <input type='text' name='title' value={input.title}></input>

            <label htmlFor='ingredients'>Ingredients:</label>
            <textarea
              onChange={handleChange}
              value={input.ingredients}
              
              id='ingredients'
              type='textarea'
              name='ingredients'
              rows='4'
              maxLength={500}
              
            />

            <label htmlFor='directions'>Directions:</label>
            <textarea
              onChange={handleChange}
              value={input.directions}
              
              id='directions'
              name='directions'
              type='textarea'
              maxLength={500}
              rows='5'
              cols='5'
              
            />
          </div>

          <button onClick={handleClick} className='submit' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
export default AddRecipe;
