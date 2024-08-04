/// <reference types = "Cypress" />

describe('post user request', () => {

  let accessToken = '8d4791270fe69fa2cb291480d5911dcb48d1e57f765ed35a3576f7e6fb6496db'
  let randomText = ""
  let testEmail = ""
  
  it('create user test', ()=>{

    var pattern = "ABCDDEFGHIJKLMNPRSTUVWXYZabcdefghijklmnprstuvwxyz"
    for (var i=0; i<10; i++)
    randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));
    testEmail=randomText+'@gmail.com'

    cy.request({
      method: 'POST',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
        'Authorization': "Bearer " + accessToken
      },
      body: {
        "name":"Test Burhan",
        "gender":"male",
        "email":testEmail,
        "status":"active"
      }

    }).then((res)=>{
      cy.log(JSON.stringify(res))
      expect(res.status).to.eq(201)
      expect(res.body).has.property('email',testEmail)
      expect(res.body).has.property('name','Test Burhan')
      expect(res.body).has.property('status','active')
      expect(res.body).has.property('gender','male')
    })
  
  })
})