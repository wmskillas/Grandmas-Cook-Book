import React from 'react';
function Lunch(){
    return(
        <section className="lunch">
            <div className='card cardSizing'>
           <img className='' src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Grandma-s-Rice-Dish_EXPS_GBBZ19_16478_C11_27_10b-2.jpg?fit=700,1024" class="card-img-top" alt="..."></img>
            <div className='flex-row meal card-body'>
                <div className="title card-title">
                    {/* {title} */}
                    <h3>Grandma's Rice Dish</h3>
                </div>
                <div className="ingredients card-text">
                    <h3>Ingredients:</h3>
                    {/* {ingredients} */}
                    <p>1 pound ground beef
                         1/3 cup chopped onion
                        1/2 cup chopped green pepper
                        2 cups cooked long grain rice
                        1 can (14-1/2 ounces) diced tomatoes, undrained
                        1 can (11 ounces) whole kernel corn, drained
                        1 can (2-1/4 ounces) sliced ripe olives, drained
                        6 bacon strips, cooked and crumbled
                        2 teaspoons chili powder
                        1 teaspoon garlic powder
                        1/2 teaspoon salt
                        1-1/2 cups shredded cheddar cheese, divided
                        1/2 cup dry bread crumbs
                        1 tablespoon butter, melted</p>
                </div>
                <div className="directions card-body">
                    {/* {directions} */}
                    <h3>Directions:</h3>
                    <p>Preheat oven to 350°. In a large skillet, cook beef, onion and green pepper over medium heat until meat is no longer pink, breaking it into crumbles; drain.
        Stir in rice, tomatoes, corn, olives, bacon and seasonings; heat through. Stir in 1 cup cheese until melted.
        Transfer to a greased 11x7-in. baking dish. Sprinkle with remaining cheese. Toss bread crumbs with butter; sprinkle over top.
        Bake, uncovered, 15-20 minutes or until cheese is melted.</p>
                </div>
            </div>
            </div>
        </section>
    )
}
export default Lunch