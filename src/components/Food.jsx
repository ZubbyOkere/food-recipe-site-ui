import React, { useState } from 'react'
import { data } from '../Data/Data'

const Food = () => {
  const [foods, setFoods] = useState(data)

  // filter by category
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category
      })
    )
  }

  // filter by price

  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price
      })
    )
  }

  return (
    <div className='max-w-[1640} m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top Rated Menu Items
      </h1>
      {/* filter row */}
      <div className='flex flex-col justify-between lg:flex-row'>
        {/* filter type */}
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justify-between flex-wrap'>
            <button
              className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              onClick={() => setFoods(data)}
            >
              All
            </button>
            <button
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              onClick={() => filterType('burger')}
            >
              Burgers
            </button>
            <button
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              onClick={() => filterType('pizza')}
            >
              Pizza
            </button>
            <button
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              onClick={() => filterType('salad')}
            >
              Salad
            </button>
            <button
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              onClick={() => filterType('chicken')}
            >
              Chicken
            </button>
          </div>
        </div>
        {/* filter price */}
        <div>
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex justify-between max-w-[290px] w-full'>
            <button
              className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              onClick={() => filterPrice('$')}
            >
              $
            </button>
            <button
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              onClick={() => filterPrice('$$')}
            >
              $$
            </button>
            <button
              onClick={() => filterPrice('$$$')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice('$$$$')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div
            key={index}
            className='border shadow-2xl hover:scale-105 duration-300  rounded-t-lg rounded-lg'
          >
            <img
              className='w-full h-[200px]  object-cover rounded-t-lg'
              src={item.image}
              alt={item.name}
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-orange-500 text-white p-1 rounded-full'>
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Food
