<template>
  <div>
    <div>
      <h4>Current tool</h4>
      <select v-if="selectIsAvailable" v-model="selected"
              data-cy="selectToolDropDown">
        <option disabled value="default">Please select a tool</option>
        <option v-for="(item, index) in tools.name"
          :key="item.name" :selectedId="index">{{item}}</option>
      </select>
      <ul v-if="selected !== ''">
        <li> Grippers status:{{selected}}</li>
        <ul>
          <li v-for="items in tools.parts[selectedId]"
            :key="items.name">{{items}}</li>
        </ul>
      </ul>
    </div>

    <div v-if="selected !== 'default'">
      <button v-if="selectIsAvailable === true"
        @click="toolUpdate(selectedId)" data-cy="selectToolButton">
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
import { GETTERS, ACTIONS } from '@/store/store.const';
import { mapGetters, mapActions } from 'vuex';

export default Vue.extend({
  name: 'ToolsSelector',
  data() {
    return {
      selected: '',
      selectIsAvailable: true,
      selectedId: 0,
    }
  },
  computed: {
    ...mapGetters({
      tools: GETTERS.GET_TOOLS
    }),
  },
  methods:{
    ...mapActions({
      updateUsedTool: ACTIONS.UPDATE_USED_TOOL,
      removeUsedTool: ACTIONS.REMOVE_USED_TOOL
    }),
    toolUpdate(selectedId: number){
      this.updateUsedTool(selectedId);
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

<style lang="css" scoped>
ul{
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  box-sizing: 0 2px 8px;
  padding: 5px;
  margin: 0 10px;
}
</style>
