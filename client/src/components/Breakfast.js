import React from 'react';
function Breakfast(){
    return(

        <section className="breakfast">
            <div className='card cardSizing'>
            <img className='' src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Vegetable-Frittata_EXPS_GBHRBZ17_2209_D07_20_2b-1.jpg?fit=700,1024" class="card-img-top" alt="..."></img>
                
            <div className='flex-row meal card-body'>
            <div className="title card-title">
                
                   <h3>Vegetable Frittata</h3>
                </div>
                
                <div className="ingredients card-text">
                    <h3>Ingredients:</h3>
                    <p><li>1/2 cup chopped onion</li>
                       <li>1/2 cup chopped green pepper</li>
                        <li>1/2 cup chopped sweet red pepper</li>
                        <li>1 garlic clove, minced</li>
                        <li>3 tablespoons olive oil, divided</li>
                        <li>2 medium red potatoes, cooked and cubed</li>
                        <li>1 small zucchini, cubed</li>
                        <li>6 large eggs</li>
                        <li>1/2 teaspoon salt</li>
                        <li>Pinch pepper</li>
                        </p>
                </div>
                <div className="directions card-body">
                <h3>Directions:</h3>
                       <p>Preheat broiler. In a 10-in. cast-iron or ovenproof skillet, saute onion, peppers and garlic in 2 tablespoons of oil until the vegetables are tender. Remove vegetables with a slotted spoon; set aside.
                            In the same skillet over medium heat, lightly brown potatoes in remaining oil. Add vegetable mixture and zucchini; cook for 4 minutes.
                            In a bowl, beat eggs, salt and pepper; pour over vegetables. Cover and cook for 8-10 minutes or until eggs are nearly set. Broil 6 in. from the heat for 2 minutes or until eggs are set on top. Cut into wedges.</p> 
                    </div>
                    </div>
                    <div className='card cardSizing'>
           <img className='' src="https://www.tasteofhome.com/wp-content/uploads/2018/01/exps184358_TH143195B07_23_2b_WEB-15.jpg?fit=700,1024" class="card-img-top" alt="..."></img>
            <div className='flex-row meal card-body'>
                <div className="title card-title">
                    {/* {title} */}
                    <h3>Grandma's Biscuits</h3>
                </div>
                <div className="ingredients card-text">
                    <h3>Ingredients:</h3>
                    {/* {ingredients} */}
                    <p><li>2 cups all-purpose flour</li>
                        <li>3 teaspoons baking powder</li>
                        <li>1 teaspoon salt</li> 
                        <li>1/3 cup shortening</li>
                        <li>2/3 cup 2% milk</li>
                        <li>1 large egg, room temperature, lightly beaten</li></p>
                </div>
                <div className="directions card-body">
                    {/* {directions} */}
                    <h3>Directions:</h3>
                    <p>Preheat oven to 450°. In a large bowl, whisk flour, baking powder and salt. Cut in shortening until mixture resembles coarse crumbs. Add milk; stir just until moistened.
                        Turn onto a lightly floured surface; knead gently 8-10 times. Pat dough into a 10x4-in. rectangle. Cut rectangle lengthwise in half; cut crosswise to make 10 squares.
                        Place 1 in. apart on an ungreased baking sheet; brush tops with egg. Bake until golden brown, 8-10 minutes. Serve warm.</p>
                </div>
            </div>
         </div>
         </div>
         
        </section>
    )
}
export default Breakfast;