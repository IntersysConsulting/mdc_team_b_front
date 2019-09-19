import React from 'react';
import {Form, InputGroup} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import search from './search.svg';
import './search-bar.css';

const SearchBar = (props) => {
  const searchDownHandler = () => {
    alert('This will trigger a search');
  };

  const filterDownHandler = () => {
    alert('This will show filter/sort modal');
  };

  return (
    <div>
      <InputGroup className="justify-content-center">
        <Form.Control className="bar" type="text" placeholder="Search"/>
        <InputGroup.Append>
          <Button className="filter" onClick={filterDownHandler}>Filter</Button>
        </InputGroup.Append>
        <InputGroup.Append>
          <Button className="search" onClick={searchDownHandler}>
            <img src={search} class="searchIcon"/>
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
