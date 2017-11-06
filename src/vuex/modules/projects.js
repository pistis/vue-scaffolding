import * as types from '../mutation-types'
import { getProjects } from '@/services/project'

const state = {
  projects: []
}

const actions = {
  getProjects: ({commit, state, dispatch}) => {
    commit(types.GET_PROJECTS, getProjects())
  }
}

/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
const mutations = {
  [types.GET_PROJECTS] (state, projects) {
    state.projects = projects
  }
}
const getters = {
  projects: state => state.projects
}

export default {
  state,
  actions,
  mutations,
  getters
}
