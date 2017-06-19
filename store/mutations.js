const GET_DATA = 'GET_DATA'

export default {
	[GET_DATA](state, data) {
		state.welcome = data
	}
}