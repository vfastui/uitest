<template>
  <FFTheme></FFTheme>
  <HelloWorld msg="Hello FastUI"/>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup: () => {
    const count = ref(0);
    let showModal = ref(false);
    const open = () => {
      showModal.value = true;
    };

    return {count, showModal, open};
  }

})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
