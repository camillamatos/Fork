filas = [
    {
        nome: "nivel 0",
        tempo: [],
    },
    {
        nome: "nivel 1",
        tempo: [],
    },
    {
        nome: "nivel 2",
        tempo: [],
    },
    {
        nome: "nivel 3",
        tempo: [],
    },
    {
        nome: "nivel 4",
        tempo: [],
    },
]

let flag;

for (let i = 0; i < 20; i++) {
    const aleatorio = Math.floor(Math.random() * 6);
    const data = new Date().getMilliseconds();

    console.log(filas);
    console.log(aleatorio);
    if (aleatorio !== 5) {
        filas[aleatorio].tempo.push(data);
    } else {
        flag = 0;
        filas.forEach(fila => {
            if ((fila.tempo.length > 0) && (flag == 0)) {
                fila.tempo.pop();
                flag = 1;
            }
        });
    }

    filas.forEach((fila, index) => {
        fila.tempo.forEach((temp, idx) => {
            if (index > 0) {
                const atual = new Date().getMilliseconds();
                if ((atual - temp) > 5) {
                    filas[index - 1].tempo.push(temp);
                    fila.tempo.splice(idx);
                }
            }
        });
    });


}
