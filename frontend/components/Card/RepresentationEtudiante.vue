<template>
	<div class="card">
		<img
			:src="representationEtudiante.acf.image"
			alt="image representationEtudiante"
		/>
		<h3>{{ representationEtudiante.acf.nom }}</h3>
		<p>{{ representationEtudiante.acf.description }}</p>
		<a :href="representationEtudiante.acf.lien_google_form">
			<button>Accéder au google form</button>
		</a>
	</div>
</template>

<script>
export default {
	props: {
		representationEtudiante: {
			type: Object,
			default: {
				id: 1,
				acf: {
					logo: require(`../../assets/logo.svg`),
					nom: 'Partenaire',
					description:
						'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi distinctio, earum officiis amet commodi ut dolor et deserunt eius, iste ea quis id veritatis aliquid mollitia neque nemo illo ullam.',
					lien_google_form: 'https://google.com',
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
	img {
		width: 100%;
		margin: auto 0;
	}
}
img {
	max-width: 100%;
	aspect-ratio: 1/1;
	object-fit: contain;
	-webkit-filter: drop-shadow(-4px 4px 10px rgba(0, 0, 0, 0.2));
	filter: drop-shadow(-4px 4px 10px rgba(0, 0, 0, 0.2));
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
	border-radius: 10px;
	margin: 10px 0;
	font-size: 24px;
	@media screen and (max-width: 750px) {
		font-size: 16px;
	}
	color: #000000;
	font-weight: 500;
}
p {
	color: #888888;
	margin: 0;
}
p,
a {
	font-size: 16px;
	@media screen and (max-width: 750px) {
		font-size: 12px;
	}
}
button {
	margin: 0;
	padding: 16px 30px;
}
a {
	margin: 0 auto;
	margin-top: 8px;
	border-radius: 100px;
	padding: 0;
}
</style>