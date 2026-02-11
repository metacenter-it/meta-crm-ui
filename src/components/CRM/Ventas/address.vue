<script lang="ts" setup></script>
<template>
  <div>
    <h6 class="layout-h6">Dirección</h6>
    <hr />

    <div class="row mb-1">
      <label for="inputDireccion" class="col-sm-2 col-form-label"
        >Dirección</label
      >
      <div class="col-sm-10">
        <input type="text" class="form-control" id="inputDireccion" />
      </div>
    </div>

    <div class="row mb-1">
      <label for="inputDireccionAlterna" class="col-sm-4 col-form-label"
        >Direccion Alterna</label
      >
      <div class="col-sm-8">
        <input type="text" class="form-control" id="inputDireccionAlterna" />
      </div>
    </div>

    <div class="row mb-1">
      <label for="inputCiudad" class="col-sm-2 col-form-label">Ciudad</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="inputCiudad" />
      </div>
    </div>

    <div class="row mb-1">
      <label for="inputEstado" class="col-sm-2 col-form-label">Estado</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="inputEstado" />
      </div>
    </div>

    <div class="row mb-1">
      <label for="inputCodigoPostal" class="col-sm-4 col-form-label"
        >Código Postal</label
      >
      <div class="col-sm-8">
        <input type="text" class="form-control" id="inputCodigoPostal" />
      </div>
    </div>

    <div class="row mb-1">
      <label for="inputPais" class="col-sm-2 col-form-label">Pais</label>
      <select
        name="pais"
        class="form-select form-select-sm"
        aria-label="Default select example"
      >
        <option selected>Selecciona un campo</option>
        <option value="1">México</option>
        <option value="2">Estados Unidos</option>
        <option value="3">Canada</option>
      </select>
    </div>

    <div class="row mb-1">
      <label for="inputArea" class="col-sm-2 col-form-label">Area</label>
      <select
        name="area"
        class="form-select form-select-sm"
        aria-label="Default select example"
      >
        <option selected>Selecciona un campo</option>
        <option value="1">San Diego County</option>
        <option value="2">Los Angeles County</option>
        <option value="3">Orange County</option>
      </select>
    </div>
  </div>
</template>
