
var someLogger = 'logger'

const  someAsynfun = () => {
    setTimeout(() => {
        console.log('creating Blob')
    }, 10000)
    
}

module.exports = (req, res ) => {
    
    return  {
       name: 'test',
       someAsynfun
       
   }
}