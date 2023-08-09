import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { client } from '../../client';
import image from '../../assets/pizza.jpg'
import { BsArrowDownCircle } from 'react-icons/bs';

function Dessert() {
  const [dessertMenu, setDessertMenu] = useState([]);

  const cleanUpDessertMenu = (rawData) => {
  const cleanDessertMenu = rawData.map((data) => {
      const { sys, fields } = data;
      const { id } = sys;
      const Title = fields.title;
      const Description = fields.description;
      const Category = fields.category;
      const Item = fields.item;
      const Price = fields.price;
      const updatedDessertMenu = { id, Title, Item, Category, Description, Price };
       console.log(data.Item)
      return updatedDessertMenu;
    });
    setDessertMenu(cleanDessertMenu);
   
  };

  // function to get data from contentful
  const getDessertMenu = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'menu',
        limit: 1000, 
      });
      const responseData = response.items;
      cleanUpDessertMenu(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDessertMenu();
  }, []);

    const renderDessertInSection = (category) => {
    return dessertMenu.map((dessert) => {
      if (dessert.Category === category) {
        return (
         <div key={dessert.id}className='item'>
          <div className="descriptionDiv">
           <h3 className='sectionItem'>{dessert.Item}</h3>
           <p className='itemDescription'>{dessert.Description}</p>
          </div>
           <span className="price"> &#8358; {dessert.Price}</span>  
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
      <img src={image} alt="pizza" className='banner-image'/>
     <main className='background'>
      <section>
       <h2 className='sectionHeading'>Pastry</h2> 
       {renderDessertInSection('pastry').reverse()}
      </section>
      <section>
       <h2 className='sectionHeading'>Pizza</h2> 
        {renderDessertInSection('pizza').reverse()}
      </section>
      <section>
       <h2 className='sectionHeading'>Finger Food</h2> 
        {renderDessertInSection('fingerfood').reverse()}
      </section>
      <section>
       <h2 className='sectionHeading'>Shawarma</h2> 
        {renderDessertInSection('shawarma').reverse()}
      </section>
      <section>
       <h2 className='sectionHeading'>Grill</h2> 
        {renderDessertInSection('grill').reverse()}
      </section> 
      <section>
       <h2 className='sectionHeading'id="special">CBAE's Special Platter
only on Reservation</h2> 
        {renderDessertInSection('specials').reverse()}
      </section> 
      <div className="scroll"><ScrollToTopButton/></div> 
     </main>     
    </>
  );
}

export default Dessert;
