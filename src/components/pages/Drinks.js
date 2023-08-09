import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { client } from '../../client';
import image from '../../assets/drinks.jpg';
import { BsArrowDownCircle } from 'react-icons/bs';

function Drinks() {
  const [drinksMenu, setDrinksMenu] = useState([]);

  const cleanUpDrinksMenu = (rawData) => {
    const cleanDrinksMenu = rawData.map((data) => {
      const { sys, fields } = data;
      const { id } = sys;
      const Title = fields.title;
      const Description = fields.description;
      const Category = fields.category; 
      const Item = fields.item;
      const Price = fields.price;
      const updatedDrinksMenu = { id, Title, Item, Category, Description, Price };
      return updatedDrinksMenu;
    });
    setDrinksMenu(cleanDrinksMenu);
  };

  // function to get data from contentful
  const getDrinksMenu = async () => {
    try {
     const response = await client.getEntries({
        content_type: 'menu',
        limit: 1000,
      });
      const responseData = response.items;
      cleanUpDrinksMenu(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDrinksMenu();
  }, []);

  const renderDrinksInSection = (category) => {
    return drinksMenu.map((drinks) => {
      if (drinks.Category === category) {
        return (
         <div key={drinks.id}className='item'>
          <div className="descriptionDiv">
           <h3 className='sectionItem'>{drinks.Item}</h3>
           <p className='itemDescription'>{drinks.Description}</p>
          </div>
           {drinks.Price !== undefined ? (<span className="price">&#8358; {drinks.Price}</span>) :(<></>)}
         </div>
        );
      } else {
        return null;
      }
    });
  };
// scroll function
  const ScrollToTopButton = () => {
  return (
    <Link to="top" smooth={true} duration={100}>
     <BsArrowDownCircle size={25}/>
    </Link>
  );
};
  return (
    <>
      <img src={image} alt="three cocktail drinks" className='banner-image' />
      <main className='background'>
         <section>
          <h2 className='sectionHeading'>Water</h2> 
          {renderDrinksInSection('water').reverse()}
        </section>
        <section>
          <h2 className='sectionHeading'>Tea/Coffee</h2>
          {renderDrinksInSection('teacoffee').reverse()}
        </section>
        <section>
          <h2 className='sectionHeading'>Soda</h2>
          {renderDrinksInSection('soda').reverse()}
        </section>
        <section>
          <h2 className='sectionHeading'>MilkShake</h2>
          {renderDrinksInSection('milkshake').reverse()}
        </section>
        <section>
          <h2 className='sectionHeading'>Smoothies</h2>
          {renderDrinksInSection('smoothies').reverse()}
        </section>
        <section>
          <h2 className='sectionHeading'>Packaged Juice</h2>
          {renderDrinksInSection('packagedjuice').reverse()}
        </section>
        <section>
          <h2 className='sectionHeading'>White Wine</h2>
          {renderDrinksInSection('whitewine').reverse()}
        </section>
        <section>
          <h2 className='sectionHeading'>Red Wine</h2>
          {renderDrinksInSection('redwine').reverse()}
        </section>
        <section>
         <h2 className='sectionHeading'>Non Alcoholic Wine</h2>
         {renderDrinksInSection('nonalcoholicwine').reverse()}
        </section>
        <section>
         <h2 className='sectionHeading'>Rose </h2>
         {renderDrinksInSection('rose').reverse()}
        </section>
        <section>
         <h2 className='sectionHeading'>Liquor</h2>
         {renderDrinksInSection('liquor').reverse()}
        </section>
        <section>
         <h2 className='sectionHeading'>Vodka</h2>
         {renderDrinksInSection('vodka').reverse()}
        </section>
        <section>
         <h2 className='sectionHeading'>Rum</h2>
         {renderDrinksInSection('rum').reverse()}
        </section>
        <section>
         <h2 className='sectionHeading'>Gin</h2>
         {renderDrinksInSection('gin').reverse()}
        </section>
        <section>
         <h2 className='sectionHeading'>Energy Drinks</h2>
         {renderDrinksInSection('energydrinks').reverse()}
        </section>
        <section>
         <h2 className='sectionHeading'>Shots</h2>
         {renderDrinksInSection('shots').reverse()}
        </section>
        <section>
         <h2 className='sectionHeading'>Mocktails</h2>
         {renderDrinksInSection('mocktails').reverse()}
        </section>
        <section>
         <h2 className='sectionHeading'>Cocktails</h2>
         {renderDrinksInSection('cocktails').reverse()}
        </section>
        <section>
         <h2 className='sectionHeading'>Beer</h2>
         {renderDrinksInSection('beer').reverse()}
        </section>
        <section>
         <h2 className='sectionHeading'>Extras</h2>
         {renderDrinksInSection('extrasdrinks').reverse()}
        </section>
       <div className="scroll"><ScrollToTopButton/></div>
      </main>
    </>
  );
}

export default Drinks;
