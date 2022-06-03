import React, { useState, Component} from 'react';

// class App extends Component{
//   fileSelectedHandler = event =>{
//     console.log(event);
//   }
//   }

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
      <form className='bg-light'id="addrecipe" onSubmit={handleSubmit}>
        <div>
            <div class="mealchoicebuttons">
                <button>Breakfast</button>
                <button>Lunch</button>
                <button>Dinner</button>
            </div>
          <label htmlFor="name">Title:</label>
          <input
            type="text"
            name="title"
            defaultValue={title}
           />

          <label htmlFor="ingredients">Ingredients:</label>
          <textarea id="ingredients"
            type="textarea"
            name="ingredients"
            rows="4"
            maxLength={500}
            defaultValue={ingredients}
            />

          <label htmlFor="directions">Directions:</label>
          <textarea id="directions"
            name="directions"
            type="textarea"
            maxLength={500}
            rows="5"
            cols="5"
            defaultValue={directions}
            />
        </div>
        {/* <div className='App'>
        <input type='file'  onChange={this.fileSelectedHandler}/>
        </div> */}
        <button className= "submit" type="submit">Submit</button>
      </form>
    </section>
  );
  };
export default AddRecipe;
