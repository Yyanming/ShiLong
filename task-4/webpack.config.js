const path = require('path');

module.exports = {
    mode :'development',
    entry :'./mydev/src/index',
    output :{
        path: path.resolve( __dirname,"dist"),
        filename :'xxfn.js'
    }
}
