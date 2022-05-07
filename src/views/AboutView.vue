<template>
  <div class="about">
    <h1>This is a count page</h1>
    <PanelViewVue></PanelViewVue>
    <ControllViewVue></ControllViewVue>
  </div>
</template>

<script>
import ControllViewVue from "./ControllView.vue";
import PanelViewVue from "./PanelView.vue";

export default {
    components: { 
      ControllViewVue,
      PanelViewVue,
    }
}
</script>