<script setup lang="ts"></script>

<template>
  <div class="container-fluid mt-5">
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

              <div class="row mb-1">
                <label for="inputEmail" class="col-sm-2 col-form-label"
                  >Idioma</label
                >
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

              <h6 class="layout-h6">Contacto de Emergencia:</h6>
              <hr />

              <div class="row mb-1">
                <label
                  for="inputNombreEmergencia"
                  class="col-sm-4 col-form-label"
                  >Nombre Emergencia</label
                >
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputNombreEmergencia"
                  />
                </div>
              </div>

              <div class="row mb-1">
                <label
                  for="inputTelefonoEmergencia"
                  class="col-sm-5 col-form-label"
                  >Telefono Emergencia</label
                >
                <div class="col-sm-7">
                  <input
                    type="text"
                    class="form-control"
                    id="inputTelefonoEmergencia"
                  />
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

              <h6 class="layout-h6">Intake:</h6>
              <hr />

              <div class="row mb-1">
                <label for="inputEnviaAbogado" class="col-sm-5 col-form-label"
                  >Fecha de envío a Abogado</label
                >
                <div class="col-sm-7">
                  <input
                    type="date"
                    class="form-control"
                    id="inputEnviaAbogado"
                  />
                </div>
              </div>

              <div class="row mb-1">
                <label for="inputFuenteLlamada" class="col-sm-4 col-form-label"
                  >Fuente de la Llamada</label
                >
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputFuenteLlamada"
                  />
                </div>
              </div>

              <div class="row mb-1">
                <label
                  for="inputFechaFuenteLlamada"
                  class="col-sm-5 col-form-label"
                  >Fecha de la fuente de Llamada</label
                >
                <div class="col-sm-7">
                  <input
                    type="date"
                    class="form-control"
                    id="inputFechaFuenteLlamada"
                  />
                </div>
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

              <div class="row mb-1">
                <label for="inputFechaConsulta" class="col-sm-4 col-form-label"
                  >Fecha de Consulta</label
                >
                <div class="col-sm-8">
                  <input
                    type="date"
                    class="form-control"
                    id="inputFechaConsulta"
                  />
                </div>
              </div>

              <div class="row mb-1">
                <label for="inputFechaRechazo" class="col-sm-4 col-form-label"
                  >Fecha de Rechazo</label
                >
                <div class="col-sm-8">
                  <input
                    type="date"
                    class="form-control"
                    id="inputFechaRechazo"
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
              <div class="row mb-1">
                <label for="inputZoom" class="col-sm-2 col-form-label"
                  >Zoom</label
                >
                <select
                  name="inputZoom"
                  class="form-select form-select-sm"
                  aria-label="Default select example"
                  id="inputZoom"
                >
                  <option selected>Selecciona un campo</option>
                  <option value="1">Sí</option>
                  <option value="2">No</option>
                </select>
              </div>

              <div class="row mb-1">
                <label for="inputFuenteLlamada" class="col-sm-4 col-form-label"
                  >Fuente Llamada</label
                >
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputFuenteLlamada"
                  />
                </div>
              </div>

              <div class="row mb-1">
                <label
                  for="inputFechaFuenteLlamada"
                  class="col-sm-4 col-form-label"
                  >Fecha de Fuente Llamada</label
                >
                <div class="col-sm-8">
                  <input
                    type="date"
                    class="form-control"
                    id="inputFechaFuenteLlamada"
                  />
                </div>
              </div>

              <div class="row mb-1">
                <label for="inputFuenteLlamada" class="col-sm-4 col-form-label"
                  >Fuente Llamada 2</label
                >
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputFuenteLlamada"
                  />
                </div>
              </div>

              <div class="row mb-1">
                <label
                  for="inputFechaFuenteLlamadaDos"
                  class="col-sm-5 col-form-label"
                  >Fecha de Fuente Llamada 2</label
                >
                <div class="col-sm-7">
                  <input
                    type="date"
                    class="form-control"
                    id="inputFechaFuenteLlamadaDos"
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

              <h6 class="layout-h6">Membresia</h6>
              <hr />
              <div class="row mb-1">
                <label
                  for="inputCodigoMembresia"
                  class="col-sm-4 col-form-label"
                  >Codigo de Membresia
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputCodigoMembresia"
                  />
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
                    <label
                      class="form-check-label"
                      for="inputSegundaEntrevista"
                    >
                      Segunda Entrevista
                    </label>
                  </div>
                </div>
              </div>

              <h6 class="layout-h6">Supervisión:</h6>
              <hr />

              <div class="row mb-1">
                <label for="inputAprovadorPor" class="col-sm-4 col-form-label"
                  >Aprovador por
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputAprovadorPor"
                  />
                </div>
              </div>

              <div class="row mb-1">
                <label for="inputNombreOperador" class="col-sm-4 col-form-label"
                  >Nombre del Operador
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputNombreOperador"
                  />
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
                    <label
                      class="form-check-label"
                      for="inputSegundaEntrevista"
                    >
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
                    <label
                      class="form-check-label"
                      for="inputSegundaEntrevista"
                    >
                      Llamada Calibrada
                    </label>
                  </div>
                </div>
              </div>

              <div class="row mb-1">
                <label
                  for="inputDocumentoEnviadoPor"
                  class="col-sm-4 col-form-label"
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
                <label
                  for="inputFirmaDocumentoPor"
                  class="col-sm-4 col-form-label"
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
          </div>
        </div>

        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <h6 class="layout-h6">Medico:</h6>
              <div class="row mb-1">
                <label for="inputNombreMedico" class="col-sm-4 col-form-label"
                  >Nombre del Medico
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputNombreMedico"
                  />
                </div>
              </div>
              <div class="row mb-1">
                <label for="inputNombreMedico" class="col-sm-4 col-form-label"
                  >1er Contacto Medico
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputNombreMedico"
                  />
                </div>
              </div>
              <div class="row mb-1">
                <label for="inputNombreMedico" class="col-sm-4 col-form-label"
                  >Cita Medica por
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputNombreMedico"
                  />
                </div>
              </div>
              <div class="row mb-1">
                <label for="inputNombreMedico" class="col-sm-4 col-form-label"
                  >2 Cita Medica por
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputNombreMedico"
                  />
                </div>
              </div>
              <div class="row mb-1">
                <label for="inputNombreMedico" class="col-sm-4 col-form-label"
                  >2da Cita Medica por
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputNombreMedico"
                  />
                </div>
              </div>
              <div class="row mb-1">
                <label for="inputNombreMedico" class="col-sm-4 col-form-label"
                  >Clinica/Hospital
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputNombreMedico"
                  />
                </div>
              </div>
              <div class="row mb-1">
                <label for="inputNombreMedico" class="col-sm-4 col-form-label"
                  >Status Clinica/Hospital
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputNombreMedico"
                  />
                </div>
              </div>
              <div class="row mb-1">
                <label for="inputNombreMedico" class="col-sm-4 col-form-label"
                  >Hecho por la Clinica/Hospital
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputNombreMedico"
                  />
                </div>
              </div>

              <div class="row mb-1">
                <label
                  for="inputNombreAseguranza"
                  class="col-sm-4 col-form-label"
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
                <label for="inputEAMS" class="col-sm-4 col-form-label"
                  >EAMS#</label
                >
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
                <label
                  for="inputSustitucionAbogado"
                  class="col-sm-4 col-form-label"
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

              <h6 class="layout-h6">Tipo de Azeguranza</h6>
              <hr />

              <div class="row mb-1">
                <label
                  for="inputNombreAzeguranza"
                  class="col-sm-4 col-form-label"
                  >Nombre Azeguranza</label
                >
                <select
                  name="inputNombreAzeguranza"
                  class="form-select form-select-sm select-custom-1"
                  aria-label="Default select example"
                  id="inputNombreAzeguranza"
                >
                  <option selected>Selecciona un campo</option>
                  <option value="ACE">American Insurance Company</option>
                </select>
              </div>
              <div class="row mb-1">
                <div class="col">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="checkPiernas"
                    />
                    <label class="form-check-label" for="checkPiernas">
                      Piernas
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="checkCabeza"
                    />
                    <label class="form-check-label" for="checkCabeza">
                      Cabeza
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="checkCuello"
                    />
                    <label class="form-check-label" for="checkCuello">
                      Cuello
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="checkBrazos"
                    />
                    <label class="form-check-label" for="checkBrazos">
                      Brazos
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="checkDedos"
                    />
                    <label class="form-check-label" for="checkDedos">
                      Dedos
                    </label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="checkEspalda"
                    />
                    <label class="form-check-label" for="checkEspalda">
                      Espalda
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="checkHombros"
                    />
                    <label class="form-check-label" for="checkHombros">
                      Hombros
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="checkManos"
                    />
                    <label class="form-check-label" for="checkManos">
                      Manos
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="checkCintura"
                    />
                    <label class="form-check-label" for="checkCintura">
                      Cintura
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="checkPies"
                    />
                    <label class="form-check-label" for="checkPies">
                      Pies
                    </label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="checkNuca"
                    />
                    <label class="form-check-label" for="checkNuca">
                      Nuca
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="checkCadera"
                    />
                    <label class="form-check-label" for="checkCadera">
                      Cadera
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="checkRodillas"
                    />
                    <label class="form-check-label" for="checkRodillas">
                      Rodillas
                    </label>
                  </div>
                </div>
              </div>

              <div class="row mb-1">
                <label for="inputGravedadLesion" class="col-sm-4 col-form-label"
                  >Gravedad de Lesión</label
                >
                <select
                  name="inputGravedadLesion"
                  class="form-select form-select-sm select-custom-1"
                  aria-label="Default select example"
                  id="inputGravedadLesion"
                >
                  <option selected>Selecciona un campo</option>
                  <option value="grave">Grave</option>
                  <option value="moderada">Moderada</option>
                  <option value="leve">Leve</option>
                </select>
              </div>

              <div class="row mb-1">
                <label
                  for="inputNecesitaCirugia"
                  class="col-sm-4 col-form-label"
                  >Necesita Cirugía</label
                >
                <select
                  name="inputNecesitaCirugia"
                  class="form-select form-select-sm select-custom-1"
                  aria-label="Default select example"
                  id="inputNecesitaCirugia"
                >
                  <option selected>Selecciona un campo</option>
                  <option value="1">Masculino</option>
                  <option value="2">Femenino</option>
                </select>
              </div>

              <h6 class="layout-h6">Medico en California</h6>
              <hr />

              <div class="row mb-1">
                <label for="inputFechaAccidente" class="col-sm-4 col-form-label"
                  >Fecha de Accidente
                </label>
                <div class="col-sm-8">
                  <input
                    type="date"
                    class="form-control"
                    id="inputFechaAccidente"
                  />
                </div>
              </div>

              <div class="row mb-1">
                <label
                  for="inputFechaPrimerCita"
                  class="col-sm-4 col-form-label"
                  >Fecha Primer Cita
                </label>
                <div class="col-sm-8">
                  <input
                    type="date"
                    class="form-control"
                    id="inputFechaPrimerCita"
                  />
                </div>
              </div>

              <div class="row mb-1">
                <label
                  for="inputFechaUltimaCita"
                  class="col-sm-4 col-form-label"
                  >Fecha Ultima Cita
                </label>
                <div class="col-sm-8">
                  <input
                    type="date"
                    class="form-control"
                    id="inputFechaUltimaCita"
                  />
                </div>
              </div>
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
