import { reactive, watch } from 'vue'

const InterfaceStore = reactive({
	windowWidth: window.innerWidth,
	windowVisible: !document.hidden,
	breakpoints: {},
})

const updateWindowState = () => {
	InterfaceStore.windowWidth = window.innerWidth
	InterfaceStore.breakpoints = { 
		verticalLayout: InterfaceStore.windowWidth < 600,
		verticalContent: InterfaceStore.windowWidth < 1100
	}
}

updateWindowState()
window.addEventListener('resize', updateWindowState)
document.addEventListener('visibilitychange', () => InterfaceStore.windowVisible = !document.hidden)
watch(() => InterfaceStore.breakpoints.verticalLayout, (verticalLayout) => {
	verticalLayout
		? document.getElementById('app').classList.add('verticalLayout')
		: document.getElementById('app').classList.remove('verticalLayout')
}, { immediate: true })

export default InterfaceStore