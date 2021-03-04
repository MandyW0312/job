import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Icon } from './Icon'
import { Interaction } from './components/Interaction'
import { Notification } from './components/Notification'
import { Panel } from './components/Panel'
import { PanelItem } from './components/PanelItem'
import { Companies } from './components/Companies'

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
      <Companies />
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
    </div>
  )
}
