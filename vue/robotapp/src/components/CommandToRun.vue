<template>
  <div class="row">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4>Commands to run:</h4>
      </div>
      <div class="panel-body" v-if="commands.joints.length !== 0 || 
                                    commands.move.length !== 0">
        <p v-for="(command, index) in commands"
          :key="index"
          data-cy="commandSteps">{{command}}</p>
      </div>
      <button class="myButton"
        @click="RUN_COMMANDS()"
        data-cy="runCommandSteps">Run</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default Vue.extend({
  computed: {
    ...mapGetters(['joints','commands']),
  },
  methods: {
    ...mapMutations(['RUN_COMMANDS']),
  }
})
</script>