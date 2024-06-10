<template>
    <div class="navigation">
        <nav class="navbar navbar-dark bg-dark navbar-expand">
            <div class="container-fluid">
                <img id="logo" class="mx-3 img-fluid rounded" src="../assets/logo.png" alt="logo">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/products">products</a>
                    </li>
                </ul> 
                <h1 class="m-auto text-light">BUYSTUFF.MONEY</h1>
                <form class="d-flex">
                    <input class="form-control mx-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-light" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: 'navigation-bar',
  }
  </script>
  
  <style scoped>
  #logo {
    max-height: 80px;
  }
  </style>
  