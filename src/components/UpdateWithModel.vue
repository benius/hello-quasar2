<template>
  <div>
    <input type='text' :value='modelValue' @input="$emit('update:modelValue', $event.target.value)" />
  </div>
</template>

<script lang='ts'>
export default {
  name: 'UpdateWithModel',

  props: ['modelValue']
};
</script>

<style scoped>

</style>
