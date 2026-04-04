import React, { Suspense, use } from 'react';
import DisplayUser2 from './DisplayUser2';

const Users2 = ({userPromise}) => {
    const userData = use(userPromise)
     
     const promise = fetch(`https://jsonplaceholder.typicode.com/users/${userData.id}`).then(res => res.json())
    
    return (
        <div>
             {
                userData.map(u => <Suspense fallback={<span>loading..</span>}> <DisplayUser2 key={userData.id} u={u} promise={promise} ></DisplayUser2></Suspense> )
             }
        </div>
    );
};

export default Users2;