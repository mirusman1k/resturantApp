import React from 'react';
import {images} from '../../constants'
import './Header.css';
import  {SubHeading} from "../../components";

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
   <div className='app__wrapper_info'>

   <SubHeading title="chase the new flavour" />
   <h1 className='app__header-h1'> The Best Dining You Can Experience</h1>
<p className='p__opensans' style={{margin:'2rem 0'}}>
GERICHT gives restaurateurs invaluable insights into business operations 
and sales. When integrated with your 

restaurant POS, you can access a full suite of solutions 
like server performance tracking, inventory management, labor and 

food cost tracking, revenue management, and more.</p>
<button type='button' className='custom__button'>Explore Menu</button>
   </div>

   <div className='app__wrapper_img'>
  <img src={images.welcome} alt='welcome'/>
   </div>
  </div>
);

export default Header;
