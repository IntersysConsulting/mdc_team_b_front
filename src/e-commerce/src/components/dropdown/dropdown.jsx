import React from 'react';

const Dropdown = (props) => {    
    return(
        <select>
            {props.list.map((item) => (
                <option  key={item.id}>
                    {item.title}
                </option>
            ))}
        </select>
    )
}

export default Dropdown;


{/*
    const location = 
    [
        {
            id: 0,
            title: 'New York',
        },
        {
            id: 1,
            title: 'Dublin',
        },
        {
            id: 2,
            title: 'California',
        }
    ]

    <Dropdonw headerTitle='TEST' list={location}></Dropdonw>

*/}