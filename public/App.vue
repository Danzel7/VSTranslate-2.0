Vue.component("App", {
  template:
'
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    Test app
    <router-view></router-view>
  </div>
  
<script>
export default {
  name: "app"
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>'
});
