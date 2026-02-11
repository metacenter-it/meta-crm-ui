<script setup lang="ts"></script>
<template>
  <div>
    <h6 class="layout-h6">Informacion Personal:</h6>
    <hr />
    <div class="row mb-1">
      <label for="inputNombre" class="col-sm-2 col-form-label">Nombre</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="inputNombre" />
      </div>
    </div>

    <div class="row mb-1">
      <label for="inputPhone" class="col-sm-2 col-form-label">Phone</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="inputPhone" />
      </div>
    </div>

    <div class="row mb-1">
      <label for="inputMobile" class="col-sm-2 col-form-label">Mobile</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="inputMobile" />
      </div>
    </div>

    <div class="row mb-1">
      <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input type="email" class="form-control" id="inputEmail" />
      </div>
    </div>

    <div class="row mb-1">
      <label for="inputEmail" class="col-sm-2 col-form-label">Idioma</label>
      <select
        name="idioma"
        class="form-select form-select-sm"
        aria-label="Default select example"
      >
        <option selected>Selecciona un campo</option>
        <option value="1">Español</option>
        <option value="2">Ingles</option>
        <option value="3">Frances</option>
        <option value="4">Portugues</option>
      </select>
    </div>
  </div>
</template>
