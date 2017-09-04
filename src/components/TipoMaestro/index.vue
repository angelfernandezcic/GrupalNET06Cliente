<template>
    <div id="TipoMaestro">
        <h3>Tipos</h3>
        <div class="container-fluid">
			<div id="barra_botones" class="row">
				<div class="col-xs-11">
					<div class="dropdown">
						<select></select>
					</div>
				</div>
				<div class="col-xs-1">
					 <router-link to="/TareaDetalle">Insercion</router-link>
				</div>
			</div>
			<div v-for="item in items" v-bind:key="item.Id" class="row list_container">
	            <div id="main_info" class="col col-sm-6">
	                <div class="list-item__title"> {{ item.Categoria }} </div>
	                <div class="list-item__subtitle"> {{ item.Descripcion }} </div>
	            </div>
				<div class="col col-sm-3" id="go_detail">
	            	<div class="list-item__title" id="go_detail_in">
	            		<button @click="eliminarObjeto(item.Id)" id="boton_eliminar" class="btn btn-default">Eliminar</button>
	            	</div>
	            </div>
	            <!--<div class="col col-sm-3" id="go_detail">
	            	<div class="list-item__title" id="go_detail_in">
	            		<router-link :to="{ name: 'TareaDetalle', params: { id: item.Id }}">Ir al detalle <i class="fa fa-arrow-right" aria-hidden="true" style="font-size: 18px;"></i></router-link>
	            	</div>
	            </div>-->
			</div>
		</div>
    </div>
</template>

<script src="./Tipos.js" type="text/javascript" charset="utf-8"></script>
<style src="./Tipos.css" type="text/css" media="screen"></style>