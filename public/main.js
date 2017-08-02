// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//import axios from 'axios';


Vue.config.productionTip = false;


/*Vue.component("App", {
  template: '<h2>Testing</h2>'
});*/

var Child = {
  template: '<div>A custom component!</div>'
}

var Child2 = {
  template: '<div>A custom component2!</div>'
}

//let template =

Vue.component("App1", {
  template: '<div id="cont" style="width:800px; margin: auto;">'
            +'<h2 style="text-align: center;">Translations</h2>'
            +'<div class="form-group">'
            +'<input type="text" class="form-control" id="usr" placeholder="Search..." />'
            +'</div>'
            +'<div class="form-group">'
            +'<label for="sel1">Languages:</label>'
            +'<select class="form-control" id="sel1">'
            +'<option>Irish</option>'
            +'<option>French</option>'
            +'</select><br/>'
            +'<label class="checkbox-inline">'
            +'<input type="checkbox" value="">No Translation</label>'
            +'<label class="checkbox-inline">'
            +'<input type="checkbox" value="">Translation Done</label><br/>'
            +'<table class="table table-bordered" style="margin-top: 10px;">'
            +'<thead><tr>'
            +'<th>Label</th>'
            +'<th>Translation</th>'
            +'</tr></thead>'
            +'<tbody>'
            /*+'<td>Hello</td>'
            +'<td>Bonjour</td>'*/
            +'<tr v-for="post of posts">'
            +'<td>common.yes</td>'
            +'<td>{{post.value}}</td>'
            +'</tr>'
            +'</tbody></table>'
            +'<button type="button" class="btn btn-primary">Next</button>'
            +'</div>',
    props: ['posts'],
    created: function (){
      console.log('created1');
      /*axios.get('/api/language?language=ga&blanks=true')
      .then(response => {
        // JSON responses are automatically parsed.
        console.log('response.data ',response.data);
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e);
        console.log('error');
      })*/
      this.$http.get('/api/language?language=ga&blanks=true').then(response => {

    // get body data
      //console.log('response.data ',response.data);
      //this.someData = response.body;
      this.posts = response.data;
      console.log(this.posts);


  }, response => {
    // error callback
  });
    }

});


/*Vue.component("App1", {
  template: +'<div id="cont">'
            +'<h2 style="text-align: center;">Translations</h2>'
            +'<select>'
            +'<option>Irish</option>'
            +'<option>French</option>'
            +'</select>'
            +'</div>'
});*/


/* eslint-disable no-new */
new Vue({
  el: '#mainApp',
  template: '<App1/>',
  ddata: {
    posts: [{
      name: "common.no",
      value: "no"
    }]
  }
});
