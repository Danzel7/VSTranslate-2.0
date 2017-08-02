<template>
  <ul v-if="posts && posts.length">
    <li v-for="post of posts">
      <p><strong>{{post.name}}</strong></p>
    </li>
  </ul>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    posts: [],
    errors: []
  }),

  // Fetches posts when the component is created.
  created() {
    axios.get('/api/language?language=ga&blanks=true')
    .then(response => {
      // JSON responses are automatically parsed.
      console.log('response.data ',response.data);
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e);
      console.log('error');
    })

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }
}
</script>
