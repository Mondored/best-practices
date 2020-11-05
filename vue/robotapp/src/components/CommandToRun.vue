<template>
  <div class="row">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4>Commands to run:</h4>
      </div>
      <div  v-if="commandToRun.length !== 0">
        <ul>
          <li class="listItems" v-for="(command, index) in commandToRun" :key="index"
              data-cy="commandSteps">{{command}}</li>
        </ul>
      </div>
      <button class="myButton" @click="runCmds()" data-cy="runCommandSteps">Run</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { GETTERS, ACTIONS } from '@/store/store.const';
import { mapGetters, mapActions } from 'vuex';

export default Vue.extend({
  computed: {
    ...mapGetters({
      commandToRun: GETTERS.GET_COMMAND_TO_RUN,
      selectedTool: GETTERS.GET_SELECTED_TOOL,
    }),
  },
  methods: {
    ...mapActions({
      runCommands: ACTIONS.RUN_COMMANDS
    }),
    runCmds() {
      if (this.selectedTool !== ''){
        this.runCommands();
      }
    }
  }
})
</script>

<style scoped>
ul{
  list-style-type: none;
  padding: 2px;
}
li {
  display: table;
  box-sizing: 0 2px 8px;
  padding: 2px;
  margin: 8px 10px ;
  border: medium none;
}
.listItems {
  background-color: #f87910bb;
  padding: 5px;
  padding-top: 2px;
  box-shadow: 0 2px 5px black;
}
</style>
