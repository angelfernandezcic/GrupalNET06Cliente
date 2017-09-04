<template>
    <div id="TareaMaestro">
        <h3>Tarea</h3>
		<div class="container-fluid">
			<div id="barra_botones" class="row">
				<div class="col-xs-11">
					<div class="dropdown">
						<select></select>
					</div>
				</div>
				<div class="col-xs-1">
					<button @click="isOpen = !isOpen" class="btn btn-default">Inserción</button>
				</div>
			</div>
			<div v-for="item in items" class="row list_container">
	            <div id="main_info" class="col col-sm-6">
	                <div class="list-item__title"> {{ item.Nombre }} </div>
	                <div class="list-item__subtitle"> {{ item.Descripcion }} </div>
	                <div class="list-item__subtitle"> {{ item.Fecha }}</div>
	            </div>
				<div class="col col-sm-3" id="go_detail">
	            	<div class="list-item__title" id="go_detail_in">
	            		<button @click="eliminarObjeto(item.Id)" id="boton_eliminar" class="btn btn-default">Eliminar</button>
	            	</div>
	            </div>
	            <div class="col col-sm-3" id="go_detail">
	            	<div class="list-item__title" id="go_detail_in">
	            		<router-link :to="{ name: 'TareaDetalle', params: { id: item.Id }}">Ir al detalle <i class="fa fa-arrow-right" aria-hidden="true" style="font-size: 18px;"></i></router-link>
	            	</div>
	            </div>
			</div>
		</div>
		<div v-if="isOpen" class="container-fluid">
			<div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">  
						<div class="input-group">
						  <span class="input-group-addon">Nombre: </span>
						  <input v-model="itemInsercion.Nombre" type="text" class="form-control" aria-label="Nombre" >
						</div>
					</div>
				</div>
				<div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">		
						<div class="input-group">
						  <span class="input-group-addon">Descripcion: </span>
						  <input v-model="itemInsercion.Descripcion" type="text" class="form-control" aria-label="Descripcion" >
						</div>
					</div>
				</div>
                <div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">		
						<div class="input-group">
						  <span class="input-group-addon">Tipo: </span>
						  <input v-model="itemInsercion.Tipo" type="text" class="form-control" aria-label="Tipo" >
						</div>
					</div>
				</div>
                <div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">		
						<div class="input-group">
						  <span class="input-group-addon">Fecha: </span>
						  <input v-model="itemInsercion.Fecha" type="text" class="form-control" aria-label="Fecha" >
						</div>
					</div>
				</div>
                <div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">		
						<div class="input-group">
						  <span class="input-group-addon">Activa: </span>
						  <input v-model="itemInsercion.Activa" type="text" class="form-control" aria-label="Activa" >
						</div>
					</div>
				</div>
                <div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">		
						<div class="input-group">
						  <span class="input-group-addon">Programacion: </span>
						  <input v-model="itemInsercion.Programacion" type="text" class="form-control" aria-label="Programacion" >
						</div>
					</div>
				</div>
                <div class="row">    
			        <div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">		
						<div class="input-group">
						  <span class="input-group-addon">Formato: </span>
						  <input v-model="itemInsercion.Formato" type="text" class="form-control" aria-label="Formato" >
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
						<button @click="guardarDatos()" id="boton_guardar" class="btn btn-default">Guardar</button>
					</div>
				</div>
		</div>
    </div>
</template>

<script src="./Tarea.js" type="text/javascript" charset="utf-8"></script>
<style src="./Tarea.css" type="text/css" media="screen"></style>