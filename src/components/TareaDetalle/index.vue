<template>
    <div id="TareaDetalle">
        <div class="container-fluid">
				<div class="row">
          <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">  
							<div class="col-xs-6">
								<button @click="$router.push('/TareaMaestro')" class="btn btn-default">
									<i class="fa fa-mail-reply"></i> Volver
								</button>
							</div>
							<div v-if="Object.keys(tareaFiltradaBackUp).length" class="col-xs-6">
								<button @click="activarEdicion(isEditable = !isEditable)" class="btn btn-default">Editar</button>
							</div>
							<div class="col-xs-9 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
								<h2>{{!Object.keys(tareaFiltradaBackUp).length?"Inserte tarea nueva":"Detalle de la tarea"}}</h2>
							</div>
						</div>
        	</div>
				</div>
			<form v-on:submit.prevent="">
			    	<div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">  
						  	<label class="col-xs-3">Nombre: </label>
								<div class="col-xs-9">
									<input v-bind:disabled="!isEditable" v-model="tareaFiltrada.Nombre" type="text" class="form-control" aria-label="Nombre" >
								</div>
							</div>
						</div>
						<div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">		
						  	<label class="col-xs-3">Descripcion: </label>
								<div class="col-xs-9">
									<input v-bind:disabled="!isEditable" v-model="tareaFiltrada.Descripcion" type="text" class="form-control" aria-label="Descripcion" >
								</div>
							</div>
						</div>
						<div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">		
						  	<label class="col-xs-3">Tipo: </label>
						<div class="col-xs-9">
						  <input v-bind:disabled="!isEditable" v-model="tareaFiltrada.Tipo" type="text" class="form-control" aria-label="Tipo" >
						</div>
					</div>
				</div>
                <div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">		
						  <label class="col-xs-3">Fecha: </label>
						<div class="col-xs-9">
						  <input v-bind:disabled="!isEditable" v-model="tareaFiltrada.Fecha" type="date" class="form-control" aria-label="Fecha" >
						</div>
					</div>
				</div>
        		<div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
						  <label class="col-xs-3">Activa: </label>
						<div class="col-xs-9">
								<input v-bind:disabled="!isEditable" type="radio" id="activo" value="true" v-model="tareaFiltrada.Activa">
									<label for="si">Si</label>
								<input v-bind:disabled="!isEditable" type="radio" id="activo" value="false" v-model="tareaFiltrada.Activa">
									<label for="no">No</label>
						</div>
					</div>
				</div>
                <div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">		
						  <label class="col-xs-3">Programacion: </label>
						<div class="col-xs-9">
						  <input v-bind:disabled="!isEditable" v-model="tareaFiltrada.Programacion" type="date" class="form-control" aria-label="Programacion" >
						</div>
					</div>
				</div>
                <div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">		
						  <label class="col-xs-3">Formato: </label>
						<div class="col-xs-9">
						  <input v-bind:disabled="!isEditable" v-model="tareaFiltrada.Formato" type="text" class="form-control" aria-label="Formato" >
						</div>
					</div>
				</div>
				<div class="row">
						<button @click="cancelarEdicion()" id="boton_cancelar" class="btn btn-default">
							<i class="fa fa-times"></i> Cancelar
						</button>

						<button v-if="!Object.keys(tareaFiltradaBackUp).length" @click="guardarDatos()" id="boton_guardar" class="btn btn-default">
							<i class="fa fa-floppy-o"></i>Guardar
						</button>


						<button v-if="Object.keys(tareaFiltradaBackUp).length" :disabled="disableUpdate" @click="actualizarDatos()" id="boton_actualizar" class="btn btn-default">
							<i class="fa fa-undo"></i> Actualizar
						</button>
				</div>
			</form>
		</div>
    </div>
</template>

<script src="./TareaDetalle.js" type="text/javascript" charset="utf-8"></script>
<style src="./TareaDetalle.css" type="text/css" media="screen"></style>