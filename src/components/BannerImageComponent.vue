<template>
  <div class="imageContainer">
    <img src="../assets/img-header.jpg" alt="bannerImage" class="bannerImage">
    <div class="overlay"></div>
  </div>
</template>

<style scoped>
.imageContainer {
  position: relative;
  width: 100%;
  padding-top: 55px;
}

.bannerImage {
  width: 100%;  
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
}
</style>