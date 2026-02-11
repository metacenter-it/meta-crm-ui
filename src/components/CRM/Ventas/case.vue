<script setup lang="ts"></script>
<template>
  <div>
    <h6 class="layout-h6">Case:</h6>
    <hr />
    <div class="row mb-1">
      <label for="inputTipoCaso" class="col-sm-3 col-form-label"
        >Tipo de Caso</label
      >
      <select
        name="tipoCaso"
        class="form-select form-select-sm select-custom"
        aria-label="Default select example"
      >
        <option selected>Selecciona un campo</option>
        <option value="1">Accidente de Auto</option>
        <option value="2">Resbalón y Caída</option>
        <option value="3">Mordedura de Perro</option>
        <option value="4">Accidente de Camión</option>
      </select>
    </div>

    <div class="row mb-1">
      <label for="inputNumeroPasajeros" class="col-sm-2 col-form-label"
        >Pasajeros</label
      >
      <select
        name="inputNumeroPasajeros"
        class="form-select form-select-sm"
        aria-label="Default select example"
        id="inputNumeroPasajeros"
      >
        <option selected>Selecciona un campo</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">+10</option>
      </select>
    </div>
    <div class="row mb-1">
      <label for="inputTipoLesion" class="col-sm-3 col-form-label"
        >Tipo de Lesión</label
      >
      <select
        name="inputTipoLesion"
        class="form-select form-select-sm select-custom"
        aria-label="Default select example"
        id="inputTipoLesion"
      >
        <option selected>Selecciona un campo</option>
        <option value="1">Fractura</option>
        <option value="2">Corte</option>
        <option value="3">Contusión</option>
        <option value="4">Esguince</option>
        <option value="5">Dislocación</option>
        <option value="6">Lesión de Tejidos Blandos</option>
        <option value="7">Lesión de la Columna Vertebral</option>
        <option value="8">Lesión Cerebral Traumática</option>
        <option value="9">Quemadura</option>
        <option value="10">Amputación</option>
        <option value="11">Otras Lesiones</option>
      </select>
    </div>

    <div class="row mb-1">
      <label for="inputFechaCaso" class="col-sm-5 col-form-label"
        >Fecha del Caso</label
      >
      <div class="col-sm-7">
        <input type="date" class="form-control" id="inputFechaCaso" />
      </div>
    </div>

    <div class="row mb-1">
      <label for="inputStatusCaso" class="col-sm-4 col-form-label"
        >Status del Caso</label
      >
      <select
        name="inputStatusCaso"
        class="form-select form-select-sm select-custom-1"
        aria-label="Default select example"
        id="inputStatusCaso"
      >
        <option selected>Selecciona un campo</option>
        <option value="1">Abierto</option>
        <option value="2">Cerrado</option>
        <option value="3">En Proceso</option>
        <option value="4">En Espera</option>
        <option value="5">Rechazado</option>
      </select>
    </div>

    <div class="row mb-1">
      <label for="inputStatusFirm" class="col-sm-3 col-form-label"
        >Status Firma</label
      >
      <select
        name="inputStatusFirm"
        class="form-select form-select-sm select-custom"
        aria-label="Default select example"
        id="inputStatusFirm"
      >
        <option selected>Selecciona un campo</option>
        <option value="1">Abierto</option>
        <option value="2">Cerrado</option>
        <option value="3">En Proceso</option>
        <option value="4">En Espera</option>
        <option value="5">Rechazado</option>
      </select>
    </div>

    <div class="row mb-1">
      <label for="inputCompania" class="col-sm-4 col-form-label"
        >Nombre Compañía</label
      >
      <div class="col-sm-8">
        <input type="text" class="form-control" id="inputCompania" />
      </div>
    </div>

    <div class="row mb-1">
      <label for="inputDireccionCompania" class="col-sm-4 col-form-label"
        >Dirección Compañía</label
      >
      <div class="col-sm-8">
        <input type="text" class="form-control" id="inputDireccionCompania" />
      </div>
    </div>
  </div>
</template>
