import React from 'react';
function Dinner(){
    return(
        <section className="dinner">
            
           < div className='flex-row meal'>
               <div className="title">
                   <h3>Title:</h3>
                  {/* {title} */}
               </div>
                <div className="ingredients">
                    <h3>Ingredients:</h3>
                    {/* {ingredients} */}
                </div>
                <div className='directions'>
                    <h3>Cooking Directions:</h3>
                    {/* {directions} */}
                </div>
            </div>
        </section>
    )
}
export default Dinner;
