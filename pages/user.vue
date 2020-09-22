<template>
  <div class="app">
    <b-form-group  label="Your Name:" >
      <b-form-input
        v-model="name"
        required
        placeholder="Enter name"
      ></b-form-input>
    </b-form-group>
    <b-form-group label="Your Familia:">
      <b-form-input
        v-model="surname"
        required
        placeholder="Enter Familia"
      ></b-form-input>
    </b-form-group>
    <b-btn variant="primary">Save</b-btn>
  </div>
</template>

<script>
  export default {
    name: 'PageUser',
    data(){
      return{
        name: '',
        surname:''
      }
    }
  }
</script>
