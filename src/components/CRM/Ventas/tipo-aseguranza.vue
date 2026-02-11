<script setup lang="ts"></script>
<template>
  <div>
    <h6 class="layout-h6">Tipo de Azeguranza</h6>
    <hr />

    <div class="row mb-1">
      <label for="inputNombreAzeguranza" class="col-sm-4 col-form-label"
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
          <label class="form-check-label" for="checkPiernas"> Piernas </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="checkCabeza"
          />
          <label class="form-check-label" for="checkCabeza"> Cabeza </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="checkCuello"
          />
          <label class="form-check-label" for="checkCuello"> Cuello </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="checkBrazos"
          />
          <label class="form-check-label" for="checkBrazos"> Brazos </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="checkDedos"
          />
          <label class="form-check-label" for="checkDedos"> Dedos </label>
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
          <label class="form-check-label" for="checkEspalda"> Espalda </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="checkHombros"
          />
          <label class="form-check-label" for="checkHombros"> Hombros </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="checkManos"
          />
          <label class="form-check-label" for="checkManos"> Manos </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="checkCintura"
          />
          <label class="form-check-label" for="checkCintura"> Cintura </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="checkPies"
          />
          <label class="form-check-label" for="checkPies"> Pies </label>
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
          <label class="form-check-label" for="checkNuca"> Nuca </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="checkCadera"
          />
          <label class="form-check-label" for="checkCadera"> Cadera </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="checkRodillas"
          />
          <label class="form-check-label" for="checkRodillas"> Rodillas </label>
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
      <label for="inputNecesitaCirugia" class="col-sm-4 col-form-label"
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
  </div>
</template>
