
var someLogger = 'logger'








const  someAsynfun = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(110)
        }, 2000)
    })
   
   
    
}

function increaseval (someval) {
    return someval+6
}

let chekpromise = someAsynfun()
chekpromise.then(increaseval ).then(val => console.log(val))






module.exports = (req, res ) => {
    
    if (req.name == "post") {
        console.log('searching for blob ')
    }
  
}