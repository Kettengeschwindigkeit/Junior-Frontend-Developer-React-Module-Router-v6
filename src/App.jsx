import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";

function HomePage() {
    return (
        <div className="m-4">
            <h1 className="text-3xl font-bold">Home page</h1>
            <NavLink to="/users" className="text-lg hover:text-blue-700">Users list page</NavLink>
        </div>
    )
}

function UsersListPage() {
    return (
        <div className="m-4">
            <h1 className="text-3xl font-bold">Users List Page</h1>
            <NavLink to="/" className="text-lg hover:text-blue-700">Main page</NavLink>
            <ul className="text-sm">
                <li><NavLink to="users/1" className="hover:text-blue-700">User 1</NavLink></li>
                <li><NavLink to="users/2" className="hover:text-blue-700">User 2</NavLink></li>
                <li><NavLink to="users/3" className="hover:text-blue-700">User 3</NavLink></li>
                <li><NavLink to="users/4" className="hover:text-blue-700">User 4</NavLink></li>
                <li><NavLink to="users/5" className="hover:text-blue-700">User 5</NavLink></li>
            </ul>
        </div>
    )
}

function UserPage({ match }) {
    const id = match.params.id

    return (
        <div className="m-4">
            <h1 className="text-3xl font-bold">User page</h1>
            <div>
                <NavLink to="/users" className="text-lg hover:text-blue-700">Users list page</NavLink>
            </div>
            <div>
                <NavLink to={`/users/${id}/edit`} className="text-lg hover:text-blue-700">Edit user page</NavLink>
            </div>
            <div>userId: {id}</div>
        </div>
    )
}

function UserEditPage({ match }) {
    const id = match.params.id

    return (
        <div className="m-4">
            <h1 className="text-3xl font-bold">User Edit Page</h1>
            <div>
                <NavLink to={`/users/${id}`} className="text-lg hover:text-blue-700">Users profile page</NavLink>
            </div>
            <div>
                <NavLink to={`/users/${+id + 1}`} className="text-lg hover:text-blue-700">Another user</NavLink>
            </div>
            <div>
                <NavLink to="/users" className="text-lg hover:text-blue-700">Users list page</NavLink>
            </div>
        </div>
    )
}

function App() {
    return (
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/users/:id/edit" component={UserEditPage} />
            <Route path="/users/:id" component={UserPage} />
            <Route path="/users" component={UsersListPage} />
            <Redirect from="*" to="/" />
        </Switch>
    )
}

export default App;
