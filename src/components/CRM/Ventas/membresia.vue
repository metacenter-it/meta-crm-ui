<script setup lang="ts"></script>
<template>
  <div>
    <h6 class="layout-h6">Membresia</h6>
    <hr />
    <div class="row mb-1">
      <label for="inputCodigoMembresia" class="col-sm-4 col-form-label"
        >Codigo de Membresia
      </label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="inputCodigoMembresia" />
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-sm-12 offset-sm-1">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="inputMembresiaEnviada"
          />
          <label class="form-check-label" for="inputMembresiaEnviada">
            Membresia Enviada
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
            Segunda Entrevista
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
