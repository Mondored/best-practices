<template>
  <div>
		<h4>Change robot fingers (open/close command)</h4>
    <ul>
      <li v-if="robot.tool.parts.length !== 0">
        <p>Selected tool: {{robot.tool.parts[0]}}</p>
        <select v-model="selectedAction" data-cy="selectedToolPartDropDown">
          <option v-for="(item, name) in robot.tool.parts[0]"
            :key="name">{{name}}
          </option>
        </select>
        <select v-model="selectMove" data-cy="selectMoveDropDown">
          <option>Open</option>
          <option>Close</option>
        </select>
        <button class="myButton"
                @click="SET_COMMANDID(),
                        addGripperCommandToList(selectedAction, selectMove, commandId),
                        ADD_GRIPPER_COMMAND(selectedMovement)"
								data-cy="selectGripperCommand">Add to Commans to run</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ToolMove, Move } from '../data/tool';
import { mapGetters, mapMutations } from 'vuex';

export default Vue.extend({
	data() {
		return {
			selectedAction: '',
			selectMove: Move.OPEN,
			selectedMovement: {
        name: '',
				movement: Move.OPEN,
				commandId: 0,
			} as ToolMove,
		};
	},
	computed: {
    ...mapGetters(['robot', 'commandId']),
	},
	methods: {
		...mapMutations(['ADD_GRIPPER_COMMAND','SET_COMMANDID']),
		addGripperCommandToList(selectedAction: string, selectMove: Move, commandId: number) {
      this.selectedMovement = {
				name: selectedAction,
				movement: selectMove,
				commandId: commandId,
			};
		},
	}
})
</script>

<style scoped>
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
