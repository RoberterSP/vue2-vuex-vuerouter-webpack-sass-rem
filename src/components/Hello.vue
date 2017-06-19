<template>
	<div id="drawing" class="hello" align="center">
		<i></i> <br />{{welcome}}
	</div>
</template>

<script>
	export default {
		data() {
				return {
					welcome: this.$store.state.welcome
				}
			},
			mounted() {
				//				console.log(this.$store)
				//				this.$store.dispatch('wel')
				this.$store.commit('GET_DATA', '基于 vue2.0+vuex+webpack+sass+rem 的脚手架');
				this.welcome = this.$store.state.welcome

			}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import '../../static/mixin';
	.hello {
		background: #ffec01;
		font-size: .3rem;
		padding-top: 1rem;
		@include wh(100vw, 100vh);
		i {
			@include wh(2rem, 2rem);
			display: inline-block;
			@include bis('../../static/img/wxavatar.png');
		}
	}
</style>