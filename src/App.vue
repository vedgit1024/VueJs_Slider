<template>
  <div id="app">
    <h1>Most-watched films</h1>
    <SliderC />
  </div>
</template>

<script>
import SliderC from "./components/SliderC.vue";

export default {
  name: "App",
  components: {
    SliderC,
  },
};
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.9)
    ),
    url(camera_bg_image.jpg);
  background-size: cover;

  overflow: auto;

  /* background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.7)
  );

  overflow: auto; */
}
</style>
