<template>
  <div>
    <div>
      <h4>Current tool</h4>
      <select v-if="selectIsAvailable"
              v-model="selected"
              data-cy="selectToolDropDown">
        <option disabled value="default">Please select a tool</option>
        <option v-for="part in tools.parts"
              :key="part.gripper1">
              {{part}}
        </option>
      </select>
    </div>

    <div v-if="selected !== 'default'">
      <button v-if="selectIsAvailable === true"
        @click="toolUpdate(selected)" data-cy="selectToolButton">
          {{selectIsAvailable ? 'Select' : 'Unselect'}} tool
      </button>
      <button v-else
        @click="removeTool()" data-cy="unSelectToolButton">
          {{selectIsAvailable ? 'Select' : 'Unselect'}} tool
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ACTIONS, GETTERS, MUTATIONS } from '@/store/store.const';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { Parts } from '@/data/tool';

export default Vue.extend({
  name: 'ToolsSelector',
  data() {
    return {
      selected: [] as Parts[],
      selectIsAvailable: true,
    }
  },
  computed: {
    ...mapGetters({
      tools: GETTERS.GET_TOOLS
    }),
  },
  methods:{
    ...mapMutations({
      updateUsedTool: MUTATIONS.UPDATE_USED_TOOL,
      removeUsedTool: MUTATIONS.REMOVE_USED_TOOL
    }),
    /* ...mapActions({
      updateUsedTool: ACTIONS.UPDATE_USED_TOOL,
      removeUsedTool: ACTIONS.REMOVE_USED_TOOL
    }), */
    toolUpdate(selectedTool: Parts){
      this.updateUsedTool(selectedTool);
      this.unSelect();
    },
    removeTool(){
      this.unSelect();
      this.removeUsedTool();
    },
    unSelect(){
      this.selectIsAvailable = !this.selectIsAvailable;
    }
  }
});
</script>
