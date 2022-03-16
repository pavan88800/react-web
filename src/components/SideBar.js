import React from 'react'
import Data from '../data.json'
import RangeControl from './RangeControl'

const SideBar = () => {
  return (
    <div className='container'>
      <aside className='container__sidebar'>
        <nav>
          <ul>
            <li>ButterFly</li>
            <li>Cars</li>
            <li>Cellphones</li>
            <li>Office</li>
          </ul>
        </nav>
        <RangeControl />
      </aside>

      <div className='container__main'>
        {Data.Butterfly.map(item => (
          <div>
            <img
              alt='img'
              className='ml-30 mt-20'
              src={item.image}
              width={350}
              height={300}
            />
            <h3 style={{ textAlign: 'center' }}>{item.text}</h3>
          </div>
        ))}
        {/* <div>
            <img
              alt='img'
              className='ml-30 mt-20'
              src={item.image}
              width={350}
              height={300}
            />
            <h3 style={{ textAlign: 'center' }}>{item.text}</h3>
          </div> */}
        {/* <img
          alt='img'
          className='ml-30 mt-20'
          src='https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU='
          width={350}
          height={300}
        />

        <img
          alt='img'
          className='ml-30 mt-20'
          src='https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU='
          width={350}
          height={300}
        />

        <img
          alt='img'
          className='ml-30 mt-20'
          src='https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU='
          width={350}
          height={300}
        />
        <img
          alt='img'
          className='ml-30 mt-20'
          src='https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU='
          width={350}
          height={300}
        />

        <img
          alt='img'
          className='ml-30 mt-20'
          src='https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU='
          width={350}
          height={300}
        />

        <img
          alt='img'
          className='ml-30 mt-20'
          src='https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU='
          width={350}
          height={300}
        />

        <img
          alt='img'
          className='ml-30 mt-20'
          src='https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU='
          width={350}
          height={300}
        />
        <img
          alt='img'
          className='ml-30 mt-20'
          src='https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU='
          width={350}
          height={300}
        /> */}
      </div>
    </div>
  )
}

export default SideBar
