import React, { useState } from 'react'
import { Company } from './Company'
import { Icon } from '../Icon'
import { Panel } from './Panel'
import { PanelItem } from './PanelItem'

export function Companies() {
  const [companies, setCompanies] = useState([
    {
      id: 1,
      position: null,
      technology: null,
      contactName: 'Gavin Stark',
      contactEmail: 'gavin@suncoast.io',
      remote: true,
      contactCount: 0,
      companyName: 'SDG',
      salary: 50000,
      benefits: false,
      companyLogo: null,
      url: 'https://suncoast.io',
      description: 'School for building Web Developers',
    },
    {
      id: 2,
      position: null,
      technology: null,
      contactName: 'Tim Cook',
      contactEmail: 'tim@apple.com',
      remote: false,
      contactCount: 0,
      companyName: 'Apple',
      salary: 100000,
      benefits: false,
      companyLogo: null,
      url: 'https://apple.com',
      description: 'All things APPLE',
    },
    {
      id: 3,
      position: null,
      technology: null,
      contactName: 'Bill Gates',
      contactEmail: 'gates@microsoft.com',
      remote: true,
      contactCount: 0,
      companyName: 'Microsoft',
      salary: 150000,
      benefits: false,
      companyLogo: null,
      url: 'https://Microsoft.com',
      description: 'Home of Windows and C#',
    },
  ])
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
