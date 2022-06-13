# Maratona-Explorer

# HTML

- Hyper Text Markup Language
- Marcação 
  - tags
  - Atributos
- Linguagem
  - maneira de escrever 

O que é hypertext ?
O que é markup ?
O que é tag ?
O que é linguagem HTML ?  

# CSS 

- Apresentação visual para o cliente 
- Estilos para o HTML
- Cascading Style Sheet 
  - Folha de estilo em cascata 

## Declaração 

- Seletor
- Propriedade e Valor

## Conceitos 
- Cascata 
- Especificidade
- Box Model 
- Display Block vs Inline  


# JS

## 1.Variáveis 

```js
let itsRaining = true //Boolean
const myName = `Paulo` //String
```
## 2.Tipos de Dados
### String
-  ' ' 
-  " "
- ` `

### Number
- 12 - Inteiros (+ -)
- 3.2 - Float (+ -)

### Boolean
- True or False 
```Js
const maiorDeDezoito = false
```
- Undefined - Indefinido 

## 3. Operadores
### Atribuição (Ex: =)
- Atribui Valores
```js
let n1 = 12
let n2 = 3
```

### Aritiméticos (Ex: * / + - )
- Calculos matématicos simples 
```js
console.log(12 * 4)
```
- Cocatenação de Strings (+)
```js
console.log("Hoje é meu aniversaiuu, estou de parabauains" + 21 +" anosss de vuaida")
```
### Comparação (Ex: > < == )
-  Transforma a expressão em true ou false 
```js
const maiorQue = 1 > 2 //false 
const igualA = 1 == 1 //true
```

## 4. Condicional (if/else)
```js
const idade = 17 
const maiorDeDezoito = idade >= 18

if(maiorDeDezoito) {
	alert("Pode tirar carteira de motorista")
} else {
	alert("Não pode tirar")
}
```

## 5. Estrutura de dados 
- Array - Vetor - Lista
```js
//Array ==> ==> ==>     0     1   2  3
const temperaturas = [23.3, 32.2, 1, 5]
```

### Object 
```js
const pessoa = {
	nome: 'Paulo',
	idade: 21,
	peso: 110,
	comprometido: true	
}

console.log(`${pessoa.nome} é comprometido ? 
			${pessoa.comprometido}...`)
```

## 6. Function 
### 1. Criação
```js
function nomeDaFuncao() {
	console.log('Codigo dentro da Função')
}
```
### 2. Execução 
```js
	nomeDaFuncao()
```
#### Parâmetros
```js
function soma(a,b) {
	console.log(a + b)
}
soma(34, 45)
soma(90, 54)
```
#### Retorno
```js
function soma(a, b) {
	return a + b 
}
const multiplica = soma(2, 2) * 4
console.log(multiplica)
```
## 7. Extensões da linguagem (ex: Math, Date ...)
```js
Math.random()
Math.floor(1.2)
Math.ceil(1.2)
```

## 8. Dom - Document Object Model

#### Window
```js
window.alert("Alerta")
```

#### Document
```js
document.write("Texto")
```

#### Manipular
```js
document.documentElement.style.background = "black"
```



# Proximos Projetos
## Rolador de dados - 
- Aperte o botão e role dois dados e exiba o valor dos números rodados na tela 

## Gerador de frases motivacionais 
- Aperte um botão e gere uma frase motivacional 