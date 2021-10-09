<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>

    <!-- RecursiveTree -->
    <div>
      <recursive-tree v-show='true'
                      v-for='book in books'
                      :key='book.title'
                      :tree-node='book'>
      </recursive-tree>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta, TreeNode } from 'components/models';
import ExampleComponent from 'components/CompositionComponent.vue';
import RecursiveTree from 'components/RecursiveTree.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components: { ExampleComponent, RecursiveTree },
  setup() {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1'
      },
      {
        id: 2,
        content: 'ct2'
      },
      {
        id: 3,
        content: 'ct3'
      },
      {
        id: 4,
        content: 'ct4'
      },
      {
        id: 5,
        content: 'ct5'
      }
    ]);
    const meta = ref<Meta>({
      totalCount: 1200
    });

    const books = loadBookData();

    function loadBookData(): TreeNode[] {
      return [
        {
          title: '好書推薦',
          children: [
            {
              title: 'Git',
              children: [{
                title: '為你自己學 Git',
                url: 'https://www.tenlong.com.tw/products/9789864342662'
              }]
            },
            {
              title: '前端開發',
              children: [
                {
                  title: '金魚都能懂的 CSS 選取器',
                  url: 'https://www.tenlong.com.tw/products/9789864344994'
                },
                {
                  title: '0 陷阱！0 誤解！8 天重新認識 JavaScript！',
                  url: 'https://www.tenlong.com.tw/products/9789864344130'
                },
                {
                  title: '讓 TypeScript 成為你全端開發的 ACE！',
                  url: 'https://www.tenlong.com.tw/products/9789864344895'
                }
              ]
            },
            {
              title: 'IoT',
              children: [{
                title: 'IoT沒那麼難！新手用 JavaScript 入門做自己的玩具！',
                url: 'https://www.tenlong.com.tw/products/9789864345328'
              }]
            },
            {
              title: 'Chatbot',
              children: [{
                title: '人人可作卡米狗：從零打造自己的 LINE 聊天機器人',
                url: 'https://www.tenlong.com.tw/products/9789864342938'
              }]
            }
          ]
        },

        {
          title: '好書推薦2',
          children: [
            {
              title: 'Git2',
              children: [{
                title: '為你自己學 Git',
                url: 'https://www.tenlong.com.tw/products/9789864342662'
              }]
            },
            {
              title: '前端開發2',
              children: [
                {
                  title: '金魚都能懂的 CSS 選取器',
                  url: 'https://www.tenlong.com.tw/products/9789864344994'
                },
                {
                  title: '0 陷阱！0 誤解！8 天重新認識 JavaScript！',
                  url: 'https://www.tenlong.com.tw/products/9789864344130'
                },
                {
                  title: '讓 TypeScript 成為你全端開發的 ACE！',
                  url: 'https://www.tenlong.com.tw/products/9789864344895'
                }
              ]
            },
            {
              title: 'IoT2',
              children: [{
                title: 'IoT沒那麼難！新手用 JavaScript 入門做自己的玩具！',
                url: 'https://www.tenlong.com.tw/products/9789864345328'
              }]
            },
            {
              title: 'Chatbot2',
              children: [{
                title: '人人可作卡米狗：從零打造自己的 LINE 聊天機器人',
                url: 'https://www.tenlong.com.tw/products/9789864342938'
              }]
            }
          ]
        }
      ];
    }

    return { todos, meta, books };
  }
});
</script>
