import React from 'react'

const GifGridItem = ({title, url}) => {


    //console.log({url, title});

  return (
    <div className='card animate__animated animate__backInDown'>
       <img src = {url} alt = {title} />
       <p>{ title }</p>
    </div>
  )
}

export default GifGridItem;