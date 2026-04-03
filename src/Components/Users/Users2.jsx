import React, { use } from 'react';

const Users2 = ({userPromise}) => {
    const userData = use(userPromise)
    
    
    return (
        <div>
             {
                userData.map(u => <h3>{u.name}</h3>)
             }
        </div>
    );
};

export default Users2;