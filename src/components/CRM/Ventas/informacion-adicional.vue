<script setup lang="ts"></script>
<template>
  <div>
    <h6 class="layout-h6">Información Adicional</h6>
    <hr />
    <div class="row mb-1">
      <label for="inputStatusDocumentos" class="col-sm-4 col-form-label"
        >Referencia</label
      >
      <select
        name="inputStatusDocumentos"
        class="form-select form-select-sm select-custom-1"
        aria-label="Default select example"
        id="inputStatusDocumentos"
      >
        <option selected>Selecciona un campo</option>
        <option value="1">Google</option>
        <option value="2">Facebook</option>
        <option value="3">Instagram</option>
        <option value="4">Twitter</option>
        <option value="5">LinkedIn</option>
        <option value="6">Recomendación</option>
        <option value="7">Otro</option>
      </select>
    </div>

    <div class="row mb-1">
      <label for="inputReferidoPor" class="col-sm-4 col-form-label"
        >Referido por
      </label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="inputReferidoPor" />
      </div>
    </div>

    <div class="row mb-1">
      <label for="inputFechaCumpleanos" class="col-sm-4 col-form-label"
        >Fecha Cumpleaños</label
      >
      <div class="col-sm-8">
        <input type="date" class="form-control" id="inputFechaCumpleanos" />
      </div>
    </div>

    <div class="row mb-1">
      <label for="inputStatusDocumentos" class="col-sm-4 col-form-label"
        >Genero</label
      >
      <select
        name="inputStatusDocumentos"
        class="form-select form-select-sm select-custom-1"
        aria-label="Default select example"
        id="inputStatusDocumentos"
      >
        <option selected>Selecciona un campo</option>
        <option value="1">Masculino</option>
        <option value="2">Femenino</option>
        <option value="3">Otro</option>
      </select>
    </div>

    <div class="row mb-1">
      <label for="inputFechaLesion" class="col-sm-4 col-form-label"
        >Fecha de Lesion
      </label>
      <div class="col-sm-8">
        <input type="date" class="form-control" id="inputFechaLesion" />
      </div>
    </div>

    <div class="row mb-1">
      <label for="inputPostTerminacion" class="col-sm-4 col-form-label"
        >Post Terminación</label
      >
      <select
        name="inputPostTerminacion"
        class="form-select form-select-sm select-custom-1"
        aria-label="Default select example"
        id="inputPostTerminacion"
      >
        <option selected>Selecciona un campo</option>
        <option value="1">Sí</option>
        <option value="2">No</option>
      </select>
    </div>
  </div>
</template>
