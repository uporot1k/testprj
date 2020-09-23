import { UserTypes } from '../graphql/user.js'

const schema = {
  typeDefs: [ UserTypes ],
  resolvers: {
    mutateUserInfo( _, { id }, { cache }) {
      debugger;
    }
  }
}

export default schema;