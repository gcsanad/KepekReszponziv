const KEPEK = ["Laptop PNG 01.png",  
"Laptop PNG 02.png",
"Laptop PNG 03.png", 
"Laptop PNG 04.png",  
"Laptop PNG 05.png",
"Laptop PNG 06.png",
"Laptop PNG 07.png",  
"Laptop PNG 08.png",  
"Laptop PNG 09.png",  
"Laptop PNG 10.png",
"Laptop PNG 11.png"]

KEPEK.forEach(kep => {
    let Tarolo = document.createElement("div");
    let laptop = document.createElement("img")
    let random = Math.floor(Math.random()*3)+1
    laptop.src = `images\\Laptop PNG\\${kep}`
    laptop.classList.add(`kep${random}`)
    Tarolo.appendChild(laptop);
    Tarolo.classList.add("kartya");
    document.getElementById("tarolo").appendChild(Tarolo)
})

