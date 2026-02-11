<script setup lang="ts"></script>
<template>
  <div>
    <h6 class="layout-h6">Medico en California</h6>
    <hr />

    <div class="row mb-1">
      <label for="inputFechaAccidente" class="col-sm-4 col-form-label"
        >Fecha de Accidente
      </label>
      <div class="col-sm-8">
        <input type="date" class="form-control" id="inputFechaAccidente" />
      </div>
    </div>

    <div class="row mb-1">
      <label for="inputFechaPrimerCita" class="col-sm-4 col-form-label"
        >Fecha Primer Cita
      </label>
      <div class="col-sm-8">
        <input type="date" class="form-control" id="inputFechaPrimerCita" />
      </div>
    </div>

    <div class="row mb-1">
      <label for="inputFechaUltimaCita" class="col-sm-4 col-form-label"
        >Fecha Ultima Cita
      </label>
      <div class="col-sm-8">
        <input type="date" class="form-control" id="inputFechaUltimaCita" />
      </div>
    </div>
  </div>
</template>
