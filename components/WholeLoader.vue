<template>
  <div class="wrap">
    <!-- <img src="@/assets/img/logo/logo.png" alt=""> -->
    <div class="loader"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dark);
  transition: 0.4s;
}

.wrap img {
  width: 220px;
  height: 220px;
}

/* HTML: <div class="loader"></div> */
.loader {
  width: 80px;
  aspect-ratio: 1;
  display: grid;
  border: 8px solid #0000;
  border-radius: 50%;
  border-color: var(--golden) #0000;
  animation: l16 1s infinite linear;
}
.loader::before,
.loader::after {
  content: "";
  grid-area: 1/1;
  margin: 4px;
  border: inherit;
  border-radius: 50%;
}
.loader::before {
  border-color: var(--light-2) #0000;
  animation: inherit;
  animation-duration: 0.5s;
  animation-direction: reverse;
}
.loader::after {
  margin: 16px;
  border-color: #ccc #0000;
}
@keyframes l16 {
  100% {
    transform: rotate(1turn);
  }
}

@media screen and (max-width: 1024px) {
  .wrap img {
    width: 120px;
    height: 120px;
  }
}
</style>
