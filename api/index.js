const { ApolloServer } = require('apollo-server')
const userSchema = require('./user/schema/user.graphql')
const userResolvers = require('./user/resolvers/userResolvers')


const typeDefs = [userSchema]
const resolvers = [userResolvers]
const server = new ApolloServer({ typeDefs, resolvers})

//Para definir uma porta -> server.listen({port: 3001}).then(() =>{})
//A porta padrão usada em url será 4001
server.listen().then(({url}) =>{
    console.log(`Servidor rodando na porta ${url}`)
})