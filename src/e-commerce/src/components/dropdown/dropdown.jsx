import React, {useState} from 'react';

const Dropdown = (props) => {    
    const [ddItem, setDditem] = useState('')

    return(
        <div className="dd-wrapper">
            <div className="dd-header">
                    <select className='dd-list' name={props.title}>
                        {props.list.map((item) => (
                            <option  className='dd-list-item' key={item.id}>
                                {item.title}
                            </option>
                        ))}
                    </select>
            </div>
        </div>
    )
}

export default Dropdown;


{/*
    const location = 
    [
        {
            id: 0,
            title: 'New York',
            selected: false,
            key: 'location'
        },
        {
            id: 1,
            title: 'Dublin',
            selected: false,
            key: 'location'
        },
        {
            id: 2,
            title: 'California',
            selected: false,
            key: 'location'
        }
    ]

    <Dropdonw headerTitle='TEST' list={location}></Dropdonw>

*/}