import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './admin.css'

const ProductRomance = () => {
    const url = 'http://localhost:2005'

    const [books, setBooks] = useState([])
  
      const fetchRomanceBooks = async()=>{
        const books = await axios.get(`${url}/books/2`)
        console.log(books.data,'slsk')
        setBooks(books.data)
    }
  
      useEffect(()=>{
        fetchRomanceBooks()
      },[])
  return (
    <>
    <h1>Romance Books Page</h1>

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
    {books.map((x, index) =>(
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{x.title}</td>
            <td><img src={`${x.image}`} className='img-adm'/></td>
            <td>{x.author}</td>
            <td>{x.thn_terbit}</td>
            <td>{x.description}</td>
            <td>{x.stock}</td>
            <td>{x.price}</td>
            <td>{x.createdAt}</td>
            <td>
                <button className="button-3">Edit</button>
                <button className="button-4">Delete</button>
            </td>
        </tr>
    ))

    }
  </tbody>
</table>
    </>
  )
}

export default ProductRomance