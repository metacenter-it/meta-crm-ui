<script setup lang="ts"></script>
<template>
  <div>
    <h6 class="layout-h6">Forma de Pago</h6>
    <div class="row mb-1">
      <label for="inputFormaPago" class="col-sm-4 col-form-label"
        >Forma de Pago</label
      >
      <select
        name="inputFormaPago"
        class="form-select form-select-sm select-custom-1"
        aria-label="Default select example"
        id="inputFormaPago"
      >
        <option selected>Selecciona un campo</option>
        <option value="1">Efectivo</option>
        <option value="2">Tarjeta de Crédito</option>
        <option value="3">Transferencia Bancaria</option>
        <option value="4">Cheque</option>
        <option value="5">Otro</option>
      </select>
    </div>
  </div>
</template>
