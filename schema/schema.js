const graphql = require('graphql');
const {
    GraphQLObjectType,
     GraphQLString, 
     GraphQLSchema,
     GraphQLID,
     GraphQLInt
    } = graphql;
const _ = require('lodash');
var books = [
    {name:'arganon', genre: 'spiritual',id: '1'},
    {name:'wudase mariam', genre: 'spiritual',id: '2'},
    {name:'melak micheal', genre: 'spiritual',id: '3'},
];

var authors = [  
 {name:'aba giyorgis ', age: 67, id: '1'},
{name:'kidus yared ', age : 77, id: '2'},
{name:'kidus eprem ', age: 69, id: '3'}
];
 
//bookType
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () =>({
        id: {type: GraphQLID},
        name:{type: GraphQLString},
        genre:{type: GraphQLString},
    })
   });

const AuthorType = new GraphQLObjectType({
 name: 'Author',
 fields: () =>({
     id: {type: GraphQLID},
     name:{type: GraphQLString},
     age:{type: GraphQLInt},
 })
});

const RootQuery = new GraphQLObjectType({  
name: 'RootQueryType',
fields: {
    // book
    book:{
        type: BookType,

        args: {
            id: {type: GraphQLID}},
        resolve(parent, args){

            //code to get data from db/other source
           return _.find(books, {id: args.id});
        }
    },
    //author
 author: {
     type: AuthorType,
     args: {id: {type: GraphQLID}},
     resolve(parent, args){
         return _.find(authors, {id: args.id});
     }
 }

}
});

module.exports = new GraphQLSchema({
    query: RootQuery
})