import React, { useEffect, useState } from 'react'
import { Company } from './Company'
import { Icon } from '../Icon'
import { Panel } from './Panel'
import { PanelItem } from './PanelItem'

function NewCompanyModal() {
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')

  function submitNewCompany() {
    event.preventDefault()
    console.log(`Make a new company: ${name}, ${url}, ${description}`)
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
        </p>
      </form>
    </div>
  )
}

export function Companies() {
  const [companiesAreLoaded, setCompaniesAreLoaded] = useState(false)
  const [companies, setCompanies] = useState([])
  const [userPressedNew, setUserPressedNew] = useState(true)

  useEffect(async function () {
    const response = await fetch('http://localhost:5000/api/Companies')
    const json = await response.json()

    setCompanies(json)
    setCompaniesAreLoaded(true)
  }, [])

  if (!companiesAreLoaded) {
    return <div>Loading...</div>
  }

  return (
    <main className="companies">
      {userPressedNew ? <NewCompanyModal /> : <></>}
      <Panel
        title="Companies"
        headerAction={
          <a
            href="#new"
            onClick={function (event) {
              event.preventDefault()
              setUserPressedNew(true)
            }}
          >
            <Icon name="plus" />
          </a>
        }
      >
        {companies.map(function (company) {
          return (
            <PanelItem key={company.id}>
              <Company
                name={company.companyName}
                url={company.url}
                description={company.description}
              ></Company>
            </PanelItem>
          )
        })}
      </Panel>
    </main>
  )
}
