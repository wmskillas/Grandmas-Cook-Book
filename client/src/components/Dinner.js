import React from 'react';
function Dinner(){
    return(
        <section class="dinner">
            
           < div className='flex-row' class="meal">
               <div class="title">
                  {/* {title} */}
               </div>
                <div class="ingredients">
                    <h3>Ingredients</h3>
                    {/* {ingredients} */}
                </div>
                <div class='directions'>
                    {/* {directions} */}
                </div>
            </div>
        </section>
    )
}
export default Dinner;
