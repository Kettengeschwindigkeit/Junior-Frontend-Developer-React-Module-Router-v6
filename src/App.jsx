import React from "react";
import { Navigate, NavLink, Route, Routes, useParams } from "react-router-dom";

function HomePage() {
    return (
        <div className="m-4">
            <h1 className="text-3xl font-bold">Home page</h1>
            <NavLink to="users" className="text-lg hover:text-blue-700">Users list page</NavLink>
        </div>
    )
}

function UsersListPage() {
    return (
        <div className="m-4">
            <h1 className="text-3xl font-bold">Users List Page</h1>
            <NavLink to="/" className="text-lg hover:text-blue-700">Main page</NavLink>
            <ul className="text-sm">
                <li><NavLink to="1" className="hover:text-blue-700">User 1</NavLink></li>
                <li><NavLink to="2" className="hover:text-blue-700">User 2</NavLink></li>
                <li><NavLink to="3" className="hover:text-blue-700">User 3</NavLink></li>
                <li><NavLink to="4" className="hover:text-blue-700">User 4</NavLink></li>
                <li><NavLink to="5" className="hover:text-blue-700">User 5</NavLink></li>
            </ul>
        </div>
    )
}

function UserPage() {
    const params = useParams()

    return (
        <div className="m-4">
            <h1 className="text-3xl font-bold">User page</h1>
            <div>
                <NavLink to="/users" className="text-lg hover:text-blue-700">Users list page</NavLink>
            </div>
            <div>
                <NavLink to={`/users/${params.id}/edit`} className="text-lg hover:text-blue-700">Edit user page</NavLink>
            </div>
            <div>userId: {params.id}</div>
        </div>
    )
}

function UserEditPage() {
    const params = useParams()

    return (
        <div className="m-4">
            <h1 className="text-3xl font-bold">User Edit Page</h1>
            <div>
                <NavLink to={`/users/${params.id}`} className="text-lg hover:text-blue-700">Users profile page</NavLink>
            </div>
            <div>
                <NavLink to={`/users/${+params.id + 1}`} className="text-lg hover:text-blue-700">Another user</NavLink>
            </div>
            <div>
                <NavLink to="/users" className="text-lg hover:text-blue-700">Users list page</NavLink>
            </div>
        </div>
    )
}

function App() {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="users" element={<UsersListPage />} />
            <Route path="users/:id" element={<UserPage />} />
            <Route path="users/:id/edit" element={<UserEditPage />} />
            <Route path="*" element={<Navigate to="" />} />
        </Routes>
    )
}

export default App;
