<template>
  <div class="hello">
    <h4>Current tool</h4>
    <Tools/>
    <Joints/>
    <p>Move command</p>
    <Move/>
    <p>Robot finger open/close command</p>
    <RobotTool/>
    <CommandToRun/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Joints from './position/Joints.vue';
import Tools from './position/Tools.vue';
import Move from './MoveCommand.vue';
import RobotTool from './RobotToolCommand.vue';
import CommandToRun from './CommandToRun.vue';

export default Vue.extend({
  name: 'Robotsetup',
  props: {
    msg: String,
  },
  components: {
    Joints,
    Tools,
    Move,
    RobotTool,
    CommandToRun,
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
