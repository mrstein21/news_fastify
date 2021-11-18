const ArticleRepository=require('../../domain/article_repository');
const ArticleModel=require('../orm/article');

module.exports=class extends ArticleRepository{
    constructor() {
        super();
      }
    async getArticle(page){
      var article=await ArticleModel.query().select('id','title','slug','short_description','image','created_at','is_posted').where('is_posted',1)
      .page(page-1,6);
       return article.results; 
    }

    async searchArticle(keyword,page){
      var article=await ArticleModel.query().withGraphFetched("author").
      select('id','title','slug','short_description','image','created_at','is_posted').where("title",'LIKE',"%"+keyword+"%").where('is_posted',1).
      page(page-1,6)     
      return article.results; 
    }

   
    async getArticleById(id){
     var article=await ArticleModel.query().findById(id); 
     return article;
    }


    async getArticleBySlug(slug){
      var article=await ArticleModel.query().
      where('slug',slug).first();
      return article;
    }


}