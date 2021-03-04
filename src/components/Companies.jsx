import React, { useEffect, useState } from 'react'
import { Company } from './Company'
import { Icon } from '../Icon'
import { Panel } from './Panel'
import { PanelItem } from './PanelItem'

export function Companies() {
  const [companiesAreLoaded, setCompaniesAreLoaded] = useState(false)
  const [companies, setCompanies] = useState([])

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
      <Panel
        title="Companies"
        headerAction={
          <a href="#new">
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
