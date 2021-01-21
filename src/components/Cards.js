import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our fresh Fruits and Vegetables everyday!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/imageB.jpg'
              text='We have different types of fruits for you at a friendly price according to your needs'
              label='Fruits'
              path='/fruits'
            />
            <CardItem
              src='/images/imageC.jpg'
              text='Vegetables of different kinds at a very friendly price according to your needs'
              label='Vegetables'
              path='/vegetables'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/apple.jpeg'
              price='@ Ksh.40 each'
              text='Fresh and sweet'
              label='Apples'
              path='/fruits'
            />
            <CardItem
              src='/images/avoca.jpg'
              price='@ Ksh.50 each'
              text='Fresh and sweet'
              label='Avocado'
              path='/fruits'
            />
            <CardItem
              src='/images/grape.jpg'
              price='@ Ksh.150 per kg'
              text='Fruits and vegetables'
              label='Grapes'
              path='/fruits'
            />
          </ul>
          
          <ul className='cards__items'>
            <CardItem
              src='/images/pawpaw.jpg'
              price='@ Ksh.80 each'
              text='Fresh and sweet pawpaw'
              label='Pawpaw'
              path='/fruits'
            />
            <CardItem
              src='/images/guava.jpg'
              price='@ Ksh.5 per kg'
              text='Fresh and sweet guavas'
              label='Guavas'
              path='/fruits'
            />
            <CardItem
              src='/images/melon.jpg'
              price='@ Ksh.300 each'
              text='Fresh and sweet water melon'
              label='Water melon'
              path='/fruits'
            />
          </ul>
          
          <ul className='cards__items'>
            <CardItem
              src='./images/imageD.jpg'
              text='Fresh fruveggies'
              label='Fruveggies'
              path='/all'
            />
            <CardItem
              src='/images/imageE.jpg'
              text='Fruits and vegetables at an affordable price'
              label='Fruveggies'
              path='/all'
            />
            <CardItem
              src='/images/imageF.jpg'
              text='Always fresh and sweet'
              label='Fruveggies'
              path='/all'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='/images/broco.jpg'
              price='@ Ksh.200 each'
              text='Fresh and sweet Brocoli'
              label='Brocolli'
              path='/vegetables'
            />
            <CardItem
              src='/images/onion.jpg'
              price='@ Ksh.150 each'
              text='Fresh onions available'
              label='Onions'
              path='/vegetables'
            />
            <CardItem
              src='/images/tomato.jpeg'
              price='@ Ksh.150 each'
              text='Fresh tomatoes'
              label='Tomatoes'
              path='/vegetables'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='/images/cucu.jpg'
              price='@ Ksh.120 each'
              text='Fresh cucumbers available'
              label='Cucumber'
              path='/vegetables'
            />
            <CardItem
              src='/images/kales.jpg'
              price='@ Ksh.60 each'
              text='Fresh kales available'
              label='Kales'
              path='/vegetables'
            />
            <CardItem
              src='/images/spinach.jpg'
              price='@ Ksh.70 each'
              text='Fresh spinach available'
              label='Spinach'
              path='/vegetables'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;