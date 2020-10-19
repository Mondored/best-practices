<template>
  <div>
    <select class="option" v-model="command.id">
      <option v-for="item in robot.joints.length" :key="item">{{item}}</option>
    </select>
    <ul >
      <li>x:<input v-model="command.axisX" value="0" size="1px"/></li>
      <li>y:<input v-model="command.axisY" value="0" size="1px"/></li>
      <li>z:<input v-model="command.axisZ" value="0" size="1px"/></li>
    </ul>
    <button class="myButton"
      @click="SET_COMMANDID(),update(command),
              addToCommandList(dislpayCommand)
    ">Add to the list</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapMutations } from 'vuex';
import { Joints } from '@/data/joints';

export default Vue.extend({
  data() {
    return {
      dislpayCommand: {
        id: 1,
        axisX: 0,
        axisY: 0,
        axisZ: 0,
        commandId: 0,
      } as Joints,
      command: {
        id: 1,
        axisX: 0,
        axisY: 0,
        axisZ: 0,
        commandId: 0,
      } as Joints,
      selectIsAvailable: true,
    };
  },
  computed: {
    ...mapGetters(['robot', 'commandId']),
  },
  methods: {
    ...mapMutations(['addToCommandList', 'SET_COMMANDID']),
    update(command: Joints) {
      this.command.commandId = this.commandId;
      this.dislpayCommand = {...command};
    }
  }
})
</script>

<style lang="css" scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
</style>