<template>
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4>Commands to run:</h4>
        </div>
        <div class="panel-body">
          <p v-for="(command, index) in commands"
            :key="index">{{command}}</p>
        </div>
        <button class="myButton">Run</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  computed: {
    ...mapGetters(['joints','commands']),
  }
})
</script>