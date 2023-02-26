// React
import React, { useContext, useState } from "react";

// Styled Components
import { Form, Input, Button, Title, Error } from "./_Styled";

// Icons
import { AiOutlineSearch } from "react-icons/ai";

// Context
import { ProfileContext } from "../../context/profileContext";

const Search = () => {
  const { setKeyword, error, isError } = useContext(ProfileContext);
  const [search, setSearch] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setKeyword(search);
  };

  const handleChange = (evt) => {
    setSearch(evt.target.value);
  };

  return (
    <>
      <Title>GitFinder</Title>

      <Form onSubmit={handleSubmit}>
        <Input
          style={isError && {border: '1px solid red'}}
          onChange={handleChange}
          type="text"
          placeholder="Francogalfre..."
          value={search}
        />
        <Button type="submit" style={isError && {border: '1px solid red'}}>
          <AiOutlineSearch />
        </Button>
      </Form>

      {
        isError &&
        <Error>{error}</Error>
      }
    </>
  );
};

export default Search;
