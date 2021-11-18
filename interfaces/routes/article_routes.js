const articleController=require('../controllers/article_controller');
async function routes (fastify, options) {
    fastify.get("/articles",articleController.getArticle);
    fastify.get("/articles/search/:keyword",articleController.searchArticle);
    fastify.get("/articles/:id",articleController.getArticleById);
    fastify.get("/articles/slug/:slug",articleController.getArticleBySlug);
}
module.exports=routes


