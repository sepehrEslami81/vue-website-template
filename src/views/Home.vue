<template>
  <v-row>
    <v-col>اینجا صفحه اصلی است</v-col>
    <v-col>URL:{{ baseURL }}</v-col>
  </v-row>
</template>

<script>
export default {
  name: "Home",
  created() {
    this.$swal("سلام. این متن برای تست فونت است");
  },
};
</script>

<style></style>
