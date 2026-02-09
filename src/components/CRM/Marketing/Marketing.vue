<script setup lang="ts"></script>

<template>
  <div class="container-fluid mt-5 body-setup">
    <form>
      <div class="row g-1">
        <!--Columna 1-->
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <h6 class="layout-h6">Informacion Personal:</h6>
              <hr />
              <div class="row mb-1">
                <label for="inputNombre" class="col-sm-2 col-form-label"
                  >Nombre</label
                >
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputNombre" />
                </div>
              </div>

              <div class="row mb-1">
                <label for="inputPhone" class="col-sm-2 col-form-label"
                  >Phone</label
                >
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputPhone" />
                </div>
              </div>

              <div class="row mb-1">
                <label for="inputMobile" class="col-sm-2 col-form-label"
                  >Mobile</label
                >
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputMobile" />
                </div>
              </div>

              <div class="row mb-1">
                <label for="inputEmail" class="col-sm-2 col-form-label"
                  >Email</label
                >
                <div class="col-sm-10">
                  <input type="email" class="form-control" id="inputEmail" />
                </div>
              </div>

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
                <label
                  for="inputDireccionAlterna"
                  class="col-sm-4 col-form-label"
                  >Direccion Alterna</label
                >
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputDireccionAlterna"
                  />
                </div>
              </div>

              <div class="row mb-1">
                <label for="inputCiudad" class="col-sm-2 col-form-label"
                  >Ciudad</label
                >
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputCiudad" />
                </div>
              </div>

              <div class="row mb-1">
                <label for="inputEstado" class="col-sm-2 col-form-label"
                  >Estado</label
                >
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputEstado" />
                </div>
              </div>

              <div class="row mb-1">
                <label for="inputCodigoPostal" class="col-sm-4 col-form-label"
                  >Código Postal</label
                >
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputCodigoPostal"
                  />
                </div>
              </div>

              <div class="row mb-1">
                <label for="inputPais" class="col-sm-2 col-form-label"
                  >Pais</label
                >
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
                <label for="inputArea" class="col-sm-2 col-form-label"
                  >Area</label
                >
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
          </div>
        </div>
        <!--Columna 2-->
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
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
                <label
                  for="inputNumeroPasajeros"
                  class="col-sm-2 col-form-label"
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
                <label
                  for="inputDireccionCompania"
                  class="col-sm-4 col-form-label"
                  >Dirección Compañía</label
                >
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputDireccionCompania"
                  />
                </div>
              </div>

              <h6 class="layout-h6">Abogado:</h6>
              <hr />
              <div class="row mb-1">
                <label for="inputNombreAbogado" class="col-sm-4 col-form-label"
                  >Nombre Abogado</label
                >
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputNombreAbogado"
                  />
                </div>
              </div>

              <h6 class="layout-h6">Firmas</h6>
              <hr />

              <div class="row mb-1">
                <label
                  for="inputStatusDocumentos"
                  class="col-sm-4 col-form-label"
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
                <label
                  for="inputFechaFirmaDocumentos"
                  class="col-sm-5 col-form-label"
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
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <h6 class="layout-h6">Información Adicional</h6>
              <hr />
              <div class="row mb-1">
                <label
                  for="inputStatusDocumentos"
                  class="col-sm-4 col-form-label"
                  >Referencia</label
                >
                <select
                  name="inputStatusDocumentos"
                  class="form-select form-select-sm select-custom-1"
                  aria-label="Default select example"
                  id="inputStatusDocumentos"
                >
                  <option selected>Selecciona un campo</option>
                  <option value="1">Google</option>
                  <option value="2">Facebook</option>
                  <option value="3">Instagram</option>
                  <option value="4">Twitter</option>
                  <option value="5">LinkedIn</option>
                  <option value="6">Recomendación</option>
                  <option value="7">Otro</option>
                </select>
              </div>

              <div class="row mb-1">
                <label for="inputReferidoPor" class="col-sm-4 col-form-label"
                  >Referido por
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputReferidoPor"
                  />
                </div>
              </div>

              <div class="row mb-1">
                <label
                  for="inputFechaCumpleanos"
                  class="col-sm-4 col-form-label"
                  >Fecha Cumpleaños</label
                >
                <div class="col-sm-8">
                  <input
                    type="date"
                    class="form-control"
                    id="inputFechaCumpleanos"
                  />
                </div>
              </div>

              <div class="row mb-1">
                <label
                  for="inputStatusDocumentos"
                  class="col-sm-4 col-form-label"
                  >Genero</label
                >
                <select
                  name="inputStatusDocumentos"
                  class="form-select form-select-sm select-custom-1"
                  aria-label="Default select example"
                  id="inputStatusDocumentos"
                >
                  <option selected>Selecciona un campo</option>
                  <option value="1">Masculino</option>
                  <option value="2">Femenino</option>
                  <option value="3">Otro</option>
                </select>
              </div>

              <div class="row mb-1">
                <label for="inputFechaLesion" class="col-sm-4 col-form-label"
                  >Fecha de Lesion
                </label>
                <div class="col-sm-8">
                  <input
                    type="date"
                    class="form-control"
                    id="inputFechaLesion"
                  />
                </div>
              </div>

              <div class="row mb-1">
                <label
                  for="inputPostTerminacion"
                  class="col-sm-4 col-form-label"
                  >Post Terminación</label
                >
                <select
                  name="inputPostTerminacion"
                  class="form-select form-select-sm select-custom-1"
                  aria-label="Default select example"
                  id="inputPostTerminacion"
                >
                  <option selected>Selecciona un campo</option>
                  <option value="1">Sí</option>
                  <option value="2">No</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <h6 class="layout-h6">Publicidad</h6>
              <hr />
              <div class="row mb-1">
                <label
                  for="inputStatusPublicidad"
                  class="col-sm-4 col-form-label"
                  >Status de publicidad del caso</label
                >
                <select
                  name="inputStatusPublicidad"
                  class="form-select form-select-sm select-custom-1"
                  aria-label="Default select example"
                  id="inputStatusPublicidad"
                >
                  <option selected>Selecciona un campo</option>
                  <option value="1">Campaña 1</option>
                  <option value="2">Campaña 2</option>
                  <option value="3">Campaña 3</option>
                </select>
              </div>

              <div class="row mb-1">
                <label
                  for="inputReferenciaPublicidad"
                  class="col-sm-4 col-form-label"
                  >Referencia de publicidad
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputReferenciaPublicidad"
                  />
                </div>
              </div>

              <div class="row mb-1">
                <label for="inputPublicidad" class="col-sm-4 col-form-label"
                  >Publicidad
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputPublicidad"
                  />
                </div>
              </div>

              <div class="row mb-1">
                <label for="inputNombrReferido" class="col-sm-4 col-form-label"
                  >Nombre Referido
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputNombrReferido"
                  />
                </div>
              </div>
              <div class="row mb-1">
                <label for="inputNumeroReferido" class="col-sm-4 col-form-label"
                  >Numero Referido
                </label>
                <div class="col-sm-8">
                  <input
                    type="tel"
                    class="form-control"
                    id="inputNumeroReferido"
                  />
                </div>
              </div>
              <div class="row mb-1">
                <label
                  for="inputCuentasPublicidad"
                  class="col-sm-4 col-form-label"
                  >Cuentas Publicidad
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputCuentasPublicidad"
                  />
                </div>
              </div>
              <div class="row mb-1">
                <label
                  for="inputMenorEdadPublicidad"
                  class="col-sm-4 col-form-label"
                  >Menor de Edad Publicidad
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputMenorEdadPublicidad"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <h6 class="layout-h6">Intentos:</h6>
      </div>
      <div class="row g-1">
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <h6 class="layout-h6">Intento 1:</h6>
              <hr />

              <div class="row mb-1">
                <label for="inputPrimerIntento" class="col-sm-5 col-form-label"
                  >Primer Intento</label
                >
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control"
                    id="inputPrimerIntento"
                  />
                </div>
              </div>
              <div class="row mb-1">
                <label
                  for="inputFechaPrimerIntento"
                  class="col-sm-5 col-form-label"
                  >Fecha Primer Intento</label
                >
                <div class="col-sm-7">
                  <input
                    type="date"
                    class="form-control"
                    id="inputFechaPrimerIntento"
                  />
                </div>
              </div>
              <div class="row mb-1">
                <label
                  for="inputAgentePrimerIntento"
                  class="col-sm-2 col-form-label"
                  >Agente Primer Intento</label
                >
                <select
                  name="agentePrimerIntento"
                  class="form-select form-select-sm"
                  aria-label="Default select example"
                  id="inputAgentePrimerIntento"
                >
                  <option selected>Selecciona un campo</option>
                  <option value="1">Juan Pérez</option>
                  <option value="2">María Gómez</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <h6 class="layout-h6">Intento 2:</h6>
              <hr />

              <div class="row mb-1">
                <label for="inputSegundoIntento" class="col-sm-5 col-form-label"
                  >Segundo Intento</label
                >
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control"
                    id="inputSegundoIntento"
                  />
                </div>
              </div>
              <div class="row mb-1">
                <label
                  for="inputFechaSegundoIntento"
                  class="col-sm-5 col-form-label"
                  >Fecha Segundo Intento</label
                >
                <div class="col-sm-7">
                  <input
                    type="date"
                    class="form-control"
                    id="inputFechaSegundoIntento"
                  />
                </div>
              </div>
              <div class="row mb-1">
                <label
                  for="inputAgenteSegundoIntento"
                  class="col-sm-2 col-form-label"
                  >Agente Segundo Intento</label
                >
                <select
                  name="agenteSegundoIntento"
                  class="form-select form-select-sm"
                  aria-label="Default select example"
                  id="inputAgenteSegundoIntento"
                >
                  <option selected>Selecciona un campo</option>
                  <option value="1">Juan Pérez</option>
                  <option value="2">María Gómez</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <h6 class="layout-h6">Intento 3:</h6>
              <hr />

              <div class="row mb-1">
                <label for="inputTercerIntento" class="col-sm-5 col-form-label"
                  >Tercer Intento</label
                >
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control"
                    id="inputTercerIntento"
                  />
                </div>
              </div>
              <div class="row mb-1">
                <label
                  for="inputFechaTercerIntento"
                  class="col-sm-5 col-form-label"
                  >Fecha Tercer Intento</label
                >
                <div class="col-sm-7">
                  <input
                    type="date"
                    class="form-control"
                    id="inputFechaTercerIntento"
                  />
                </div>
              </div>
              <div class="row mb-1">
                <label
                  for="inputAgenteTercerIntento"
                  class="col-sm-2 col-form-label"
                  >Agente Tercer Intento</label
                >
                <select
                  name="agenteTercerIntento"
                  class="form-select form-select-sm"
                  aria-label="Default select example"
                  id="inputAgenteTercerIntento"
                >
                  <option selected>Selecciona un campo</option>
                  <option value="1">Juan Pérez</option>
                  <option value="2">María Gómez</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3"></div>
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
