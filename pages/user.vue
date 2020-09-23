<template>
  <div class="app">
    <b-form @submit.prevent="onFormSubmit">
      <b-form-group  label="Your Name:" >
        <b-form-input
          id="name"
          :value="info.name"
          @input.native="onInput($event)"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Your Familia:">
        <b-form-input
          id="surname"
          :value="info.surname"
          @input.native="onInput($event)"
          required
          placeholder="Enter Familia"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Save</b-button>
    </b-form>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'PageUser',
    data(){
      return{
        localUserInfo: {},
      }
    },
    computed: {
      ...mapState('user', ['info']),
    },
    methods: {
      ...mapActions('user', ['updateUserInfo']),
      onFormSubmit() {
        this.updateUserInfo(this.localUserInfo);
      },
      onInput(e) {
        this.$set(this.localUserInfo, e.target.id, e.target.value);
      }
    }
  }
</script>
