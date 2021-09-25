<template>
	<div class="container">
		<h1 v-if="error.statusCode === 404">
			Erreur 404, cette page n'existe pas 😟
		</h1>
		<h1 v-else>Il y a eu une erreur 😣</h1>
		<nuxt-link to="/">⟵ Retour à l'accueil</nuxt-link>
	</div>
</template>

<script>
export default {
	props: ['error'],
	layout: 'error', // you can set a custom layout for the error page
}
</script>

<style lang="scss" scoped>
.container {
	padding: 120px 80px;
	@media screen and (max-width: 1000px) {
		padding: 120px 40px;
	}
	@media screen and (max-width: 600px) {
		padding: 120px 20px;
	}
}
</style>