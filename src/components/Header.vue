<template>
  <header class="header">
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <h2 class="navBrand">MovieDB</h2>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderVue",
};
</script>

<style scoped>
.header {
  max-width: 1440px;
  margin: 0 auto 20px auto;
}

.container-fluid {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navBrand {
  color: white;
  margin: 0;
}

.navbar {
  background-color: rgba(0, 0, 0, 0.7) !important;
}

.form-control {
  background-color: rgba(0, 0, 0, 0.1);
  color: white;
}
.form-control:focus {
  background-color: rgba(0, 0, 0, 0.1);
  color: white;
}

.form-control::placeholder {
  color: white;
}
</style>
