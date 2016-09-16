
/**
 * Criação do módulo onde funcionará todo o banco de dados não relacional do sistema
 * O banco de dados utilizado será o SQLite e a interface vai usar o POUCHDB
 */
angular.module("starter")
.service("DBService", function($q){
    var db;
    var self = this;
    
    /**
     * Instanciando o banco de dados
     */
    this.initDB = function(){
        return db = new PouchDB('Sicoob',{
            adapter:"wbsql"
        });
    }

    this.storeData=function(user){

    }



});