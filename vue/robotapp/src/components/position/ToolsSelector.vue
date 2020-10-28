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
        <div v-show="selectIsAvailable">
          <li class="selectedPartElement">
            {{selected}} is includes: {{Object.keys(tools.parts[selectedId]).length}} gripper
          </li>
          <ul>
            <li class="selectedPartElement" v-for="(items, index) in tools.parts[selectedId]"
              :key="items.name">{{index}}: {{items}}</li>
          </ul>
        </div>
      </ul>
    </div>

    <div v-if="selected !== 'default' && selected !== ''">
      <button class="myButton" v-if="selectIsAvailable === true"
        @click="toolUpdate(selectedId)" data-cy="selectToolButton">
          {{selectIsAvailable ? 'Select' : 'Unselect'}} tool
      </button>
      <button class="myButtonRev" v-else
        @click="removeTool()" data-cy="unSelectToolButton">
          {{selectIsAvailable ? 'Select' : 'Unselect'}} tool
      </button>
      <div>
        <li v-show="!selectIsAvailable" class="selectedPartElement">
            {{selected}} is selected
        </li>
      </div>
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
  padding: 2px;
}
li {
  display: inline-block;
  box-sizing: 0 2px 8px;
  padding: 2px;
  margin: 8px 10px ;
  border: medium none;
}
.selectedPartElement {
  background-color: #f87910bb;
  padding: 5px;
  padding-top: 2px;
  box-shadow: 0 2px 5px black;
}
.myButtonRev {
  box-shadow: inset 0px 1px 0px 0px #a4e271;
  background: linear-gradient(to bottom, #89c403 5%, #77a809 100%);
  background-color: #d67404;
  border-radius: 6px;
  border: 1px solid #74b807;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #528009;
}
.myButtonRev:hover {
  background: linear-gradient(to bottom, #77a809 5%, #89c403 100%);
  background-color: #77a809;
}
.myButtonRev:active {
  position: relative;
  top: 1px;
}
</style>
