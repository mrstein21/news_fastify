function responseOK(res,data){
    return res.code(200).send({
       "success":true,
       "data":data
    });
}

function responseProcessFailed(statusCode,res,message){
    return res.code(statusCode).send({
       "success":false,
       "data":message
    });
}

function responseFailure(res,err){
    console.log(err);
    return res.code(500).send({
        "success":false,
        "message":"Terjadi kesalahan pada server"
    })
}

module.exports={
    responseOK,
    responseFailure,
    responseProcessFailed
}