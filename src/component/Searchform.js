import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";

const Searchform = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();
  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_NAME", payload: { keyword } });
  };
  return (
    <div>
      <Form className="search-form" onSubmit={searchByName}>
        <Form.Control
          placeholder="이름"
          onChange={(event) => setKeyword(event.target.value)}
        />
        <Button className="search-button" variant="primary" type="submit">
          찾기
        </Button>
      </Form>
    </div>
  );
};

export default Searchform;
