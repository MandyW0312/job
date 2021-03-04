import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

export function NewCompanyModal(props) {
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')
  const history = useHistory()

  async function submitNewCompany(event) {
    event.preventDefault()

    const newCompanyToSendToApi = {
      companyName: name,
      url: url,
      description: description,
    }

    await fetch('http://localhost:5000/api/Companies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCompanyToSendToApi),
    })
    history.push('/')
    props.whenDoneWithAddingCompany()
  }

  return (
    <div className="modal">
      <form className="new-company">
        <header>New Company</header>
        <p>
          <label>Name: </label>
          <input
            name="companyName"
            type="text"
            value={name}
            onChange={function (event) {
              setName(event.target.value)
            }}
          />
        </p>
        <p>
          <label>URL: </label>
          <input
            name="url"
            type="text"
            value={url}
            onChange={function (event) {
              setUrl(event.target.value)
            }}
          />
        </p>
        <p>
          <label>Description: </label>
          <input
            name="description"
            type="text"
            value={description}
            onChange={function (event) {
              setDescription(event.target.value)
            }}
          />
        </p>
        <p className="submit">
          <a href="#" onClick={submitNewCompany}>
            Submit
          </a>
          <Link to="/">Cancel</Link>
        </p>
      </form>
    </div>
  )
}
