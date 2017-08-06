<template>
  <div>
    <div class="header headerTop"></div>
    <div class="header headerBot">Translations</div>
    <div class="innerCont">
      <Search v-on:searchQuery="search"/>
      <TranslateTable :trans="trans" v-on:updateTrans="update"/>
    </div>
  </div>
</template>

<script>
  var TranslateTable = require('./components/TranslateTable.vue');
  var Search = require('./components/Search.vue');

  export default {
    components: {
      Search,
      TranslateTable
    },
    data: function () {
      return {
        trans: [],
        allTrans: [],
      }
    },
    created: function (){
      let sample = [];

      // Had a problem with the get endpoint
      // so I just created some sample data
      sample.push({id: "1", label: "Hello", translation: "Dia dhuit"});
      sample.push({id: "2", label: "House", translation: "Teach"});
      sample.push({id: "3", label: "Homework", translation: "obair bhaile"});
      sample.push({id: "4", label: "Whiskey", translation: "Uisce beatha"});
      sample.push({id: "5", label: "Boy", translation: ""});
      sample.push({id: "6", label: "Girl", translation: ""});
      sample.push({id: "7", label: "Woman", translation: ""});
      sample.push({id: "8", label: "Man", translation: ""});

      this.allTrans = sample;
      this.trans = sample;
    },
    methods: {
      // filters the list of translations
      // from the text in the search box
      // (passed from Search component)
      search(query) {
        let transArray = [];
        let trans = this.trans;

        if(query) {
          let searchResult = trans.filter(function (el) {
            if(el.label.toLowerCase().indexOf(query.toLowerCase()) > -1){
              transArray.push(el);
            }
          });

          this.trans = transArray;
        }
        else{
          this.trans = this.allTrans;
        }
      },
      // updates translation with value from input
      // (passed from TranslateTable component)
      update(txt) {
        if (txt[1]) {
          let searchResult = this.allTrans.filter(function (el) {
            if(el.id.toLowerCase().indexOf(txt[0].toLowerCase()) > -1){
              el.firstName = txt[1];
            }
          });
        }
      },
    },
  };
</script>

<style>
  .innerCont{
    width: 800px;
    margin: auto;
  }
  .header{
    width: 100%;
  }
  .headerTop{
    background: #2ea3f2;
    color: #fff;
    height: 30px;
  }
  .headerBot{
    text-align: center;
    color: #666666;
    height: 50px;
    line-height: 50px;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.1) !important;
    font-size: 18px;
    margin-bottom: 30px;
  }
</style>
