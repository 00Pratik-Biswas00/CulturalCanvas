import { gql } from "@apollo/client";

export const ADD_CONTEST = gql`
  mutation AddContest($topic: String!, $date: String!, $time: String!) {
    addContest(topic: $topic, date: $date, time: $time)
  }
`;

export const GET_CURRENT_CONTEST = gql`
  query GetCurrentContest {
    currentContest {
      id
      topic
      date
      time
      week
    }
  }
`;

export const ADD_WINNER = gql`
  mutation AddWinner(
    $name: String!
    $socialMediaLink: String!
    $rank: Int!
    $week: Int!
  ) {
    addWinner(
      name: $name
      socialMediaLink: $socialMediaLink
      rank: $rank
      week: $week
    )
  }
`;

export const GET_CURRENT_CONTEST_WEEK = gql`
  query GetCurrentContest {
    currentContest {
      id
      week
    }
  }
`;

export const GET_WINNERS = gql`
  query GetWinners($week: Int!) {
    winners(week: $week) {
      id
      name
      socialMediaLink
      rank
    }
  }
`;
