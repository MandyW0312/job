import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Company } from './components/Company'
import { Icon } from './Icon'
import { Interaction } from './components/Interaction'
import { Notification } from './components/Notification'
import { Panel } from './components/Panel'
import { PanelItem } from './components/PanelItem'

export function App() {
  return (
    <div className="home container">
      <header className="header">
        <h1>Job Tracker&trade;</h1>
      </header>

      <aside className="notifications">
        <Panel
          title="Notifications"
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
