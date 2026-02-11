<script setup lang="ts"></script>
<template>
  <div>
    <h6 class="layout-h6">Supervisión:</h6>
    <hr />

    <div class="row mb-1">
      <label for="inputAprovadorPor" class="col-sm-4 col-form-label"
        >Aprovador por
      </label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="inputAprovadorPor" />
      </div>
    </div>

    <div class="row mb-1">
      <label for="inputNombreOperador" class="col-sm-4 col-form-label"
        >Nombre del Operador
      </label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="inputNombreOperador" />
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-sm-12 offset-sm-1">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="inputSegundaEntrevista"
          />
          <label class="form-check-label" for="inputSegundaEntrevista">
            Consulta Verificada
          </label>
        </div>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-sm-12 offset-sm-1">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="inputSegundaEntrevista"
          />
          <label class="form-check-label" for="inputSegundaEntrevista">
            Llamada Calibrada
          </label>
        </div>
      </div>
    </div>

    <div class="row mb-1">
      <label for="inputDocumentoEnviadoPor" class="col-sm-4 col-form-label"
        >Documento Enviado por</label
      >
      <select
        name="inputDocumentoEnviadoPor"
        class="form-select form-select-sm select-custom-1"
        aria-label="Default select example"
        id="inputDocumentoEnviadoPor"
      >
        <option selected>Selecciona un campo</option>
        <option value="1">Masculino</option>
        <option value="2">Femenino</option>
      </select>
    </div>

    <div class="row mb-1">
      <label for="inputFirmaDocumentoPor" class="col-sm-4 col-form-label"
        >Firma Documento por</label
      >
      <select
        name="inputFirmaDocumentoPor"
        class="form-select form-select-sm select-custom-1"
        aria-label="Default select example"
        id="inputFirmaDocumentoPor"
      >
        <option selected>Selecciona un campo</option>
        <option value="1">Masculino</option>
        <option value="2">Femenino</option>
      </select>
    </div>
  </div>
</template>
