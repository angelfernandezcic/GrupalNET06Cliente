<template>
	<div id="EjecucionDetalle">
		<div class="container-fluid">
			<div class="row">
				<div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
					<div class="col-xs-6">
						<button @click="goToMaestro" class="btn btn-default">
							<i class="fa fa-mail-reply"></i> Volver
						</button>
					</div>

					<div v-if="Object.keys(ejecucionFiltradaBackUp).length" class="col-xs-6">
						<button @click="isEditable = !isEditable" class="btn btn-default">
							<i class="fa fa-pencil"></i> Editar
						</button>
					</div>
					<div class="col-xs-9 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
						<h2>{{!Object.keys(ejecucionFiltradaBackUp).length?"Inserte ejecución nueva":"Detalle de la ejecución"}}</h2>
					</div>
				</div>
			</div>
			<form @submit.prevent="">
				<div class="row">
					<div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
						<label class="col-xs-3">Nombre</label>
						<div class="col-xs-9">
							<input v-bind:disabled="!isEditable" v-model="ejecucionFiltrada.Nombre" type="text" class="form-control" aria-label="Nombre">
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
						<label for="checkbox-inline" class="col-xs-3"> Éxito</label>
						<input class="col-xs-9" type="checkbox" aria-label="Exito">
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
						<label class="col-xs-3">Mensaje</label>
						<div class="col-xs-9">
							<input v-bind:disabled="!isEditable" v-model="ejecucionFiltrada.Mensaje" type="text" class="form-control" aria-label="Mensaje">
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
						<label class="col-xs-3">Fecha Inicio</label>
						<div class="col-xs-9">
							<input v-bind:disabled="!isEditable" v-model="ejecucionFiltrada.FechaInicio" type="date" class="form-control" aria-label="Fecha">
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
						<label class="col-xs-3">Fecha Final</label>
						<div class="col-xs-9">
							<input v-bind:disabled="!isEditable" v-model="ejecucionFiltrada.FechaFinal" type="date" class="form-control" aria-label="Fecha">
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">

						<label class="col-xs-3">Consumo Memoria(MB) </label>

						<div class="col-xs-9">
							<input v-bind:disabled="!isEditable" v-model="ejecucionFiltrada.ConsumoMemoria" type="text" class="form-control" aria-label="ConsumoMemoria">
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">

						<label class="col-xs-3">Consumo red (Mbps) </label>

						<div class="col-xs-9">
							<input v-bind:disabled="!isEditable" v-model="ejecucionFiltrada.ConsumoRed" type="text" class="form-control" aria-label="ConsumoRed">
						</div>
					</div>
				</div>
				<div class="row">
					<button @click="cancelarEdicion()" id="boton_cancelar" class="btn btn-default">
						<i class="fa fa-times"></i> Cancelar
					</button>

					<button v-if="!Object.keys(ejecucionFiltradaBackUp).length" @click="guardarDatos()" id="boton_guardar" class="btn btn-default">
						<i class="fa fa-floppy-o"></i>Guardar
					</button>

					<button v-if="Object.keys(ejecucionFiltradaBackUp).length" :disabled="disableUpdate" @click="actualizarDatos()" id="boton_actualizar" class="btn btn-default">
						<i class="fa fa-undo"></i> Actualizar
					</button>

				</div>
			</form>
		</div>
	</div>
</template>

<script src="./EjecucionDetalle.js" type="text/javascript" charset="utf-8"></script>
<style src="./EjecucionDetalle.css" type="text/css" media="screen"></style>