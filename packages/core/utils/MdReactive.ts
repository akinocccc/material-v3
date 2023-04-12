import Vue from 'vue'

export default function (data) {
  const Instance = {}

  Vue.uti.defineReactive(Instance, 'reactive', data)

  return Instance.reactive
}
