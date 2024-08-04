/// <reference types = "Cypress" />

describe('put user request', () => {

  let accessToken = '8d4791270fe69fa2cb291480d5911dcb48d1e57f765ed35a3576f7e6fb6496db'
  let randomText = ""
  let testEmail = ""
  let testName = ""
  
  it('update user test', ()=>{

    var pattern = "ABCDDEFGHIJKLMNPRSTUVWXYZabcdefghijklmnprstuvwxyz1234567890"
    for (var i=0; i<10; i++)
    randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));
    testEmail=randomText+'@gmail.com'
    testName='Test '+randomText

    cy.request({
      method: 'PUT',
      url: 'https://gorest.co.in/public/v2/users/7286279',
      headers: {
        'Authorization': "Bearer " + accessToken
      },
      body: {
        "name":testName,
        "gender":"male",
        "email":testEmail,
        "status":"active"
      }

    }).then((res)=>{
      cy.log(JSON.stringify(res))
      expect(res.status).to.eq(200)
      expect(res.body).has.property('email',testEmail)
      expect(res.body).has.property('name',testName)
      expect(res.body).has.property('status','active')
      expect(res.body).has.property('gender','male')
    })
  
  })
})