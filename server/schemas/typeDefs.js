const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Query {
    me: User {
        
    }
    users: [User]
    user(userId: ID!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(book: ): User
    removeBook(BookId: ID!): User
  }
`;

module.exports = typeDefs;