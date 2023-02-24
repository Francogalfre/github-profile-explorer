// React
import React, { useContext, useState } from "react";

// Styled Components
import { Form, Input, Button, Title } from "./_Styled";

// Icons
import { AiOutlineSearch } from "react-icons/ai";

// Context
import { ProfileContext } from "../../context/profileContext";

const Search = () => {
  const { setKeyword } = useContext(ProfileContext);
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
          onChange={handleChange}
          type="text"
          placeholder="Francogalfre..."
          value={search}
        />
        <Button type="submit">
          <AiOutlineSearch />
        </Button>
      </Form>
    </>
  );
};

export default Search;
