// const button = {
//     subsctibers: {
//         click: []
//     },
//
//     click() {
//         console.log('click')
//         this.subsctibers.click.forEach(f => f())
//     },
//
//     addEventListener(event, func) {
//         this.subsctibers[event].push(func)
//         return () => {
//             this.removeEventListener(event, func)
//             // this.subsctibers[event] = this.subsctibers[event].filter(f => f !== func)
//         }
//     },
//
//     removeEventListener(event, func) {
//         this.subsctibers[event] = this.subsctibers[event].filter(f => f !== func)
//     }
// }
//
// const handler = () => {
//     console.log(1)
// }
//
// const unsubscribe = button.addEventListener('click', handler)
//
// button.click()
//
// unsubscribe()
//
// // button.removeEventListener('click', handler)
//
// button.click()












