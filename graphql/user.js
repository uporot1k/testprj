import gql from 'graphql-tag';

export const UserTypes = gql`
  type UserInfoType {
    id: ID!
    name: String
    surname: String
  }
  type User {
    info: UserInfoType
  }
`;

export const UserMutations = gql`
  mutation($id: ID!) {
    mutateUserInfo(id: $id) @client
  }
`;