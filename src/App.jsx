import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

export function App() {
  return (
    <div className="home container">
      <header className="header">
        <h1>Job Tracker&trade;</h1>
      </header>

      <aside className="notifications">
        <h2>Notifications</h2>
        <a href="#new">New</a>
        <ul>
          <li>
            <h3>Follow up with PetCo</h3>
            <p>You applied 3 days ago.</p>
          </li>
          <li>
            <h3>Interview with ACME Inc.</h3>
            <p>Monday at 2 pm</p>
          </li>
        </ul>
      </aside>

      <main className="companies">
        <h2>Companies</h2>
        <a href="#new">New</a>
        <ul>
          <li>
            <h3>PetCo</h3>
            <a href="https://pet.co">https://pet.co</a>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Veritatis eius dicta iure ullam.
            </p>
            <p>
              <a href="#edit">Edit</a>
            </p>
          </li>
          <li>
            <h3>ACME Inc.</h3>
            <a href="https://pet.co">https://pet.co</a>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
              tenetur. Perferendis magnam maxime ipsam voluptas nesciunt illum.
            </p>
            <p>
              <a href="#edit">Edit</a>
            </p>
          </li>
          <li>
            <h3>PetCo</h3>
            <a href="https://pet.co">https://pet.co</a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              ducimus totam voluptate ad.
            </p>
            <p>
              <a href="#edit">Edit</a>
            </p>
          </li>
          <li>
            <h3>ACME Inc.</h3>
            <a href="https://pet.co">https://pet.co</a>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              porro perferendis. Velit corrupti suscipit blanditiis ipsa
              dignissimos.
            </p>
            <p>
              <a href="#edit">Edit</a>
            </p>
          </li>
        </ul>
      </main>

      <aside className="interactions">
        <h2>Interactions</h2>
        <a href="#new">New</a>
        <ul>
          <li>
            <h3>Emailed PetCo</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>4 days ago</p>
          </li>
          <li>
            <h3>Emailed ACME Inc.</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <p>2 days ago</p>
          </li>
          <li>
            <h3>Applied at PetCo</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>2 days ago</p>
          </li>
        </ul>
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
