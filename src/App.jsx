import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Icon } from './Icon'

function Notification({ title, detail, done }) {
  return (
    <div className="notification">
      <div className="content">
        <h3>{title}</h3>
        <p>{detail}</p>
      </div>
      <div className="toggle">
        <a href="#toggle">
          {done ? <Icon name="check" /> : <Icon name="circle" style="far" />}
        </a>
      </div>
    </div>
  )
}

function Company({ name, url, description }) {
  return (
    <div className="company">
      <header>
        <h3>{name}</h3>
        <a href={url}>
          <Icon name="link" />
        </a>
      </header>
      <div className="content">
        <p>{description}</p>
      </div>
      <p className="actions">
        <a href="#edit">
          <Icon name="edit" />
        </a>
      </p>
    </div>
  )
}

function Interaction({ title, description, timeframe }) {
  return (
    <div className="content">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{timeframe}</p>
    </div>
  )
}

function Panel({ title, headerAction, children }) {
  return (
    <div className="panel">
      <header>
        <h2>{title}</h2>
        {headerAction}
      </header>
      <ul>{children}</ul>
    </div>
  )
}

function PanelItem({ children }) {
  return <li className="panel-item">{children}</li>
}

export function App() {
  return (
    <div className="home container">
      <header className="header">
        <h1>Job Tracker&trade;</h1>
      </header>

      <aside className="notifications">
        <Panel
          title="Notification"
          headerAction={
            <a href="#new">
              <Icon name="plus" />
            </a>
          }
        >
          <PanelItem>
            <Notification
              title="Email ACME, Inc."
              detail="Foo Bar"
              done={true}
            />
          </PanelItem>
          <PanelItem>
            <Notification
              title="Apply at ACME, Inc."
              detail="Foo Bar"
              done={false}
            />
          </PanelItem>
          <PanelItem>
            <Notification title="Email PetCo" detail="Foo Bar" done={false} />
          </PanelItem>
        </Panel>
      </aside>

      <main className="companies">
        <Panel
          title="Companies"
          headerAction={
            <a href="#new">
              <Icon name="plus" />
            </a>
          }
        >
          <PanelItem>
            <Company
              name="PetCo"
              url="https://pet.co"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
              porro rem alias tempore."
            ></Company>
          </PanelItem>
          <PanelItem>
            <Company
              name="ACME Inc."
              url="https://pet.co"
              description="Consequuntur repellendus, in eaque dolores aliquid accusantium
              illo iusto quis consectetur, excepturi necessitatibus ullam labore
              velit ex!"
            ></Company>
          </PanelItem>
          <PanelItem>
            <Company
              name="ACME Inc."
              url="https://pet.co"
              description="Consequuntur repellendus, in eaque dolores aliquid accusantium
              illo iusto quis consectetur, excepturi necessitatibus ullam labore
              velit ex!"
            ></Company>
          </PanelItem>
        </Panel>
      </main>

      <aside className="interactions">
        <Panel
          title="Interactions"
          headerAction={
            <a href="#new">
              <Icon name="plus" />
            </a>
          }
        >
          <PanelItem>
            <Interaction
              title="Emailed PetCo"
              description="Vel, ex accusantium hic harum eos odio dolorum."
              timeframe="4 days ago"
            ></Interaction>
          </PanelItem>
          <PanelItem>
            <Interaction
              title="Emailed ACME, Inc."
              description="Vel, ex accusantium hic harum eos odio dolorum."
              timeframe="2 days ago"
            ></Interaction>
          </PanelItem>
          <PanelItem>
            <Interaction
              title="Applied at PetCo"
              description="Vel, ex accusantium hic harum eos odio dolorum."
              timeframe="2 days ago"
            ></Interaction>
          </PanelItem>
        </Panel>
      </aside>

      <footer className="footer">
        <p>&copy; Made with &hearts; by Mandy Wade in 2021</p>
      </footer>
      {/* <Switch>
        <Route exact path="/">
          Home
        </Route>
        <Route exact path="/1">
          Page 1
        </Route>
        <Route exact path="/2">
          Page 2
        </Route>
        <Route path="*">Not Found</Route>
      </Switch> */}
    </div>
  )
}
