<script setup lang="ts"></script>
<template>
  <div>
    <h6 class="layout-h6">Abogado:</h6>
    <hr />
    <div class="row mb-1">
      <label for="inputNombreAbogado" class="col-sm-4 col-form-label"
        >Nombre Abogado</label
      >
      <div class="col-sm-8">
        <input type="text" class="form-control" id="inputNombreAbogado" />
      </div>
    </div>

    <div class="row mb-1">
      <label for="inputFechaConsulta" class="col-sm-4 col-form-label"
        >Fecha de Consulta</label
      >
      <div class="col-sm-8">
        <input type="date" class="form-control" id="inputFechaConsulta" />
      </div>
    </div>

    <div class="row mb-1">
      <label for="inputFechaRechazo" class="col-sm-4 col-form-label"
        >Fecha de Rechazo</label
      >
      <div class="col-sm-8">
        <input type="date" class="form-control" id="inputFechaRechazo" />
      </div>
    </div>
  </div>
</template>
