import gql from 'graphql-tag';

export const state = () => ({
  info: {
    id: 1,
    name: '',
    surname: '',
  }
})
export const mutations = {}
export const actions = {
  async updateUserInfo(_, payload) {
    const client = this.app.apolloProvider.defaultClient;

    const res = await client.mutate({
      mutation: gql`
        mutation($id: ID!) {
          mutateUserInfo(info:) {
            info 
          }
        }
      `,
      variables() {
        return {
          label: 
        }
      }
    })
    debugger;
  }
}