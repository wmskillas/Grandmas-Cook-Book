import React, { useState } from "react";
import ImageUploader from "react-images-upload";

function AddRecipe() {
  const [formState] = useState({
    title: "",
    ingredients: "",
    directions: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { title, ingredients, directions } = formState;

  const [url, setImageURL] = useState(undefined);
  const onUrlChange = (e) => {
    setImageURL(e.target.value);
  };
  const onImage = async (failedImages, successImages) => {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

 const UploadComponent= props =>(
  <form>
  {/* <input id='urlInput' type='text' onChange={props.onUrlChange} value={props.url}></input> */}
  <ImageUploader
  className='imageuploader'
  key='image-uploader'
  withIcon={true}
  single={true}
  withPreview={true}
  label='Maximum size file:5MB'
  buttonText="Choose an image"
  onChange={props.onImage}
  imgExtension={['.jpg', '.png', '.jpeg']}
  maxFileSize={5242880}></ImageUploader>
  </form>
 );
return (  
    <section className="recipe">
      <div><UploadComponent className='imageuploader' onUrlChange={onUrlChange} onImage={onImage}
        url={url}
        ></UploadComponent>
      <form className='bg-light'id="addrecipe" onSubmit={handleSubmit}>
        <div>
            <div className="mealchoicebuttons">
                <button>Breakfast</button>
                <button>Lunch</button>
                <button>Dinner</button>
            </div>
          <label htmlFor="name">Title:</label>
          <input
            type="text"
            name="title"
            defaultValue={title}
           ></input>


          <label htmlFor='ingredients'>Ingredients:</label>
          <textarea
            id='ingredients'
            type='textarea'
            name='ingredients'
            rows='4'
            maxLength={500}
            defaultValue={ingredients}
          />

          <label htmlFor='directions'>Directions:</label>
          <textarea
            id='directions'
            name='directions'
            type='textarea'
            maxLength={500}
            rows='5'
            cols='5'
            defaultValue={directions}
          />
        </div>

       
        
        <button className= "submit" type="submit">Submit</button>
         </form>
      </div>
      

    </section>
  );
}
export default AddRecipe;
