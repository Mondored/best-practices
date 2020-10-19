<template>
  <div>
    <div>
      <select v-if="selectIsAvailable" v-model="selected">
        <option disabled value="default">Please select a tool</option>
        <option v-for="part in tools.parts" :key="part.finger1">
          {{part}}
        </option>
      </select>
    </div>
    <div v-if="selected !== 'default'">
      <button v-if="selectIsAvailable === true"
        @click="updateUsedTool(selectedTool),updateTool(selected)">
          {{selectIsAvailable ? 'Select' : 'Unselect'}} tool
      </button>
      <button v-else
        @click="removeUsedTool(),updateTool(selected)">
          {{selectIsAvailable ? 'Select' : 'Unselect'}} tool
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapMutations } from  'vuex';
import { RobotHand } from '@/data/tool';

export default Vue.extend({
  name: 'Tools',
  data() {
    return {
      selected: 'default',
      selectedTool: {
        parts: [{
          gripper1: true,
          gripper2: true,
          gripper3: true,
          gripper4: true,
          gripper5: true,
        }]
      } as RobotHand,
      unselectTool: {parts: []} as RobotHand,
      selectIsAvailable: true,
    }
  },
  computed: {
    ...mapGetters(['tools']),
  },
  methods:{
    ...mapMutations(['updateUsedTool','removeUsedTool']),
    updateTool(selected: RobotHand) {
      if( this.selectIsAvailable === false ) {
        this.selectedTool = this.unselectTool;
        this.selectIsAvailable = !this.selectIsAvailable;
      } else {
        this.selectedTool = {...selected};
        this.selectIsAvailable = !this.selectIsAvailable;
      }
    },
  }
});
</script>
