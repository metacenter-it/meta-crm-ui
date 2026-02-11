<script setup lang="ts">
import InformacionPersonal from "@/components/CRM/Ventas/informacion-personal.vue";
import ContactosEmergencia from "@/components/CRM/Ventas/contactos-emergencia.vue";
import Addresses from "@/components/CRM/Ventas/address.vue";
import Intake from "@/components/CRM/Ventas/intake.vue";
import Case from "@/components/CRM/Ventas/case.vue";
import Lawyer from "@/components/CRM/Ventas/lawyer.vue";
import DocumentSignStatus from "./document-sign-status.vue";
import InformacionAdicional from "@/components/CRM/Ventas/informacion-adicional.vue";
import FormDePago from "@/components/CRM/Ventas/form-de-pago.vue";
import Membresia from "./membresia.vue";
import Supervision from "./supervision.vue";
import Medicos from "../Medicos/Medicos.vue";
import TipoAseguranza from "./tipo-aseguranza.vue";
import MedicoCalifornia from "./medico-california.vue";
</script>

<template>
  <div class="container-fluid mt-5">
    <form>
      <div class="row g-1">
        <!--Columna 1-->
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <InformacionPersonal />
              <ContactosEmergencia />
              <Addresses />
              <Intake />
            </div>
          </div>
        </div>
        <!--Columna 2-->
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <Case />
              <Lawyer />
              <DocumentSignStatus />
            </div>
          </div>
        </div>
        <!--Columna 3-->
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <InformacionAdicional />
              <FormDePago />
              <Membresia />
              <Supervision />
            </div>
          </div>
        </div>
        <!--Columna 4-->
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <Medicos />
              <TipoAseguranza />
              <MedicoCalifornia />
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12">
          <button type="submit" class="btn btn-dark btn-r">Enviar</button>
          <button type="reset" class="btn btn-danger">Limpiar</button>
        </div>
      </div>
    </form>
  </div>
</template>
<style scoped>
.btn-r {
  margin-right: 10px;
}
</style>
