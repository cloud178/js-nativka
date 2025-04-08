//ПАТТЕРНЫ subscriber === handler === listener === watcher === observer


// store.subscribe(function (){} ) //стор изменился
// button.addEventListener('click', function (){}) //кнопка была нажата
// setTimeout(function (){}, 2000) //прошло 2 секудны
//
// app.get('users', function (){} )// роут был вызван
// fs.watch('test.txt', function (){}) //файл был изменен
// websocket.on('message', function (){})//сообщение было получено

//
// const button = {
//
//     store: {
//         click: []
//     },
//
//
//     click() {
//         console.log('click')
//         button.store.click.forEach((s) => s())
//     },
//
//     addEventListener(eventName, handler) {
//         button.store[eventName].push(handler)
//         return () => {
//             button.removeEventListener(eventName, handler)
//         }
//     },
//
//     removeEventListener(eventName, handler) {
//         button.store[eventName] = button.store[eventName].filter((s) => s !== handler)
//     }
//
// }

// const handler = function (){
//     console.log('кнопка была нажата')
// }
//
// const unsubscribe = button.addEventListener('click', function (){
//     console.log('кнопка была нажата')
// })
// button.click()
//
// unsubscribe()
//
// // button.removeEventListener('click', handler)
//
// button.click()

// class Publisher {
//     subscribers= {
//     }
//     subscribe(eventName, subscriber) {
//         if (!this.subscribers[eventName]) {
//             this.subscribers[eventName] = [];
//         }
//         this.subscribers[eventName].push(subscriber);
//     }
//     unsubscribe(eventName, subscriber) {
//         if (!this.subscribers[eventName]) return;
//         this.subscribers[eventName] = this.subscribers[eventName].filter(sub => sub !== subscriber);
//     }
//     publish(eventName, data) {
//         if (!this.subscribers[eventName]) return;
//         this.subscribers[eventName].forEach(subscriber => subscriber(data));
//     }
// }
//
// const publisher = new Publisher()
//
// function sendEmail(user) {
//     console.log(`Email был отправлен юзеру ${user.name}`)
// }
//
// function sendSms(user) {
//     console.log(`Sms было отправлено юзеру ${user.name}`)
// }
//
// publisher.subscribe('USER_CREATED', sendEmail)
// publisher.subscribe('USER_CREATED', sendSms)
//
//
// function createUser(name) {
//     const user = {
//         name
//     }
//     console.log('User был создан')
//     publisher.publish('USER_CREATED', user)
// }
//
// function updateUser(name) {
//     const user = {
//         name
//     }
//     console.log('User был обновлен')
//     publisher.publish('USER_UPDATED', user)
// }
// //app.post('users', createUser() )
// createUser('Artem')

//СОБЫТИЯ
const smallDiv = document.querySelector('#small')
const mediumDiv = document.querySelector('#medium')
const bigDiv = document.querySelector('#big')
const link = document.querySelector('#linkId')

const handler = (event) => {
    console.log('target: ', event.target.id)
    console.log('currentTarget: ', event.currentTarget.id)
    // event.stopPropagation()
}


// smallDiv.onclick = handler

smallDiv.addEventListener('click', handler)
mediumDiv.addEventListener('click', handler)
bigDiv.addEventListener('click', handler)

const handler2 = (event) => {
    // event.preventDefault()
    console.log('link clicked')
}
link.addEventListener('click', handler2)
