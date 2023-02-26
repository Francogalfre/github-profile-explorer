// React
import React, { useContext, useState } from "react";

// Styled Components
import { Form, Input, Button, Title, Error } from "./_Styled";

// Icons
import { AiOutlineSearch } from "react-icons/ai";

// Context
import { ProfileContext } from "../../context/profileContext";

const Search = () => {
  const { setKeyword } = useContext(ProfileContext);

  const [search, setSearch] = useState("");
  const [error, setError] = useState("")

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if(search.startsWith(" ")) {
      setError("User cannot start with a space")
      return
    }

    if(search === "") {
      setError("You can't search for an empty username.")
      return;
    }

    if(search.length > 100) {
      setError("The user has a max of 100 characters")
      return;
    }

    setError("")
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
          style={error !== "" ? {border: '1px solid #ED4337'} : {}}
          onChange={handleChange}
          type="text"
          placeholder="Francogalfre..."
          value={search}
        />
        <Button type="submit" style={error !== "" ? {border: '1px solid #ED4337'} : {}}>
          <AiOutlineSearch />
        </Button>
      </Form>

      {
        error &&
        <Error>{error}</Error>
      }
    </>
  );
};

export default Search;
