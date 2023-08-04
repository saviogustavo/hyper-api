const urlApi = "https://jsonplaceholder.typicode.com"
beforeEach(()=> {
    cy.request(`${urlApi}/users`).as('getUser')
})

Given ('I visit the api', ()=> {
    cy.get('@getUser')
})

Then ('I see the response code and status', ()=> {
    cy.get('@getUser').then((response)=> {
        expect(response.status).to.equal(200);
        expect(response.statusText).to.equal('OK');

    cy.log(response)

})

Then ('I access some of the API fields and check if the data is reliable', ()=> {

    cy.get('@getUser').should((resp)=> {
        const { body } = resp
        expect(body[0].id).equal(1)
        expect(body[0].name).equal('Leanne Graham')
        expect(body[0].username).equal('Bret')
        expect(body[0].email).equal('Sincere@april.biz')
        expect(body[0].phone).equal('1-770-736-8031 x56442')
        expect(body[0].address.street).equal('Kulas Light')
         })
    })
})