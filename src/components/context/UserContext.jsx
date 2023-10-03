import React, { useState } from 'react'
export const UserDataContext = React.createContext(null)

function UserContext({children}) {
    const [data,setData] = useState([
        {
            title:'Feedbacks',
            body:'Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .',
            time:'5 days ago'
        },
        {
            title:'Weely Task',
            body:'Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .',
            time:'2 weeks ago'
        },
        {
            title:'Lyrics',
            body:'Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .',
            time:'3 weeks ago'
        },
        {
            title:'Lorem',
            body:'Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .',
            time:'2 days ago'
        }
    ])
  return <UserDataContext.Provider value={{data,setData}}>
    {children}
  </UserDataContext.Provider>
}

export default UserContext