<template>
    <div id="TipoMaestro">
        <!--<h3>Tipos</h3>-->
        <div class="container-fluid">
			<div id="barra_botones" class="row">	
				<!--<h3>Tipos de tareas.</h3>	-->		
				<div class="col-sm-3 col-sm-offset-9">
					<button id="insertar" @click="nuevoitem()" class="btn btn-default">
							<i class="fa fa-plus"></i> Inserción</button>
					 <!--<router-link to="/TipoDetalle">Inserción</router-link>-->
				</div>
			</div>
			<div v-if="items.length < 1">
				<h3>No existen tipos de tareas.</h3>
			</div>
			<div v-else v-for="item in items" v-bind:key="item.Id" class="row list_container list-group-item">
				<router-link :to="{ name: 'TipoDetalle', params: { id: item.Id }}">
					<div id="main_info" class="col col-sm-9">
						<div class="list-item__title"> {{ item.Categoria }} </div>
						<div class="list-item__subtitle"> {{ item.Descripcion }} </div>
					</div>
				</router-link>
				<div class="col col-sm-3" id="go_detail">
	            	<div class="list-item__title" id="go_detail_in">
	            		<button @click="eliminarObjeto(item.Id)" id="boton_eliminar" class="btn btn-default">
							<i class="fa fa-trash"></i> Eliminar</button>
	            	</div>
	            </div>	            
			</div>
		</div>
    </div>
</template>

<script src="./Tipos.js" type="text/javascript" charset="utf-8"></script>
<style src="./Tipos.css" type="text/css" media="screen"></style>