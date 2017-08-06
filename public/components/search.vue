<template>
  <div>
    <input id="search" type="text" v-on:keyup="search($event.target.value)" placeholder="Search by Label..." />
  </div>
</template>

<script>
  export default {
    name: 'search',
    props: ['trans'],
    methods: {
      search(query) {
        this.$emit('searchQuery', query);
      },
    }
  }
</script>

<style scoped>
  #search {
      background-image: url('./resources/searchIcon.png');
      background-position: 10px 12px;
      background-repeat: no-repeat;
      width: 100%;
      font-size: 16px;
      padding: 12px 20px 12px 40px;
      border: 1px solid #ddd;
      margin-bottom: 12px;
  }
</style>
