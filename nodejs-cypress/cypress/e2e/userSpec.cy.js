describe('Testing api endpoints', () => {

  it("Test GET Request", () => {
    cy.request("http://localhost:8080/view-Users")
      .then((response) => {
        expect(response.status).to.equal(200)
      })
  })

  it("test ADD data request", () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:8080/add-Users',
      body: {
        "first_name": "rushabh",
        "last_name": "navdiya",
        "email": "rushabh@gmail.com"
      }
    }).then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body.id).not.to.equal(null)
    })
  })

  it("test UPDATE data request", () => {
    cy.request({
      method: 'PUT',
      url: 'http://localhost:8080/update-Users/2',
      body: {
        "first_name": "rushabh",
        "last_name": "navdiya",
        "email": "rushabh@gmail.com"
      },
    }).then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body.id).not.to.equal(undefined)
    })
  })

  // it("test DELETE data request", () => {
  //   cy.request({
  //     method: 'DELETE',
  //     url: 'http://localhost:8080/delete-Users/3',
  //   }).then((response) => {
  //     expect(response.status).to.equal(200)
  //     expect(response.body.id).not.to.equal(undefined)
  //   })
  // })
})