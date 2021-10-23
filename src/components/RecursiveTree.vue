<template>
  <ul>
    <li>
      <template v-if='treeNode.children && treeNode.children.length>0'>
        <h4 class='has-child'
            :class="{ 'is-open': openState.isOpen }"
            @click='openState.isOpen = !openState.isOpen'>
          {{ treeNode.title }}
        </h4>
        <recursive-tree v-show='openState.isOpen'
                        v-for='child in treeNode.children'
                        :key='child.title'
                        :tree-node='child'>
        </recursive-tree>
      </template>
      <a v-else :href='treeNode.url' target='_blank'>{{ treeNode.title }}</a>
    </li>
  </ul>
</template>

<script lang='ts'>
import { defineComponent, PropType, reactive, onMounted } from 'vue';
import { TreeNode } from 'components/models';

export default defineComponent ({
  name: 'RecursiveTree',
  props: {
    treeNode: {
      type: Object as PropType<TreeNode>,
      default: () => ({
        title: '',
        url: '',
        children: []
      })
    }
  },
  setup() {
    let openState = reactive({
      isOpen: false
    })

    onMounted(() => {
        void fetch('/open-data/dq_download_json.php?nid=123026&md5_url=4d8de527a0bcd8a7b1aeae91120f021d')
          .then(res => res.json())
          .then(data => console.log(data));
    })

    return {
      openState
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  list-style-type: none;
}

h4.has-child {
  cursor: pointer;
}

h4.has-child::before {
  content: '+ ';
}

h4.has-child.is-open::before {
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
