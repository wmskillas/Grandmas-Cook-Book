import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../utils/helpers";
import Icon from "../assets/images/GCBgreen.png";

function Nav(props) {
  const { pages = [], setCurrentPage, currentPage } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  return (
    <section className='fullheader'>
      <nav>
        <div className='header'>
          <img className='icon' alt='grandmas-cook-book.img' src={Icon}></img>

          <div className='HeaderWords'>
            <h2 className='h2el'>
              Welcome to the one and only cook book you will ever need!
            </h2>
            <h2 className='h2el2'>
              Like Grandma always says "It takes a village"
            </h2>
          </div>
          <br></br>
          <img className='icon' alt='grandmas-cook-book.img' src={Icon}></img>
        </div>
        <br></br>

        <div className='pagelist'>
          <ul className='pagebtn'>
            {pages.map((Page) => (
              <li
                className={`  ${currentPage.name === Page.name && "navActive"}`}
                key={Page.name}
              >
                <button
                  className='mx-5 d-flex'
                  onClick={() => setCurrentPage(Page)}
                >
                  {capitalizeFirstLetter(Page.name)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </section>
  );
}
export default Nav;
