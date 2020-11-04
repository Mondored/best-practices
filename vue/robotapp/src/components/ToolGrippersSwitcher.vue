<template>
  <div>
    <h4>Change robot fingers (open/close command)</h4>
    <ul>
      <li v-if="tools[robot.tool].length !== 0">
        <select v-model="selectedAction"
          data-cy="selectedToolPartDropDown">
          <option v-for="(item, index) in tools[robot.tool].parts"
            :key="index">{{index+1}}
          </option>
        </select>
        <select v-model="selectGripperState" data-cy="selectMoveDropDown">
          <option>Open</option>
          <option>Close</option>
        </select>
        <button class="myButton"
          @click="gripperCommandUpdate(selectedAction, selectGripperState)"
          data-cy="selectGripperCommand">Add to Commans to run</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { GETTERS, ACTIONS } from '@/store/store.const';
import { mapGetters, mapActions } from 'vuex';
import { ToolMove, GripperState } from '../data/tool';
import { CommandType } from '@/store/types';

export default Vue.extend({
  data() {
    return {
      selectedAction: '',
      selectGripperState: GripperState.OPEN,
      selectedMovement: {
        type: CommandType.ToolMove,
        indexId: 0,
        movement: GripperState.OPEN,
      } as ToolMove,
    };
  },
  computed: {
    ...mapGetters({
      robot: GETTERS.GET_ROBOT,
      tools: GETTERS.GET_TOOLS
    }),
  },
  methods: {
    ...mapActions({ addGripperCommand: ACTIONS.ADD_GRIPPER_COMMAND }),
    gripperCommandUpdate(selectedAction: number, selectGripperState: GripperState) {
			this.addGripperCommandToList(selectedAction, selectGripperState);
    },
    addGripperCommandToList(selectedAction: number, selectGripperState: GripperState) {
      this.selectedMovement = {
        type: CommandType.ToolMove,
        indexId: selectedAction,
        movement: selectGripperState,
      };
      this.addGripperCommand(this.selectedMovement)
    },
  }
})
</script>

<style scoped>
ul{
  list-style-type: none;
  padding: 2px;
}
.myButton {
  box-shadow:inset 0px 1px 0px 0px #a4e271;
  background:linear-gradient(to bottom, #89c403 5%, #77a809 100%);
  background-color:#89c403;
  border-radius:6px;
  border:1px solid #74b807;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial;
  font-size:15px;
  font-weight:bold;
  padding:6px 24px;
  text-decoration:none;
  text-shadow:0px 1px 0px #528009;
}
.myButton:hover {
  background:linear-gradient(to bottom, #77a809 5%, #89c403 100%);
  background-color:#77a809;
}
.myButton:active {
  position:relative;
  top:1px;
}
</style>
