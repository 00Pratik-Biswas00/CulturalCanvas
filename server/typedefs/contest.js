import { gql } from "apollo-server-express";

const contesttypeDefs = gql`
  type Contest {
    id: ID!
    topic: String!
    date: String!
    time: String!
    week: Int!
  }

  type Mutation {
    addContest(topic: String!, date: String!, time: String!): Boolean!
    addWinner(
      name: String!
      socialMediaLink: String!
      rank: Int!
      week: Int!
    ): Boolean!
    addBadge(id: ID!, badge: String!): Boolean
  }

  type Query {
    currentContest: Contest
    winners(week: Int!): [Winner]
  }

  type Winner {
    id: ID!
    name: String!
    socialMediaLink: String!
    rank: Int!
    week: Int!
  }
`;

export default contesttypeDefs;
