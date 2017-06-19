import ajax from '../config/ajax'

export default {
	wel({ commit, state},data) {
		commit('GET_DATA',data)
	}
}


