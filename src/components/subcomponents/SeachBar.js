import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

const SearchBar = (props) => {
  return (
    <div>
      <div>
        <InputGroup className="mb-3" style={style.input}>
          <FormControl
            placeholder="Ex: pikachu"
            aria-label="Ex: pikachu"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary">
            <BsSearch size="2em" />
          </Button>
        </InputGroup>
      </div>
    </div>
  );
};

const style = {
  input: {
    width: "400px",
    margin: "auto",
  },
};
export default SearchBar;
