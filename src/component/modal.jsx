import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import axios from "axios";
import qs from "qs";

export default function ModalAdd(style) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleAdd = async () => {
    setLoading(true);
    const url = "http://localhost:2005/";
    const createBook = await axios.post(`${url}add-book`, data)
      .then((res) => {
        onClose();
        setData({});
        console.log(res, "res");
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Button onClick={onOpen} {...style} color={"#17594A"}>
        Add Book
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Book</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                placeholder="Title"
                onChange={(e) => setData({ ...data, title: e.target.value })}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Image</FormLabel>
              <Input
                placeholder="Image"
                onChange={(e) => setData({ ...data, image: e.target.value })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Author</FormLabel>
              <Input
                placeholder="Author"
                onChange={(e) => setData({ ...data, author: e.target.value })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Category</FormLabel>
              <Input
                placeholder="Category"
                onChange={(e) => setData({ ...data, category: e.target.value })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Tahun Terbit</FormLabel>
              <Input
                placeholder="Tahun Terbit"
                onChange={(e) =>
                  setData({ ...data, thn_terbit: e.target.value })
                }
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Stock</FormLabel>
              <Input
                placeholder="Stock"
                onChange={(e) => setData({ ...data, stock: e.target.value })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input
                placeholder="Price"
                onChange={(e) => setData({ ...data, price: e.target.value })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              isLoading={loading}
              disabled={loading}
              loadingText="Saving..."
              colorScheme="blue"
              mr={3}
              onClick={() => handleAdd()}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
