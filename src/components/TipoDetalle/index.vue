<template>
    <div id="TipoDetalle">
        <div class="container-fluid">
			<div class="row">
                <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">  
                    <!--<div class="col-xs-1">
                        <router-link to="/TipoMaestro">Volver a maestro</router-link>
                    </div>-->
					<div class="col-xs-6">
						<button @click="volver" class="btn btn-default">
							<i class="fa fa-mail-reply"></i> Volver</button>
					</div>
					<div v-if="Object.keys(tipoFiltradaBackUp).length" class="col-xs-6">
                        <button @click="activarEdicion(isEditable = !isEditable)" class="btn btn-default">
							<i class="fa fa-pencil"></i> Editar</button>
                    </div>
                    <div class="col-xs-9 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">  
						<h2>{{!Object.keys(tipoFiltradaBackUp).length?"Insertar nuevo tipo de tarea":"Detalle del tipo de tarea"}}</h2>
                    </div>
                    
                </div>
			</div>
			<form>
			    <div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">  
						<div class="form-group">
							<div class="col-xs-3">
						 		<!--<span class="input-group-addon">Categoría: </span>-->
						   		<label>Categoría: </label>
							</div>
            				<div class="col-xs-9">
						  		<input v-bind:disabled="isEditable" v-model="tipoFiltrada.Categoria" type="text" class="form-control" aria-label="Categoria" >
						  	</div>
						</div>
					</div
				<div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">		
						<div class="form-group">
            				<div class="col-xs-3">
								<label>Descripción: </label>
							</div>	
							<div class="col-xs-9">
						  <!--<span class="input-group-addon">Descripción: </span>-->
						  		<input v-bind:disabled="isEditable" v-model="tipoFiltrada.Descripcion" type="text" class="form-control" aria-label="Descripcion" >
						  	</div>
						</div>
					</div>
				</div>
                <div class="row">
                    <label for="checkbox-inline" class="col-sm-10">
                        <input v-bind:disabled="isEditable" type="checkbox" id="repetitivo" v-model="tipoFiltrada.Repetitivo">
                        Repetitiva
                    </label>
                    <label for="checkbox-inline" class="col-sm-10">
                        <input v-bind:disabled="isEditable" type="checkbox" id="silenciable" v-model="tipoFiltrada.Silenciable">
                        Silenciable
                    </label>
                    <label for="checkbox-inline" class="col-sm-10">
                        <input v-bind:disabled="isEditable" type="checkbox" id="automatico" v-model="tipoFiltrada.Automatico">
                        Automatica
                    </label>
                </div>
				<div class="row">
					<button @click="cancelar()" id="boton_cancelar" class="btn btn-default">
						<i class="fa fa-times"></i> Cancelar
					</button>
					<button v-bind:disabled="isEditable" @click="actualizar()" id="boton_actualizar" class="btn btn-default" v-if="tipoFiltrada.Id">
						<i class="fa fa-undo"></i> Actualizar
					</button>
					<button @click="guardar()" id="boton_guardar" class="btn btn-default" v-if="!tipoFiltrada.Id">
						<i class="fa fa-floppy-o"></i> Guardar
					</button>
				</div>
			</form>
		</div>
    </div>
</template>

<script src="./TipoDetalle.js" type="text/javascript" charset="utf-8"></script>
<style src="./TipoDetalle.css" type="text/css" media="screen"></style>