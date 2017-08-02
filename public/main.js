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
            +'<table id="myTable" class="table table-bordered" style="margin-top: 10px;">'
            +'<thead><tr>'
            +'<th>Label</th>'
            +'<th>Translation</th>'
            +'</tr></thead>'
            +'<tbody>'
            /*+'<td>Hello</td>'
            +'<td>Bonjour</td>'*/
            /*+'<tr v-for="post of posts">'
            +'<td>{{post.en.name}}</td>'
            +'<td>{{post.value}}</td>'
            +'</tr>'*/
            +'</tbody></table>'
            +'<v-paginator :resource_url="resource_url" @update="updateResource"></v-paginator>'
            +'<button id="nextValue" type="button" class="btn btn-primary">Next</button>'
            +'</div>',
    props: ['posts'],

    created: function (){
      console.log('created1');
      this.$http.get('/api/language?language=ga&blanks=true').then(response => {

        this.posts = response.data;
        let theData = response.data;
        //console.log(this.posts[0].en);
        //console.log(this.posts[0].en);

        let table =  $('#myTable');
        let max_size = theData.length;
        let start = 0;
        let limit = 10;

        console.log(theData)

        pagnation(start, limit);

        function pagnation(sta,limit) {
          for(let i=start; i<limit; i++) {
            let newRow = $('<tr><td>A-' + theData[i]['name'] + '</td><td>B-' + theData[i]['value']  + '</td></tr>');
            table.append(newRow);
          }
        }

        $('#nextValue').click(function(){
          var next = limit;
          if(max_size >= next) {
            limit = limit + limit;
            table.empty();
            //console.log(next +' -next- '+limit);
            pagnation(next,limit);
          }
        });

        $('#PreeValue').click(function(){
          var pre = limit-(2*limit);
          if(pre>=0) {
            limit = limit-limit;
            //console.log(pre +' -pre- '+limit);
            table.empty();
            pagnation(pre, limit);
          }
        });

      }, response => {
          // error callback
      //);
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
  data: {
    posts: [{
      name: "common.no",
      value: "no"
    }],
    resource_url: '/api/language?language=ga&blanks=true',
  },
  components: {
    VPaginator: VuePaginator
  },
  methods: {
    updateResource(data){
      this.posts = data
    }
  }
});
