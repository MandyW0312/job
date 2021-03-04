import React, { useEffect, useState } from 'react'
import { Company } from './Company'
import { Icon } from '../Icon'
import { Panel } from './Panel'
import { PanelItem } from './PanelItem'
import { NewCompanyModal } from './NewCompanyModal'
import { Link, Route, Switch } from 'react-router-dom'

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

  async function clearsTheUserPressedNewAndReloadsTheCompanies() {
    const response = await fetch('http://localhost:5000/api/Companies')
    const json = await response.json()

    setCompanies(json)
  }

  return (
    <>
      <Switch>
        <Route path="/new">
          <NewCompanyModal
            whenDoneWithAddingCompany={
              clearsTheUserPressedNewAndReloadsTheCompanies
            }
          />
        </Route>

        <main className="companies">
          <Panel
            title="Companies"
            headerAction={
              <Link to="/new">
                <Icon name="plus" />
              </Link>
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
      </Switch>
    </>
  )
}
