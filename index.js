let button = document.getElementById('buttOn')
let div = document.getElementById('myDiv')
let text = document.getElementById('h')
let button1 = document.getElementById('buttOn1')


 let words = ['Ты пидор!', 'Ты красавчик!', 'Ты алкаш!', 'Ты Игорек!', 'Ты кум!',
  'Ты пиздащекотатель!','Ты лучший мой брат!','Ты черт!','Ты золото брат!','Ты гниль!',]
 let Random = (arr) => {
    let random = Math.floor(Math.random() * arr.length)
     return arr[random]
 }

button.onclick = () => {
    text.innerText = Random(words)
    div.style.display = 'block'
    button1.onclick = () =>{
        div.style.display = 'none'
    }
}