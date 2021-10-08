<template>
  <div>
    <div>Book Name: <input type='text' v-model='bookInfo.name'></div>
    <div>Author: <input type='text' v-model='bookInfo.author'></div>
    <div>Published Date: <input type='text' v-model='bookInfo.publishedAt'></div>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'UpdateWithEvent',

  props: {
    id: String,
    name: String,
    author: String,
    publishedAt: String
  },

  data() {
    return {
      bookInfo: {
        id: this.id,
        name: this.name,
        author: this.author,
        publishedAt: this.publishedAt
      }
    };
  },

  watch: {
    bookInfo: {
      // set to true to detect the change of the properties of object bookInfo
      deep: true,
      handler(val) {
        this.$emit('update', val);
      }
    }
  }
};
</script>

<style scoped>

</style>
