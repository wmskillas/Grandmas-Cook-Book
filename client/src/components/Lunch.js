import React from "react";
function Lunch() {
  return (
    <section className='lunch'>
      <div className='card cardSizing'>
        <img
          className=''
          src='https://www.tasteofhome.com/wp-content/uploads/2018/01/Grandma-s-Rice-Dish_EXPS_GBBZ19_16478_C11_27_10b-2.jpg?fit=700,1024'
          class='card-img-top'
          alt='...'
        ></img>

        <div className='flex-row meal card-body'>
          <div className='title card-title'>
            {/* {title} */}
            <h3>Grandma's Rice Dish</h3>
          </div>
          <div className='ingredients card-text'>
            <h3>Ingredients:</h3>
            {/* {ingredients} */}
            <ul>
              <li>1 pound ground beef</li>
              <li>1/3 cup chopped onion</li>
              <li> 1/2 cup chopped green pepper</li>
              <li>2 cups cooked long grain rice</li>
              <li>1 can (14-1/2 ounces) diced tomatoes, undrained</li>
              <li>1 can (11 ounces) whole kernel corn, drained</li>
              <li>1 can (2-1/4 ounces) sliced ripe olives, drained</li>
              <li>6 bacon strips, cooked and crumbled</li>
              <li>2 teaspoons chili powder</li>
              <li> 1 teaspoon garlic powder</li>
              <li>1/2 teaspoon salt</li>
              <li>1-1/2 cups shredded cheddar cheese, divided</li>
              <li>1/2 cup dry bread crumbs</li>
              <li>1 tablespoon butter, melted</li>
            </ul>
          </div>
          <div className='directions card-body'>
            {/* {directions} */}
            <h3>Directions:</h3>
            <p>
              Preheat oven to 350°. In a large skillet, cook beef, onion and
              green pepper over medium heat until meat is no longer pink,
              breaking it into crumbles; drain. Stir in rice, tomatoes, corn,
              olives, bacon and seasonings; heat through. Stir in 1 cup cheese
              until melted. Transfer to a greased 11x7-in. baking dish. Sprinkle
              with remaining cheese. Toss bread crumbs with butter; sprinkle
              over top. Bake, uncovered, 15-20 minutes or until cheese is
              melted.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className='card cardSizing'>
        <img
          className=''
          src='https://www.tasteofhome.com/wp-content/uploads/2018/01/Grandma-s-Tomato-Soup_EXPS_CF219_3984_B12_18_1b-5.jpg?fit=700,1024'
          class='card-img-top'
          alt='...'
        ></img>
        <div className='flex-row meal card-body'>
          <div className='title card-title'>
            {/* {title} */}
            <h3>Grandma's Tomato Soup</h3>
          </div>
          <div className='ingredients card-text'>
            <h3>Ingredients:</h3>
            {/* {ingredients} */}
            <ul>
              <li>2 tablespoons butter</li>
              <li>1 tablespoon all-purpose flour</li>
              <li>2 cups tomato juice</li>
              <li>1/2 cup water</li>
              <li>2 tablespoons sugar</li>
              <li>1/8 teaspoon salt</li>
              <li>3/4 cup cooked wide egg noodles</li>
              <li>Chopped fresh parsley, optional</li>
            </ul>
          </div>
          <div className='directions card-body'>
            {/* {directions} */}
            <h3>Directions:</h3>
            <p>
              PIn a saucepan over medium heat, melt butter. Add flour; stir to
              form a smooth paste. Gradually add tomato juice and water,
              stirring constantly; bring to a boil. Cook and stir until
              thickened, about 2 minutes. Add sugar and salt. Stir in egg
              noodles and heat through. If desired, sprinkle with parsley.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className='card cardSizing'>
        <img
          className=''
          src='https://images.unsplash.com/photo-1546964053-d018e345e490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
          class='card-img-top'
          alt='...'
        ></img>
        <div className='flex-row meal card-body'>
          <div className='title card-title'>
            {/* {title} */}
            <h3>Classic Beef Wellingtons</h3>
          </div>
          <div className='ingredients card-text'>
            <h3>Ingredients:</h3>
            {/* {ingredients} */}
            <ul>
              <li>4 beef tenderloin steaks (6 ounces each)</li>
              <li>3/4 teaspoon salt, divided</li>
              <li>1/2 teaspoon pepper, divided</li>
              <li>2 tablespoons olive oil, divided</li>
              <li>1-3/4 cups sliced fresh mushrooms</li>
              <li>1 medium onion, chopped</li>
              <li>1 package (17.3 ounces) frozen puff pastry, thawed</li>
              <li>1 large egg, lightly beaten</li>
            </ul>
          </div>
          <div className='directions card-body'>
            {/* {directions} */}
            <h3>Directions:</h3>
            <p>
              Sprinkle steaks with 1/2 teaspoon salt and 1/4 teaspoon pepper. In
              a large skillet, brown steaks in 1 tablespoon oil for 2-3 minutes
              on each side. Remove from skillet and refrigerate until chilled.
              In the same skillet, saute mushrooms and onion in remaining oil
              until tender. Stir in remaining salt and pepper; cool to room
              temperature. Preheat oven to 425°. On a lightly floured surface,
              roll each puff pastry sheet into a 14x9-1/2-in. rectangle. Cut
              into two 7-in. squares (use scraps to make decorative cutouts if
              desired). Place a steak in the center of each square; top with
              mushroom mixture. Lightly brush pastry edges with water. Bring
              opposite corners of pastry over steak; pinch seams to seal
              tightly. Place in a greased 15x10x1-in. baking pan. Cut four small
              slits in top of pastry. Arrange cutouts over top if desired. Brush
              with egg. Bake 25-30 minutes or until pastry is golden brown and
              meat reaches desired doneness (for medium-rare, a thermometer
              should read 135°; medium, 140°; medium-well, 145°).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Lunch;
