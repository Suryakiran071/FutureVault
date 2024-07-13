import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destinations</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <div className="cards__items">
                    <CardItem
                    src='/Images/img-9.jpg'
                    text='Explore the Hidden Waterfall'
                    label='Adventure'
                    path='/services' />
                    <CardItem
                    src='/Images/img-8.jpg'
                    text='Feel the Hotness of the Desert'
                    label='Desert'
                    path='/services' />
                </div>
                <div className="cards__items">
                    <CardItem
                    src='/Images/img-9.jpg'
                    text='Explore the Hidden Waterfall'
                    label='Adventure'
                    path='/services' />
                    <CardItem
                    src='/Images/img-8.jpg'
                    text='Feel the Hotness of the Desert'
                    label='Desert'
                    path='/services' />
                    <CardItem
                    src='/Images/img-8.jpg'
                    text='Feel the Hotness of the Desert'
                    label='Desert'
                    path='/services' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards