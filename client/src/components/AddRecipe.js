import React, { useState } from 'react';
 
  
function AddRecipe(){
    const [formState] = useState({
    title: '',
    ingredients: '',
    directions: '',
  });
  const [errorMessage] = useState('');
  const { title, ingredients, directions} = formState;
    
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };
  
  return (
    <section class="recipe">
      <form id="addrecipe" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Title:</label>
          <input
            type="text"
            name="title"
            defaultValue={title}
           />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients:</label>
          <textarea id="ingredients"
            type="textarea"
            name="ingredients"
            rows="20"
            maxLength={500}
            defaultValue={ingredients}
            />
        </div>
        <div>
          <label htmlFor="directions">Directions:</label>
          <textarea id="directions"
            name="directions"
            type="textarea"
            maxLength={500}
            rows={20}
            cols={5}
            defaultValue={directions}
            />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
  };

export default AddRecipe;
