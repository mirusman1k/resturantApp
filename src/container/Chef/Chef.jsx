import React from 'react';
import {images} from "../../constants";
import{SubHeading} from "../../components"

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef'/>
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's word"/>
      <h1 className='headtext__cormorant'>What we belive in</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='qute' />
          <p className='p__opensans'>if you are a chef, no matter how good a chef you are,</p>
        </div>
        <p className='p__opensans'> it's not good cooking for yourself; the joy is in cooking for others - it's the same with music</p>
      
      </div>
      <div className='app__chef-sign'>
        <p>Mr. Karma</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt='sign' />
      </div>
    </div>
  </div>
);

export default Chef;
