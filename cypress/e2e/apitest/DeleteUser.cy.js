/// <reference types = "Cypress" />

describe('delete user request', () => {

  let accessToken = '8d4791270fe69fa2cb291480d5911dcb48d1e57f765ed35a3576f7e6fb6496db'
  
  it('update user test', ()=>{

    cy.request({
      method: 'DELETE',
      url: 'https://gorest.co.in/public/v2/users/7286294',
      headers: {
        'Authorization': "Bearer " + accessToken
      }

    }).then((res)=>{
      cy.log(JSON.stringify(res))
      expect(res.status).to.eq(204)
    })
  
  })
})