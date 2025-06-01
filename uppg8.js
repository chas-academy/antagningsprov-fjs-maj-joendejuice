

function uppg8() {
    const personer = [
        { name: "Josef", age: 22 },
        { name: "Harris", age: 35 },
        { name: "Luua", age: 32 },
        { name: "Hasan", age: 24 },
        { name: "Sara", age: 40 }
    ];

    function skrivUtPersonerOver30(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].age > 30) {
                console.log(array[i].name);
            }
        }
    }

    skrivUtPersonerOver30(personer);
}

module.exports = { uppg8 };
