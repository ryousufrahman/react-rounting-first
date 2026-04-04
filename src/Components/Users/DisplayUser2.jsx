import React, { use, useState } from 'react';
import Details2 from './Details2';

const DisplayUser2 = ({u , promise}) => {
    const [show , setShow] = useState(false)
    const dataDetails = use(promise)
    return (
        <div>
            <p>{u.name}</p>
            <button onClick={()=>setShow(!show)} className='bg-amber-300'>{show ? 'hide' : 'show'}</button>
            {
                show? <Details2 dataDetails={dataDetails}></Details2> : null
            }
        </div>
    );
};

export default DisplayUser2;