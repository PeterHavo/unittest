var assert = require("assert")
var authorize = require("../../controller/auth.controller")
var expect = require("chai").expect;
var should = require("chai").should();
var chai = require("chai")
var chaiaspromise = require("chai-as-promised")
chai.use(chaiaspromise)
chai.should();


describe('authorization test', () => {
    describe('checking athorization for admin rights', () => {
        it('it should fail if user does not have admin rights', () => {
            authorize.setRoles(['user'])
            var isAuth =  authorize.isAuthorize( 'admin')
                 expect(isAuth).to.be.false
        })
        it('it should return true if user is authorize', () => {
             authorize.setRoles(['user'])
            assert.equal(true, authorize.isAuthorize( 'user'))
        })
       
  
    })
    
    
})


 
describe('authorization test async', function ()  {
    beforeEach(function(){
        console.log('before each!!!')
          authorize.setRoles(['admin'])
    })
    it('pass if user does not have admin rights', function (done)  {
       this.timeout(3000);
      
        authorize.isAuthorizeAsync('admin', function (auth)  {
           
            assert.equal(true, auth)
            done()
        })
    })
})

 
describe('authorization test promise', function ()  {
    beforeEach(function(){
        console.log('before each!!!')
          authorize.setRoles(['admin'])
    })
    it('pass if user does not have admin rights', function ()  {
       this.timeout(3000);
      
        return authorize.isAuthorizeAsyncPromise('admin').should.eventually.be.true;
        
    })
})




   
