<template>
    <div id="TareaDetalle">
        <div class="container-fluid">
			<div class="row">
                <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">  
                    <div class="col-xs-1">
                        <router-link to="/TareaMaestro">Volver a tareas</router-link>
                    </div>
                    <div class="col-xs-10 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">  
                        <h2>Detalle de la tarea</h2>
                    </div>
                    <div class="col-xs-1">
                        <button @click="activarEdicion(isEditable = !isEditable)" class="btn btn-default">Editar</button>
                    </div>
                </div>
			</div>
			<form>
			    <div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">  
						<div class="input-group">
						  <span class="input-group-addon">Nombre: </span>
						  <input v-bind:disabled="isEditable" v-model="tareaFiltrada.Nombre" type="text" class="form-control" aria-label="Nombre" >
						</div>
					</div>
				</div>
				<div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">		
						<div class="input-group">
						  <span class="input-group-addon">Descripcion: </span>
						  <input v-bind:disabled="isEditable" v-model="tareaFiltrada.Descripcion" type="text" class="form-control" aria-label="Descripcion" >
						</div>
					</div>
				</div>
                <div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">		
						<div class="input-group">
						  <span class="input-group-addon">Tipo: </span>
						  <input v-bind:disabled="isEditable" v-model="tareaFiltrada.Tipo" type="text" class="form-control" aria-label="Tipo" >
						</div>
					</div>
				</div>
                <div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">		
						<div class="input-group">
						  <span class="input-group-addon">Fecha: </span>
						  <input v-bind:disabled="isEditable" v-model="tareaFiltrada.Fecha" type="text" class="form-control" aria-label="Fecha" >
						</div>
					</div>
				</div>
                <div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">		
						<div class="input-group">
						  <span class="input-group-addon">Activa: </span>
						  <input v-bind:disabled="isEditable" v-model="tareaFiltrada.Activa" type="text" class="form-control" aria-label="Activa" >
						</div>
					</div>
				</div>
                <div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">		
						<div class="input-group">
						  <span class="input-group-addon">Programacion: </span>
						  <input v-bind:disabled="isEditable" v-model="tareaFiltrada.Programacion" type="text" class="form-control" aria-label="Programacion" >
						</div>
					</div>
				</div>
                <div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">		
						<div class="input-group">
						  <span class="input-group-addon">Formato: </span>
						  <input v-bind:disabled="isEditable" v-model="tareaFiltrada.Formato" type="text" class="form-control" aria-label="Formato" >
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-6">
						<button @click="mostrarDatos()" id="boton_actualizar" class="btn btn-default">Actualizar</button>
					</div>
                    <div class="col-xs-6">
						<button @click="cancelarEdicion()" id="boton_cancelar" class="btn btn-default">Cancelar</button>
					</div>
					<div class="col-xs-6">
						<button @click="guardarDatos()" id="boton_guardar" class="btn btn-default">Guardar</button>
					</div>
				</div>
			</form>
		</div>
    </div>
</template>

<script src="./TareaDetalle.js" type="text/javascript" charset="utf-8"></script>
<style src="./TareaDetalle.css" type="text/css" media="screen"></style>