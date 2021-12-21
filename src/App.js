import logo from "./logo.svg";
import "./App.css";
import { useAppApiClient } from "./hooks/useAppApiClient";
import { useEffect, useState } from "react";
import BlogList from "./components/BlogList";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Button, Modal } from "@material-ui/core";
import styled from "styled-components";

function App() {
  const api = useAppApiClient();
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({
    title: "",
    body: "",
    author: "",
  });
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const fetchData = async () => {
    const rs = await api.getBlogs();
    setBlogs(rs);
  };
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    const data = await api.postNewBlog(form);
    data && fetchData();
  };
  return (
    <div className="App">
      <header></header>
      <BlogList list={blogs} />
      <Fab onClick={() => setOpenModal(true)} color="primary">
        <AddIcon />
      </Fab>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Form onSubmit={onSubmit}>
          <input
            onChange={onChange}
            value={form.title}
            name="title"
            placeholder="Article Title"
          />
          <textarea
            onChange={onChange}
            value={form.body}
            name="body"
            label="body"
            placeholder="Article Body"
          />
          <input
            onChange={onChange}
            value={form.author}
            name="author"
            label="author"
            placeholder="Article Author"
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Form>
      </Modal>
    </div>
  );
}
const Form = styled.form`
  margin: auto;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export default App;
