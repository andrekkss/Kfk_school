const json = [
    {jdhsa:{
        nome: 'andre',
        idade: '20'
    },
    aluno02:{
        nome: 'delmar',
        idade: '19'
    }}
]

Object.entries(json).map(([data, key]) => {
    console.log(key)
    return console.log(data.nome)
})

const idade = json.filter(data => data.idade < 20)


console.log(idade);
//console.log(JSON.stringify(json));