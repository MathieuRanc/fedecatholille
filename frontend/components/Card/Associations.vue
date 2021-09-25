<template>
	<NuxtLink :to="`/association/${association.id}`" tag="div" class="card">
		<img :src="association.acf.logo" alt="logo association" />
		<h3>{{ association.acf.nom }}</h3>
	</NuxtLink>
</template>

<script>
export default {
	props: {
		association: {
			type: Object,
			default: {
				id: 1,
				acf: {
					logo: require('../../assets/logo.svg'),
					nom: 'ASSO',
				},
			},
		},
	},
}
</script>

<style lang="scss" scoped>
.card {
	cursor: pointer;
	display: flex;
	flex-direction: column;
	img {
		width: 100%;
		margin: auto 0;
	}
}
img {
	object-fit: contain;
	width: 100%;
	aspect-ratio: 1/1;
	-webkit-filter: drop-shadow(-10px 10px 20px rgba(0, 0, 0, 0.2));
	filter: drop-shadow(-10px 10px 20px rgba(0, 0, 0, 0.2));
	// height: calc(100vw / 5 - 260px);
	// @media screen and (max-width: 2000px) {
	// 	height: calc(100vw / 5 - 200px);
	// }
	// @media screen and (max-width: 1500px) {
	// 	height: calc(100vw / 5);
	// }
	// @media screen and (max-width: 1300px) {
	// 	height: calc(100vw / 4);
	// }
	// @media screen and (max-width: 1000px) {
	// 	height: calc(100vw / 3 - 50px);
	// }
	// @media screen and (max-width: 800px) {
	// 	height: calc(100vw / 2);
	// }
}
h3 {
	text-align: center;
	border-radius: 10px;
	margin: 10px 0;
	font-size: 20px;
	@media screen and (max-width: 750px) {
		font-size: 12px;
	}
	color: #000000;
	font-weight: 400;
}
p {
	color: #888888;
}
p,
a {
	font-size: 16px;
	@media screen and (max-width: 750px) {
		font-size: 12px;
	}
}
</style>