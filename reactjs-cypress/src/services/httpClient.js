import EnvironmentStore from "../stores/EnvironmentStore";

import React, { Component } from 'react'

class httpClient extends Component {
    static url(path) {
        var host = EnvironmentStore.getApiHost('test')
        return host + "/" + path
    }

    //get user data
    static async getBookData(path) {
        try {
            let url = this.url(path);
            return fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            })
                .then((res) => res.json())
                .then(data => {
                    return data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //add user data
    static async addBook(path, newData) {
        try {
            let url = this.url(path);
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(newData)
            })
                .then((res) => res.json())
                .then(data => {
                    console.log("data is : ", data);
                    return data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //update user data
    static async updateBook(path, newData) {
        try {
            let url = this.url(path);
            return fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(newData)
            })
                .then((res) => res.json())
                .then(data => {
                    return data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

    //delete user data
    static async delete(path) {
        try {
            let url = this.url(path);
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            })
                .then((res) => res.json())
                .then(data => {
                    return data
                })
        } catch (error) {
            console.log("service issue", error);
        }
    }

}

export default httpClient