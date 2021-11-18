var articleUseCase=require('../../application/use_case/article_usecase');
var httpRes=require('./controller')
var dotenv=require("dotenv");
dotenv.config();

module.exports={
    async getArticle(req,res){
       try{
        var data=await articleUseCase.getArticle(req.query.page);
        return httpRes.responseOK(res,data);
       }catch(e){
         return httpRes.responseFailure(res,e);  
       }
    },
    async searchArticle(req,res){
        try{
            console.log("Come to Search Article")
            var data=await articleUseCase.searchArticle(req.params.keyword,req.query.page)
            return httpRes.responseOK(res,data);
        }catch(e){
            return httpRes.responseFailure(res,e);  
        }
    },
    async getArticleById(req,res){
        try{
            var data=await articleUseCase.getArticleById(req.params.id)
            return httpRes.responseOK(res,data);
        }catch(e){
            return httpRes.responseFailure(res,e);  
        }
    },
    async getArticleBySlug(req,res){
        try{
            var data=await articleUseCase.getArticleBySlug(req.params.slug);
            return httpRes.responseOK(res,data);
        }catch(e){
            return httpRes.responseFailure(res,e);  
        }
    },

}