import VueMarkdownComponent from './VueMarkdown'

export function install(Vue, name = 'vue-markdown') {
  Vue.component(name, VueMarkdownComponent)
}
