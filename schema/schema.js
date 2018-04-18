const graphql = require('graphql');
const {
    GraphQLObjectType,
     GraphQLString, 
     GraphQLSchema,
     GraphQLID
    } = graphql;
const _ = require('lodash');
var books = [
    {name:'arganon', genre: 'spiritual',id: '1'},
    {name:'wudase mariam', genre: 'spiritual',id: '2'},
    {name:'melak micheal', genre: 'spiritual',id: '3'},
];
const BookType = new GraphQLObjectType({
 name: 'Book',
 fields: () =>({
     id: {type: GraphQLID},
     name:{type: GraphQLString},
     genre:{type: GraphQLString},
 })
});

const RootQuery = new GraphQLObjectType({  
name: 'RootQueryType',
fields: {
    book:{
        type: BookType,

        args: {
            id: {type: GraphQLID}},
        resolve(parent, args){

            //code to get data from db/other source
           return _.find(books, {id: args.id});
        }
    }
}
});

module.exports = new GraphQLSchema({
    query: RootQuery
})