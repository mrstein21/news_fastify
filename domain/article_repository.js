module.exports=class{
    async getArticle(page) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    async searchArticle(keyword,page) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
    async getArticleById(id){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    async getRelatedArticle(topic_ids,article_id){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    async getTopic(){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    async filterArticle(id_topic,page){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    async getArticleBySlug(slug){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    async getArticleByCategoryName(slug){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    async getTopicBySlug(slug){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

}