/// <reference types = "Cypress" />

describe('get api user tests', ()=>{

  let accessToken = '8d4791270fe69fa2cb291480d5911dcb48d1e57f765ed35a3576f7e6fb6496db'

  it('get users', ()=>{
      
      cy.request({
          method : 'GET',
          url : 'https://gorest.co.in/public/v2/users',
          headers :  {

              'authorization' : "Bearer " + accessToken
          }

      }).then((res)=>{
          expect(res.status).to.eq(200)
          expect(res.body.gender)
      })
  })

  it('get users', ()=>{
      
    cy.request({
        method : 'GET',
        url : 'https://gorest.co.in/public/v2/users/7286279',
        headers :  {

            'authorization' : "Bearer " + accessToken
        }

    }).then((res)=>{
        expect(res.status).to.eq(200)
        expect(res.body.gender).to.eq('male')
        expect(res.body.id).to.eq(7286279)
    })
})

})
