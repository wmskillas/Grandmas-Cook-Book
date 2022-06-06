import React from "react";
import PageContent from "./PageContent";
import AddRecipe from "./AddRecipe";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
import { capitalizeFirstLetter } from "../utils/helpers";
import LogIn from "./LoginForm";

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "Add recipe":
        return <AddRecipe />;
      case "Breakfast":
        return <Breakfast />;
      case "Lunch":
        return <Lunch />;
      case "Dinner":
        return <Dinner />;
      case "Login":
        return <LogIn />;
      default:
        return <LogIn />;
    }
  };

  return (
    <section>
      <h2 id='pagename'>{capitalizeFirstLetter(currentPage.name)}</h2>
      <div className='content'>
      <PageContent>{renderPage()}</PageContent>
      </div>
    </section>
  );
}
export default Page;
