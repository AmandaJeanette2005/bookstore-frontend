import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Button,
  FormLabel,
} from "@chakra-ui/react";
import axios from 'axios';
import qs from "qs";




export default function DrawerEdit({ isOpen, onOpen, onClose, setDataEdit, dataEdit}) {
  const btnRef = React.useRef();


  const [editedData, setEditedData] = useState({...dataEdit})

  // const dataEdit = dataEdit.id
  
  // console.log(dataEdit, "ini dataEdit lhoooooooooo")

  const handleMap = () => {
    let newData = {...dataEdit};
    setEditedData({...newData})
  }

  const updateBook = async (data) => {
    try {
        const url = "http://localhost:2005/";
        const update = await axios.put(`${url}books/${data.id}`, data);
        console.log(update, "update response")
        onClose()
    } catch (error) {
        alert(error.message)
    }
  }

  useEffect(() => {
    if (isOpen) {
    handleMap()
    }
    return () => {
    }
  }, [isOpen])
  
  console.log(dataEdit, "dataEdit drawer")
  console.log(editedData, "editedData drawer")

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Edit Books</DrawerHeader>

          <DrawerBody>
            <FormLabel>Title</FormLabel>
            <Input
              placeholder="Title"
              value={editedData.title}
              onChange={(e) => setEditedData({...editedData, title: e.target.value })}
            />
          </DrawerBody>

          <DrawerBody>
            <FormLabel>Image</FormLabel>
            <Input
              placeholder="image"
              value={editedData.image}
              onChange={(e) => setEditedData({...editedData, image: e.target.value })}
            />
          </DrawerBody>

          <DrawerBody>
            <FormLabel>Author</FormLabel>
            <Input
              placeholder="Author"
              value={editedData.author}
              onChange={(e) => setEditedData({...editedData,author: e.target.value })}
            />
          </DrawerBody>

          <DrawerBody>
            <FormLabel>Category</FormLabel>
            <Input
              placeholder="Category"
              value={editedData.category}
              onChange={(e) => setEditedData({...editedData, category: e.target.value })}
            />
          </DrawerBody>

          <DrawerBody>
            <FormLabel>Tahun Terbit</FormLabel>
            <Input 
              placeholder="Tahun Terbit"
              value={editedData.thn_terbit}
              onChange={(e) => setEditedData({...editedData,thn_terbit: e.target.value })}
            />
          </DrawerBody>

          <DrawerBody>
            <FormLabel>Stock</FormLabel>
            <Input
              placeholder="Stock"
              value={editedData.stock}
              onChange={(e) => setEditedData({...editedData,stock: e.target.value })}
            />
          </DrawerBody>

          <DrawerBody>
            <FormLabel>Price</FormLabel>
            <Input
            type={"number"}
              placeholder="Price"
              value={editedData.price}
              onChange={(e) => setEditedData({...editedData,price: e.target.valueAsNumber })}
            />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="green" onClick={()=> updateBook(editedData)}>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
