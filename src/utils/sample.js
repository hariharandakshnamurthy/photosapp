const options = ['do reschedule', "don't reschedule"]

const choice = (arr) => {
    const num = Math.floor(Math.random(0, 1))
    return arr[num]
}

console.log(choice(options))