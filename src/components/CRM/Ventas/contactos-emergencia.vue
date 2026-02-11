<script setup lang="ts"></script>
<template>
  <div>
    <h6 class="layout-h6">Contacto de Emergencia:</h6>
    <hr />

    <div class="row mb-1">
      <label for="inputNombreEmergencia" class="col-sm-4 col-form-label"
        >Nombre Emergencia</label
      >
      <div class="col-sm-8">
        <input type="text" class="form-control" id="inputNombreEmergencia" />
      </div>
    </div>

    <div class="row mb-1">
      <label for="inputTelefonoEmergencia" class="col-sm-5 col-form-label"
        >Telefono Emergencia</label
      >
      <div class="col-sm-7">
        <input type="text" class="form-control" id="inputTelefonoEmergencia" />
      </div>
    </div>
  </div>
</template>
