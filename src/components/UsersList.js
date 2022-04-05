import React from 'react';
import UserPlate from './UserPlate';


function UsersList({data}){

    return(
        data.map(index => <UserPlate key={index.id} id={index.id} name={index.name} company={index.company.name}/>)
    )

}

export default UsersList;