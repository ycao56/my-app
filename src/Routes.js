import loadable from 'loadable-components'
 
const Home = loadable(() => import(/* webpackChunkName: "custom-module" */ './custom/module'))

export default Home