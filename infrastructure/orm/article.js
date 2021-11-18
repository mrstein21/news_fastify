const knex=require('../config/database');
const {Model}=require('objection');


Model.knex(knex);
class Article extends Model{
    static get tableName(){
        return 'article';
    }

}

module.exports=Article;