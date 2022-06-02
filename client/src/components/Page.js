import React from 'react';
import PageContent from './PageContent';
import AddRecipe from './AddRecipe';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';
import { capitalizeFirstLetter } from '../utils/helpers';

function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'add recipe':
        return <AddRecipe />;
      case 'breakfast':
        return <Breakfast />;
      case 'lunch':
        return <Lunch />;
      case 'dinner':
        return <Dinner />;
      default:
        return <AddRecipe />;
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