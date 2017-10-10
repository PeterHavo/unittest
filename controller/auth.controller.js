
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
    
    return {
        isAuthorize,
        isAuthorizeAsync,
        setRoles
            }
}




module.exports = AuthController()