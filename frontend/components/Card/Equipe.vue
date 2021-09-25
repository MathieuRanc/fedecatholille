<template>
	<div class="card">
		<img :src="membre.acf.photo_de_profil" alt="" />
		<div class="text">
			<h6>{{ membre.acf.role }}</h6>
			<h5>{{ membre.acf.denomination }}</h5>
			<h6>{{ membre.acf.ecole }}</h6>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		membre: {
			type: Object,
			default: {
				id: 1,
				acf: {
					denomination: 'Nom Prénom',
					photo_de_profil: require('~/assets/default-image.svg'),
					role: 'Rôle',
					ecole: 'Ecole',
					pole: 'Pôle',
				},
			},
		},
	},
}
</script>

<style lang="scss" scoped>
.card {
	display: flex;
	flex-direction: column;
}
img {
	width: 100%;
	max-width: 400px;
	border-radius: 500px;
	aspect-ratio: 1/1;
	object-fit: cover;
	// -webkit-filter: drop-shadow(-4px 4px 10px rgba(0, 0, 0, 0.2));
	// filter: drop-shadow(-4px 4px 10px rgba(0, 0, 0, 0.2));
	box-shadow: -4px 4px 10px rgba(0, 0, 0, 0.2);
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
.text {
	margin: 16px 0;
}
h5 {
	margin: 4px 0;
	font-size: 26px;
	@media screen and (max-width: 750px) {
		font-size: 18px;
	}
	text-align: center;
	font-weight: 600;
}
h6 {
	font-weight: 300;
	font-size: 20px;
	@media screen and (max-width: 750px) {
		font-size: 12px;
	}
	color: #888888;
	text-align: center;
}
</style>