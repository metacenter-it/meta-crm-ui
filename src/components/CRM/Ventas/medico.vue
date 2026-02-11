<script setup lang="ts"></script>
<template>
  <div>
    <h6 class="layout-h6">Medico:</h6>
    <div class="row mb-1">
      <label for="inputNombreMedico" class="col-sm-4 col-form-label"
        >Nombre del Medico
      </label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="inputNombreMedico" />
      </div>
    </div>
    <div class="row mb-1">
      <label for="inputNombreMedico" class="col-sm-4 col-form-label"
        >1er Contacto Medico
      </label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="inputNombreMedico" />
      </div>
    </div>
    <div class="row mb-1">
      <label for="inputNombreMedico" class="col-sm-4 col-form-label"
        >Cita Medica por
      </label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="inputNombreMedico" />
      </div>
    </div>
    <div class="row mb-1">
      <label for="inputNombreMedico" class="col-sm-4 col-form-label"
        >2 Cita Medica por
      </label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="inputNombreMedico" />
      </div>
    </div>
    <div class="row mb-1">
      <label for="inputNombreMedico" class="col-sm-4 col-form-label"
        >2da Cita Medica por
      </label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="inputNombreMedico" />
      </div>
    </div>
    <div class="row mb-1">
      <label for="inputNombreMedico" class="col-sm-4 col-form-label"
        >Clinica/Hospital
      </label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="inputNombreMedico" />
      </div>
    </div>
    <div class="row mb-1">
      <label for="inputNombreMedico" class="col-sm-4 col-form-label"
        >Status Clinica/Hospital
      </label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="inputNombreMedico" />
      </div>
    </div>
    <div class="row mb-1">
      <label for="inputNombreMedico" class="col-sm-4 col-form-label"
        >Hecho por la Clinica/Hospital
      </label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="inputNombreMedico" />
      </div>
    </div>

    <div class="row mb-1">
      <label for="inputNombreAseguranza" class="col-sm-4 col-form-label"
        >Nombre Aseguranza</label
      >
      <select
        name="inputNombreAseguranza"
        class="form-select form-select-sm select-custom-1"
        aria-label="Default select example"
        id="inputNombreAseguranza"
      >
        <option selected>Selecciona un campo</option>
        <option value="ACE">American Insurance Company</option>
      </select>
    </div>

    <div class="row mb-1">
      <label for="inputEAMS" class="col-sm-4 col-form-label">EAMS#</label>
      <select
        name="inputEAMS"
        class="form-select form-select-sm select-custom-1"
        aria-label="Default select example"
        id="inputEAMS"
      >
        <option selected>Selecciona un campo</option>
        <option value="1">1</option>
      </select>
    </div>

    <div class="row mb-1">
      <label for="inputSustitucionAbogado" class="col-sm-4 col-form-label"
        >Sustitucion Abogado</label
      >
      <select
        name="inputSustitucionAbogado"
        class="form-select form-select-sm select-custom-1"
        aria-label="Default select example"
        id="inputSustitucionAbogado"
      >
        <option selected>Selecciona un campo</option>
        <option value="si">Si</option>
        <option value="no">No</option>
      </select>
    </div>
  </div>
</template>
