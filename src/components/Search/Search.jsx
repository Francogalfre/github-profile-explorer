// React
import React, { useState } from 'react'

// Styled Components
import { Form, Input, Button } from "./_Styled"

// Icons
import { AiOutlineSearch } from "react-icons/ai"

const Search = ({ setUser }) => {
  const [search, setSearch] = useState("")

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setUser(search)
  }

  const handleChange = (evt) => {
    setSearch(evt.target.value)
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input onChange={handleChange} type="text" placeholder='Francogalfre...' value={search} />
        <Button type='submit'>
          <AiOutlineSearch />
        </Button>
      </Form>
    </>
  )
}

export default Search