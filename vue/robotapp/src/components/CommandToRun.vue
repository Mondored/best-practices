<template>
  <div class="row">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4>Commands to run:</h4>
      </div>
      <div class="panel-body" v-if="commandToRun.joints.length !== 0
                           || commandToRun.toolMovement.length !== 0">
        <p v-for="(command, index) in commandToRun"
          :key="index"
          data-cy="commandSteps">{{command}}</p>
      </div>
      <button class="myButton"
        @click="runCommans()"
        data-cy="runCommandSteps">Run</button>
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
      commandToRun: GETTERS.GET_COMMAND_TO_RUN
    }),
  },
  methods: {
    ...mapActions({
      runCommans: ACTIONS.RUN_COMMANDS
    })
  }
})
</script>