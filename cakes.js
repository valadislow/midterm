const cakes = [
    {
        cakeName: "Oreo-truffel",
        calories: 330,
        price: 10,
    },
    {
        cakeName: "Banana-cake",
        calories: 290,
        price: 9,
    },
    {
        cakeName: "Nutella-cake",
        calories: 200,
        price: 5,
    },
    {
        cakeName: "Oreo-cake",
        calories: 200,
        price: 5,
    },
    {
        cakeName: "Pavlova",
        calories: 350,
        price: 5,
    }
]

const act = () => {
    let action = document.querySelector("#choice").value;
    let cakeInQuestion;
    switch(action) {
        case "C":
           createCake();
           break;
    //     case "R":
    //         readCake();
    //         break;
    //     case "U":
    //         CakeInQuestion = findCake()
    //         alert(CakeInQuestion)
    //         console.log(cakeInQuestion)
    //         updateAcake(cakeInQuestion)
    //         break;
    //     case "D":
    //         cakeInQuestion = findCake();
    //         deleteACake(cakeInQuestion);
    //         break;
    }

    const createCake = () => {
        setCakeInfo(null)
        let name = prompt("Cake name?");
        let cals = prompt("Cake calories");
        let cost = prompt("Cake price?");
        cakes.push({
            cakeName: name,
            calories: parseFloat(cals),
            price: parseFloat(cost)
        })
        listCakes();
        
        console.log(cakes)
    }
    const readCake = (cakes) => {
        cakes.find(cake)

        }
    }

