<script lang="ts" setup></script>
<template>
  <div>
    <h6 class="layout-h6">Intake:</h6>
    <hr />

    <div class="row mb-1">
      <label for="inputEnviaAbogado" class="col-sm-5 col-form-label"
        >Fecha de envío a Abogado</label
      >
      <div class="col-sm-7">
        <input type="date" class="form-control" id="inputEnviaAbogado" />
      </div>
    </div>

    <div class="row mb-1">
      <label for="inputFuenteLlamada" class="col-sm-4 col-form-label"
        >Fuente de la Llamada</label
      >
      <div class="col-sm-8">
        <input type="text" class="form-control" id="inputFuenteLlamada" />
      </div>
    </div>

    <div class="row mb-1">
      <label for="inputFechaFuenteLlamada" class="col-sm-5 col-form-label"
        >Fecha de la fuente de Llamada</label
      >
      <div class="col-sm-7">
        <input type="date" class="form-control" id="inputFechaFuenteLlamada" />
      </div>
    </div>
  </div>
</template>
