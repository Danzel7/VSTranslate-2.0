<template>
  <div class="cont" style="width: 800px; margin: auto;">
    <table id="myTable" class="table table-bordered" style="margin-top: 10px;">
      <thead>
        <tr>
          <th>Label</th>
          <th>Translation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='tran of trans' style="height: 75px;">
          <td style="line-height: 56px;">{{tran.label}}</td>
          <td>
            <div v-bind:id="'succ'+tran.id" class="success">*Saved</div>
            <input type="text" v-bind:id="tran.id" class="form-control theInp" v-bind:value="tran.translation" v-on:keyup.enter="update($event.target.id, $event.target.value)" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script type = "text/javascript" >
  export default {
    name: 'translateTable',
    props: ['trans'],
    methods: {
      update(theId, txt) {
        let array = [theId, txt];
        this.$emit('updateTrans', array);
        $('#succ'+theId).fadeIn();

        setTimeout(function(){
          $('#succ'+theId).fadeOut();
        }, 2000);
      },
    }
  }
</script>

<style scoped>
  .theInp{
    margin-top: 14px;
  }
  .success{
    color: green;
    font-size: 10px;
    display: none;
    position: absolute;
  }
  #myTable th{
    background: #f5f5f5;
    color: #666;
  }
</style>
