
class User {
    isEnter = false
    start() {
        console.log("Користувач увійшов!")
        this.isEnter = true
    }
    stop() {
        console.log("Користувач вийшов!")
        this.isEnter = false
    }
}
let user = new User
console.log(user.isEnter)
user.start()
console.log(user.isEnter)
user.stop()
console.log(user.isEnter)
