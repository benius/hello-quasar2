<template>
  <ul>
    <li>
      <template v-if='children.length>0'>
        <h2 class='has-child'
            :class="{ 'is-open': isOpen }"
            @click='isOpen = !isOpen'>
          {{ title }}
        </h2>
        <recursive-tree v-show='isOpen'
                        v-for='child in children'
                        :key='child.name'
                        :title='child.name'
                        :children='child.childNodes'
                        :url='child.url'>
        </recursive-tree>
      </template>
      <a v-else :href='url' target='_blank'>{{ title }}</a>
    </li>
  </ul>

</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent ({
  name: 'RecursiveTree',
  props: {
    title: String,
    url: String,
    children: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isOpen: false
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app > ul > li {
  margin-left: 0;
}

ul > li {
  display: block;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
  padding: 8px;
  background-color: #eee;
}

h2.has-child {
  cursor: pointer;
}

h2.has-child::before {
  content: '+ ';
}

h2.has-child.is-open::before {
  content: '- ';
}

a {
  color: #333;
  text-decoration: none;
}

a:hover {
  color: red;
}
</style>
