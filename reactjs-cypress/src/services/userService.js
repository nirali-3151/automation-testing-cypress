import httpClient from "./httpClient";

import React, { Component } from 'react'

class UserService extends Component {

    //get book data
    static async getBookDataList() {
        let result = []
        try {
            let api_name = `view-Users`
            result = await httpClient.getBookData(api_name)
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }

    //add book data
    static async addBookList(newData) {
        let result = []
        try {
            let api_name = "add-Users"
            result = await httpClient.addBook(api_name, newData)
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }


    //update book list
    static async updateBookList(id , newData) {
        let result = []
        try {
            let api_name = `update-Users/${id}`
            result = await httpClient.updateBook(api_name, newData)
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }


    //delete book data
    static async deleteList(id) {
        let result = []
        try {
            let api_name = `delete-Users/${id}`
            result = await httpClient.delete(api_name)
        } catch (error) {
            console.log("get login user", error);
        }
        return result
    }


}

export default UserService;