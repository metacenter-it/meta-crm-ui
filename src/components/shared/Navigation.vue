<script setup lang="ts"></script>
<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand text-light" href="#">Metacenter - CRM</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink
              class="nav-link active text-light"
              aria-current="page"
              to="/"
              >Inicio</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-light" to="/contactos"
              >Contactos</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-light" to="/medicos"
              >Medicos/Hospitales</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-light" to="/agentes"
              >Ventas</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-light" to="/marketing"
              >Marketing Publicidad</RouterLink
            >
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link text-light" to="/abogados"
              >Abogados</RouterLink
            >
          </li>
        </ul>
        <span class="navbar-text"> Settings </span>
      </div>
    </div>
  </nav>
</template>
