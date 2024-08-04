/// <reference types = "Cypress" />

describe('get api user tests', ()=>{


    it('get users', ()=>{
        
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v2/users',
            headers :  {

                'authorization' : "Bearer 2c73e4c6f6d23baea82b49946845c78f2be04ca991a30bb810353cca1e468a7b"
            }



        }).then((res)=>{
            expect(res.status).to.eql(200)
            expect(res.body.pagination.gender).to.eql(female)
        })
    })

})
