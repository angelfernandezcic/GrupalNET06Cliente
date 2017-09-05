<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-sm-12">
				<nav class="navbar navbar-default">
				  	<div class="container-fluid">
					    <div class="navbar-header">
					    	<a class="navbar-brand" href="#">
					    		<img :src="header.logo" :alt="header.nombre">
							</a>
						</div>
						<ul class="nav navbar-nav">
							<li><router-link to="/" ><i class="fa fa-home" aria-hidden="true"></i>Home</router-link></li>
							<li><router-link to="/TipoMaestro"><i class="fa fa-tags" aria-hidden="true"></i>Tipos de tarea</router-link></li>
							<li><router-link to="/TareaMaestro"><i class="fa fa-list" aria-hidden="true"></i>Listado de tareas</router-link></li>
							<li><router-link to="/EjecucionMaestro"><i class="fa fa-clock-o" aria-hidden="true"></i>Ejecuciones de tareas</router-link></li>
						</ul>
				  	</div>
				</nav>
			</div>	
		</div>
	</div>
</template>

<script src="./Header.js" type="text/javascript" charset="utf-8"></script>
<style src="./Header.css" type="text/css" media="screen"></style>
