<script setup lang="ts"></script>
<template>
  <div>
    <h6 class="layout-h6">Firmas</h6>
    <hr />

    <div class="row mb-1">
      <label for="inputStatusDocumentos" class="col-sm-4 col-form-label"
        >Status Documentos</label
      >
      <select
        name="inputStatusDocumentos"
        class="form-select form-select-sm select-custom-1"
        aria-label="Default select example"
        id="inputStatusDocumentos"
      >
        <option selected>Selecciona un campo</option>
        <option value="1">Firmado</option>
        <option value="2">No Firmado</option>
        <option value="3">En Proceso</option>
        <option value="4">En Espera</option>
        <option value="5">Rechazado</option>
      </select>
    </div>

    <div class="row mb-1">
      <label for="inputFechaFirmaDocumentos" class="col-sm-5 col-form-label"
        >Fecha firma Documentos</label
      >
      <div class="col-sm-7">
        <input
          type="date"
          class="form-control"
          id="inputFechaFirmaDocumentos"
        />
      </div>
    </div>
    <div class="row mb-1">
      <label for="inputZoom" class="col-sm-2 col-form-label">Zoom</label>
      <select
        name="inputZoom"
        class="form-select form-select-sm"
        aria-label="Default select example"
        id="inputZoom"
      >
        <option selected>Selecciona un campo</option>
        <option value="1">Sí</option>
        <option value="2">No</option>
      </select>
    </div>

    <div class="row mb-1">
      <label for="inputFuenteLlamada" class="col-sm-4 col-form-label"
        >Fuente Llamada</label
      >
      <div class="col-sm-8">
        <input type="text" class="form-control" id="inputFuenteLlamada" />
      </div>
    </div>

    <div class="row mb-1">
      <label for="inputFechaFuenteLlamada" class="col-sm-4 col-form-label"
        >Fecha de Fuente Llamada</label
      >
      <div class="col-sm-8">
        <input type="date" class="form-control" id="inputFechaFuenteLlamada" />
      </div>
    </div>

    <div class="row mb-1">
      <label for="inputFuenteLlamada" class="col-sm-4 col-form-label"
        >Fuente Llamada 2</label
      >
      <div class="col-sm-8">
        <input type="text" class="form-control" id="inputFuenteLlamada" />
      </div>
    </div>

    <div class="row mb-1">
      <label for="inputFechaFuenteLlamadaDos" class="col-sm-5 col-form-label"
        >Fecha de Fuente Llamada 2</label
      >
      <div class="col-sm-7">
        <input
          type="date"
          class="form-control"
          id="inputFechaFuenteLlamadaDos"
        />
      </div>
    </div>
  </div>
</template>
