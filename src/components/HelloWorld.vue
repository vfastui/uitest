<template>
  <h1>{{ msg }}</h1>
  <FFRow>
    <FFCol :span="12">
      按钮：
      <FFButton>我是按钮</FFButton>
      <FFButton type="warning">我是按钮</FFButton>
    </FFCol>
    <FFCol :span="12">
      标签：
      <FFTag>tag1</FFTag>
      <FFTag type="primary">tag2</FFTag>
      <FFTag type="danger" closable>tag3</FFTag>
    </FFCol>
  </FFRow>
  <br>
  <FFRow>
    <FFCol :span="12">
      对话框：
      <FFButton @click="open">基本对话框</FFButton>
      <FFModal v-model="showModal" title="中文和英文">
        内容区
        <template #footer>
          <div style="text-align: right">
            <FFButton type="primary" @click="showModal = false" size="small">关闭</FFButton>
          </div>
        </template>
      </FFModal>
    </FFCol>
    <FFCol :span="12">
      提示：
      <FFTooltip placement="bottom-center" tooltip="怎样才能学好typescript">文件描述</FFTooltip>
    </FFCol>
  </FFRow>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);
    let showModal = ref(false);
    const open = () => {
      showModal.value = true;
    };
    return { count, showModal, open };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
