
function AuthController (){
    
    var roles;
    
    function setRoles(role) {
        roles = role; 
    }
    
    function isAuthorize( neededRole){
        return roles.indexOf(neededRole) >=0
        
    }
    
    
     function isAuthorizeAsync( neededRole,cb){
       setTimeout(function () {
           cb(roles.indexOf(neededRole) >=0)
       },2100)
        
    }
    
    
    function isAuthorizeAsyncPromise( neededRole,cb){
        return new Promise (function (resolve){
            setTimeout(function () {
           resolve(roles.indexOf(neededRole) >=0)
       },2100)
            
        })
       
    }
    
    
    function getIndex(req, res) {
        res.render('index')
    }
    
    
    
    
    return {
        isAuthorize,
        isAuthorizeAsync,
        setRoles,
        isAuthorizeAsyncPromise,
        getIndex
            }
}




module.exports = AuthController()