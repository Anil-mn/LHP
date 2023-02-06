
exports.home = (req,res)=>{
    return res.json({
        'details':{
            'name':'anil',
            'user':'admin',
            'logintime':'time'
        }
    })
}