
var someLogger = 'logger'

const  someAsynfun = () => {
    setTimeout(() => {
        console.log('creating Blo')
    }, 10000)
    
}

module.exports = (req, res ) => {
    
    return  {
       name: 'tes',
       someAsynfun
       
   }
}