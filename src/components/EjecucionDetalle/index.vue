<template>
	<div id="EjecucionDetalle">
		<div class="container-fluid">
			<div class="row">
				<div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
					<!--<div class="col-xs-1">
	                        <router-link to="/EjecucionMaestro">Volver a ejecuciones</router-link>
	                    </div> -->
					<div class="col-xs-10 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
						<h2>{{!Object.keys(ejecucionFiltradaBackUp).length?"Inserte ejecución nueva":"Detalle de la ejecucion"}}</h2>
					</div>
					<div v-if="Object.keys(ejecucionFiltradaBackUp).length" class="col-xs-1">
						<button @click="activarEdicion(isEditable = !isEditable)" class="btn btn-default">Editar</button>
					</div>
				</div>
			</div>
			<form>
				<div class="row">
					<div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
						<div class="input-group">
							<span class="input-group-addon">Nombre: </span>
							<input v-bind:disabled="!isEditable" v-model="ejecucionFiltrada.Nombre" type="text" class="form-control" aria-label="Nombre">
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
						<div class="input-group">
							<span class="input-group-addon">Exito: </span>
							<input v-bind:disabled="!isEditable" v-model="ejecucionFiltrada.Exito" type="checkbox" class="form-control" aria-label="Exito">
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
						<div class="input-group">
							<span class="input-group-addon">Mensaje: </span>
							<input v-bind:disabled="!isEditable" v-model="ejecucionFiltrada.Mensaje" type="text" class="form-control" aria-label="Mensaje">
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
						<div class="input-group">
							<span class="input-group-addon">Fecha final: </span>
							<input v-bind:disabled="!isEditable" v-model="ejecucionFiltrada.FechaInicio" type="text" class="form-control" aria-label="Fecha">
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
						<div class="input-group">
							<span class="input-group-addon">Fecha final: </span>
							<input v-bind:disabled="!isEditable" v-model="ejecucionFiltrada.FechaFinal" type="text" class="form-control" aria-label="Fecha">
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
						<div class="input-group">
							<span class="input-group-addon">Consumo de memoria: </span>
							<input v-bind:disabled="!isEditable" v-model="ejecucionFiltrada.ConsumoMemoria" type="text" class="form-control" aria-label="ConsumoMemoria">
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
						<div class="input-group">
							<span class="input-group-addon">Consumo de red: </span>
							<input v-bind:disabled="!isEditable" v-model="ejecucionFiltrada.ConsumoRed" type="text" class="form-control" aria-label="ConsumoRed">
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-6">
						<button @click="cancelarEdicion()" id="boton_cancelar" class="btn btn-default">
							<router-link :to="{ name: 'EjecucionMaestro'}"><i class="fa fa-arrow-left" aria-hidden="true" style="font-size: 18px;"></i>Cancelar</router-link>
						</button>
					</div>
					<div v-if="!Object.keys(ejecucionFiltradaBackUp).length" class="col-xs-6">
						<button @click="guardarDatos()" id="boton_guardar" class="btn btn-default">Guardar</button>
					</div>
					<div v-if="Object.keys(ejecucionFiltradaBackUp).length" class="col-xs-6">
						<button @click="actualizarDatos()" id="boton_actualizar" class="btn btn-default">Actualizar</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script src="./EjecucionDetalle.js" type="text/javascript" charset="utf-8"></script>
<style src="./EjecucionDetalle.css" type="text/css" media="screen"></style>