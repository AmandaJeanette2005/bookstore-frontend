import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import "./admin.css";
import ModalAdd from "../../component/modal";
import { Button, useDisclosure } from "@chakra-ui/react";
import DrawerEdit from "../../component/drawer";

const ProductFantasi = () => {
  const url = "http://localhost:2005";

  const [books, setBooks] = useState([]);
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [dataEdit, setDataEdit] = useState({});
  const btnRef = useReducer();

  const fetchFantasiBooks = async () => {
    const books = await axios.get(`${url}/books/1`);
    setBooks([...books.data]);
  };

  const handleDelete = (data) => {
    axios.delete(`${url}/books/${data.id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchFantasiBooks();
  }, []);

  const handleEdit = (data) => {
    onOpen();
    setDataEdit(data);
    console.log(data, "dt edit");
  };

  return (
    <>
      <h1>Fantasi Books Page</h1>
      <ModalAdd my={30} />
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>title</th>
            <th>image</th>
            <th>Author</th>
            <th>Tahun Terbit</th>
            <th>Description</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Create At</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {books.map((x, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{x.title}</td>
              <td>
                <img src={`${x.image}`} className="img-adm" />
              </td>
              <td>{x.author}</td>
              <td>{x.thn_terbit}</td>
              <td>{x.description}</td>
              <td>{x.stock}</td>
              <td>{x.price}</td>
              <td>{x.createdAt}</td>
              <td>
                <Button
                  ref={btnRef}
                  colorScheme="green"
                  onClick={() => handleEdit(x)}
                >
                  Edit
                </Button>
                <button className="button-4" onClick={() => handleDelete(x)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <DrawerEdit
        onClose={onClose}
        onOpen={onOpen}
        isOpen={isOpen}
        setDataEdit={setDataEdit}
        dataEdit={dataEdit}
      />
    </>
  );
};

export default ProductFantasi;
