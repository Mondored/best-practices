<template>
  <div>
    <h4>Change the joints position</h4>
    <select class="option" v-model="command.id" data-cy="selectJointDropDown">
      <option type="number" v-for="item in robot.joints.length" :key="item">{{item}}</option>
    </select>
    <ul>
      <li>x: <input v-model="command.axisX"
              value="0" size="1px"
              data-cy="selectXAxis"/>
      </li>
      <li>y: <input v-model="command.axisY"
              value="0" size="1px"
              data-cy="selectYAxis"/>
      </li>
      <li>z: <input v-model="command.axisZ"
              value="0" size="1px"
              data-cy="selectZAxis"/>
      </li>
    </ul>
    <button class="myButton"
      @click="update(command)"
      data-cy="selectMoveCommand">Add to the list</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { GETTERS, ACTIONS } from '@/store/store.const';
import { mapGetters, mapActions } from 'vuex';
import { Joints } from '@/data/joints';
import { CommandType } from '@/store/types';

export default Vue.extend({
  data() {
    return {
      dislpayCommand: {
        type: CommandType.Joints,
        id: 1,
        axisX: 0,
        axisY: 0,
        axisZ: 0,
      } as Joints,
      command: {
        type: CommandType.Joints,
        id: 1,
        axisX: 0,
        axisY: 0,
        axisZ: 0,
      } as Joints,
    };
  },
  computed: {
    ...mapGetters({ robot: GETTERS.GET_ROBOT }),
  },
  methods: {
    ...mapActions({ addMovementToCommandList: ACTIONS.ADD_MOVEMENT_TO_COMMAND_LIST }),
    update(command: Joints) {
      this.dislpayCommand = {...command};
      this.dislpayCommand.id = this.command.id-1;
      this.addMovementToCommandList(this.dislpayCommand);
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
  padding: 5px;
}
</style>
