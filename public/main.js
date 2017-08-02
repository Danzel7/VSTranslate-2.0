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
            /*+'<td>{{post.en.name}}</td>'
            +'<td> <input class="theInp" type="text" v-on:keyup.enter="offFocus"'
            +' :data-filename="{{post.en.file}}" language="ga" :data-property="{{post.en.name}}"/> </td>'
            +'<td> <input class="theInp" type="text" '
            +' v-bind:filename="string" language="ga" v-bind:property="test" /> </td>'*
            +'</tr>'*/
            +'</tbody></table>'
            +'<button id="next" type="button" class="btn btn-primary">Next</button>'
            +'</div>',
    props: ['posts'],
    methods: {
      OffFocus(){
        console.log('off focus1');
      }
    },

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

        console.log('theData', theData);

        pagnation(start, limit);

        function pagnation(sta,limit) {
          for(let i=start; i<limit; i++) {
            let newRow = $('<tr><td>'+theData[i].en.name+'</td><td>'
            +'<div class="form-group">'
            +'<input filename="'+theData[i].en.file+'"'+
                          +'filename="'+theData[i].en.file+'" class="form-control theInp"'
                          +'property="'+theData[i].en.name+'" lang="ga"/></div></td></tr>');
            table.append(newRow);
          }
        }

        $('#next').click(function(){
          let next = limit;
          if(max_size >= next) {
            limit = limit + limit;
            //table.empty();
            $('#tableBody').html('');
            //console.log(next +' -next- '+limit);
            pagnation(next,limit);
          }
        });

        $('.theInp').blur(function(){
          let textVal = $(this).val();
          console.log('blur');

          if(textVal !== ''){
            let filename = $(this).attr('filename');
            let property = $(this).attr('property');
            let lang = $(this).attr('lang');

            console.log('fileName '+filename);
            console.log('property '+property);
            console.log('language '+lang);

            //var filename = "John";
            //var property = "Smith";
            //var lang

            var trans = {
              property: property,
              filename: filename,
              language: lang,
              textvalue: textVal
            }

            let jsonData = JSON.stringify(trans);
            //sitePersonel.employees.push(employee);
            //console.log(sitePersonel);

            console.log(JSON.stringify(trans));

            $.ajax({
              url: "/api/language",
              type: "POST",
              dataType: "json",
              data: jsonData
            });

            /*let obj = {};
            obj.language = lang;


            obj.property = property;
            obj*/

            //let url = "/api/language?property="+property+"&filename="+filename
                      //+"&language="+lang+"&textvalue="+textVal;

            /*$.post( url, function( data ) {
              console.log('data',data);
            });*/

          }

        });

        /*$('#PreeValue').click(function(){
          var pre = limit-(2*limit);
          if(pre>=0) {
            limit = limit-limit;
            //console.log(pre +' -pre- '+limit);
            table.empty();
            pagnation(pre, limit);
          }
        });*/

      }, response => {
          // error callback
      //);
      });
    }/*,
    methods(){
      offFocus(){
        console.log('offFocus');
      }
    }*/
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
    }]
  }/*,
  methods: {
    OffFocus(){
      console.log('off focus');
    }
  }*/
});
