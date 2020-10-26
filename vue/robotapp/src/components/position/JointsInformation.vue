<template>
  <div>
    <h4>Joints position</h4>
    <ul v-for="(joint, index) in robot.joints"
        :key="joint.id"
        @click.right="setJointIndex(index)">
      <li class="axis" data-cy="jointElements">Joint{{ joint.id + 1 }} (
        x: <input readonly v-model="joint.axisX" value="joint.axisX" size="1px"/>,
        y: <input readonly v-model="joint.axisY" value="joint.axisY" size="1px"/>,
        z: <input readonly v-model="joint.axisZ" value="joint.axisZ" size="1px"/> )
      </li>
    </ul>
    <button @click="addNewJoint()" class="myButton"
            data-cy="addJointButton">Add Joint element</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ACTIONS, GETTERS, MUTATIONS } from '@/store/store.const';
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default Vue.extend({
  name: 'JointsInformation',
  computed: {
    ...mapGetters({ robot: GETTERS.GET_ROBOT }),
  },
  methods: {
    ...mapMutations({
      addNewJoint: MUTATIONS.ADD_NEW_JOINT,
      setJointIndex: MUTATIONS.SET_JOINTINDEX
    }),
    ...mapActions({
      addNewJoint: ACTIONS.ADD_NEW_JOINT,
      setJointIndex: ACTIONS.SET_JOINTINDEX
    })
  },
});
</script>

<style scoped>
h4 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 0 10px;
}
.axis {
  background-color: #3ba809;
}
</style>
