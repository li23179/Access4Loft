import styles from './form.module.css'
import { useState } from 'react'
import { materialsList } from '../data/supplies_data'

const form = () => {

  const [inputValue, setInputValue] =
    useState({
      id: '',
      name: '',
      description: '',
      quantity: ''
    });

  const handleIdChange = (e) => {
    setInputValue({
      ...inputValue,
      id: e.target.value
    })
  }

  const handleNameChange = (e) => {
    setInputValue({
      ...inputValue,
      name: e.target.value
    })
  }

  const handleDescriptionChange = (e) => {
    setInputValue({
      ...inputValue,
      description: e.target.value
    })
  }

  const handleQuantityChange = (e) => {
    setInputValue({
      ...inputValue,
      quantity: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    materialsList.push()
  }

  return (
    <div>
      <form>
        <label htmlFor="id">ID :</label>
        <input onChange={handleIdChange} value={inputValue.id} type="text" placeholder='Enter item id please:' />
        <label htmlFor="name">Name :</label>
        <input onChange={handleNameChange} value={inputValue.name} type="text" placeholder='Enter item name please:' />
        <label htmlFor="description">Description :</label>
        <input onChange={handleDescriptionChange} value={inputValue.description} type="text" placeholder='Enter item description please:' />
        <label htmlFor="quantity">Quantity :</label>
        <input onChange={handleQuantityChange} value={inputValue.quantity} type="text" placeholder='Enter item quantity please:' />
        <button onSubmit={handleSubmit} type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default form
