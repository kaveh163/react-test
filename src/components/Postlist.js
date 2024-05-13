import React from "react";
export default function Postlist ({users }){
    return(
        <div>
            <ul>
                {users.map((user, index) => {
                    return <li key={user.id}>{`${user.id}: ${user.name}`}</li> 
                })}
            </ul>

        </div>
    )
}