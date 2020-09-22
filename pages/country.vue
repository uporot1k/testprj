<template>
  <div class="app">
    <b-form-group  label="Your Country:" >
      <b-form-input
        v-model="country"
        required
        placeholder="Enter country"
      ></b-form-input>
    </b-form-group>
    <b-btn variant="primary">Save</b-btn>
  </div>
</template>

<script>
  export default {
    name: 'PagePrifile',
    data(){
      return {
        country: 'USA'
      }
    }
  }
</script>
