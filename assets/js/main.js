// 1
console.log('1 ЗАДАНИЕ')
let aa = prompt('Введите A: ')
let bb = prompt('Введите B:')

for(let i = 1; i<=bb; i++){
  console.log(i);
}

// 2
console.log('2 ЗАДАНИЕ')
function min(a, b){
  if(a < b){
    let min1 = a
    console.log(min1)
  }
  else{
    let min2 = b
    console.log(min2)
  } 
}
let a = prompt("Введите A:")
let b = prompt("Введите B:")
min(a, b)

// 3
console.log('3 ЗАДАНИЕ')

const styles = ["Джаз", "Блюз"]
console.log(styles)

styles.push("Рок-н-Ролл")
console.log(styles)

styles[Math.floor(styles.length/2)] = "Классика"
console.log(styles)

styles.shift()
console.log(styles)

styles.unshift("Рэп", "Регги")
console.log(styles)