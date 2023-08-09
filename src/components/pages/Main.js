import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { client } from '../../client';
import image from '../../assets/pasta.jpg'
import { BsArrowDownCircle } from 'react-icons/bs';

function Main() {
     
  const [mainMenu, setMainMenu] = useState([]);

  const cleanUpMainMenu = (rawData) => {
  const cleanMainMenu = rawData.map((data) => {
      const { sys, fields } = data;
      const { id } = sys;
      const Title = fields.title;
      const Description = fields.description;
      const Category = fields.category;
      const Item = fields.item;
      const Price = fields.price;
      const updatedMainMenu = { id, Title, Item, Category, Description, Price };
      return updatedMainMenu;
    });
    setMainMenu(cleanMainMenu);
   
  };

  // function to get data from contentful
   const getMainMenu = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'menu',
        limit: 1000, 
      });
      const responseData = response.items;
      cleanUpMainMenu(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setMainMenu(getMainMenu);
  }, [mainMenu]);

    const renderMainInSection = (category) => {
    return mainMenu.map((main) => {
     if (main.Category === category) {
        return (
         <div key={main.id}className='item'>
          <div className="descriptionDiv">
           <h3 className='sectionItem'>{main.Item}</h3>
           <p className='itemDescription'>{main.Description}</p>
          </div>
           <span className="price"> &#8358; {main.Price}</span>  
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
     <img src={image} alt="plate of pasta" className='banner-image'/>
     <main className='background'>
      <section>
       <h2 className='sectionHeading'>BreakFast</h2> 
       {renderMainInSection('breakfast').reverse()}
       </section>
      <section>
       <h2 className='sectionHeading'>Starter</h2> 
       {renderMainInSection('starter').reverse()}
       </section>
      <section>
       <h2 className='sectionHeading'>Pepper Soup</h2> 
       {renderMainInSection('peppersoup').reverse()}
      </section>
      <section>
       <h2 className='sectionHeading'>Salad</h2> 
       {renderMainInSection('salad').reverse()}
      </section>
      <section>
       <h2 className='sectionHeading'>Rice</h2> 
       {renderMainInSection('rice').reverse()}
      </section>
      <section>
       <h2 className='sectionHeading'>Pasta</h2> 
       {renderMainInSection('pasta').reverse()}
      </section>
      <section>
       <h2 className='sectionHeading'>Swallow</h2> 
       {renderMainInSection('swallow').reverse()}
      </section>
      <section>
       <h2 className='sectionHeading'>French Fries</h2> 
       {renderMainInSection('frenchfries').reverse()}
      </section>
      <section>
       <h2 className='sectionHeading'>Chicken</h2> 
       {renderMainInSection('chicken').reverse()}
      </section>
      <section>
       <h2 className='sectionHeading'>Beef</h2> 
       {renderMainInSection('beef').reverse()}
      </section>
      <section>
       <h2 className='sectionHeading'>Fish</h2> 
       {renderMainInSection('fish').reverse()}
      </section>
      <section>
       <h2 className='sectionHeading'>Sea Food</h2> 
       {renderMainInSection('seafood').reverse()}
      </section>
      <section>
       <h2 className='sectionHeading'>Vegeterian</h2> 
       {renderMainInSection('vegeterian').reverse()}
      </section>
      <section>
       <h2 className='sectionHeading'>Extras</h2> 
       {renderMainInSection('extrasmain').reverse()}
      </section> 
      <div className="scroll"><ScrollToTopButton/></div>
     </main>     
    </>
  );
}

export default Main;