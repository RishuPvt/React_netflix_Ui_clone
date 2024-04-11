import React from 'react'
import "./App.css";
function section2({url,parachange,titlechange}) {
  return (
    <>
    <div className='second flex justify-center'>
    <div className='first flex items-center justify-center m-6'>
        <div className='img-second relative'>
        <img className='' src={url} alt='image'>
        </img>
        </div>
        <div className='txt-first p-8 relative'>
            <h2 className='font-bold'>{titlechange}</h2>
            <p className='.span font-normal'>{parachange}</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default section2