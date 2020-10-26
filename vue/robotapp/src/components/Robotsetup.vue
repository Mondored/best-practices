<template>
  <div class="robotsetup">
    <tools-selector/>
    <joints-information/>
    <joints-position-changer/>
    <tool-gippers-switcher/>
    <command-to-run/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import JointsInformation from './position/JointsInformation.vue';
import ToolsSelector from './position/ToolsSelector.vue';
import JointsPositionChanger from './position/JointsPositionChanger.vue';
import ToolGippersSwitcher from './ToolGippersSwitcher.vue';
import CommandToRun from './CommandToRun.vue';

export default Vue.extend({
  name: 'Robotsetup',
  props: {
    msg: String,
  },
  components: {
    JointsInformation,
    ToolsSelector,
    JointsPositionChanger,
    ToolGippersSwitcher,
    CommandToRun,
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
