<template>
  <div>
    <div>
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
        @click="updateUsedTool(selected),unSelect()" data-cy="selectToolButton">
          {{selectIsAvailable ? 'Select' : 'Unselect'}} tool
      </button>
      <button v-else
        @click="unSelect(),removeUsedTool()" data-cy="unSelectToolButton">
          {{selectIsAvailable ? 'Select' : 'Unselect'}} tool
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapMutations } from 'vuex';
import { Parts } from '@/data/tool';

export default Vue.extend({
  name: 'Tools',
  data() {
    return {
      selected: [] as Parts[],
      selectIsAvailable: true,
    }
  },
  computed: {
    ...mapGetters(['tools']),
  },
  methods:{
    ...mapMutations(['updateUsedTool','removeUsedTool']),
    unSelect(){
      this.selectIsAvailable = !this.selectIsAvailable;
    }
  }
});
</script>
