import React from 'react';
function Dinner(){
    return(
        <section className="dinner">
            
           < div className='flex-row meal'>
               <div className="title">
                  {/* {title} */}
               </div>
                <div className="ingredients">
                    <h3>Ingredients</h3>
                    {/* {ingredients} */}
                </div>
                <div className='directions'>
                    {/* {directions} */}
                </div>
            </div>
        </section>
    )
}
export default Dinner;
