<template>
	<div id="EjecucionMaestro">
		<div class="container-fluid">
			<div id="barra_botones" class="row">
				<h3>Ejecuciones.</h3>
				<div class="col-sm-3 col-sm-offset-9">
					<button id="insertar" @click="nuevoitem()" class="btn btn-default">
						<i class="fa fa-plus"></i> Inserción
					</button>
				</div>
			</div>
			<div v-if="items.length < 1">
				<h3>No existen ejecuciones insertadas</h3>
			</div>
			<div v-else class="list-group">
				<div v-for="item in items" class="row list-group-item">
					<router-link :to="{ name: 'EjecucionDetalle', params: { id: item.Id }}">
						<div id="main_info" class="col col-sm-9">
							<div class="list-item__title"> {{ item.Nombre }} </div>
							<div class="list-item__subtitle"> {{ item.FechaInicio }} / {{ item.FechaFinal }}</div>
						</div>
					</router-link>
					<div class="col col-sm-3" id="go_detail">
						<div class="list-item__title" id="go_detail_in">
							<button @click="eliminarObjeto(item.Id)" id="boton_eliminar" class="btn btn-default">
								<i class="fa fa-trash"></i> Eliminar
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./Ejecuciones.js" type="text/javascript" charset="utf-8"></script>
<style src="./Ejecuciones.css" type="text/css" media="screen"></style>