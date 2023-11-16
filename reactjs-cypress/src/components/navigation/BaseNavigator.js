import React, { Component } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import ViewBooks from "../books/ViewBooks"
import AddBooks from '../books/AddBooks'
import UpdateBooks from '../books/UpdateBooks'

function BaseNavigator() {
    return (
        <div>
            <Switch>
                <Route path='/' component={ViewBooks} exact />
                <Route path='/add-books' component={AddBooks} />
                <Route path='/update-books' component={UpdateBooks} />
            </Switch>
        </div>
    )

}

export default BaseNavigator