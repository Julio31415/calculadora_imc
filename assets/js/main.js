//Capturar o evento de submit do formulario
const form = document.querySelector("#formulario");

form.addEventListener('submit',function(event){
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');//pega todo o input
    const inputAltura = event.target.querySelector('#altura');//pega todo o input

    const peso = Number(inputPeso.value);//pega apenas o valor
    const altura = Number(inputAltura.value);//pega apenas o valor

    if(!peso){
        setResultado('Peso inválido',false);
        return;
    }
    if(!altura){
        setResultado('Altura inválida',false);
        return;
    }
    const imc = getImc(peso,altura);
    const nivelIMC = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelIMC}).`

    setResultado(msg, true);
});

function getNivelImc(imc){
    const nivel = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau 1','Obesidade Grau 2','Obesidade grau 3'];
    if(imc>=39.9){
        return nivel[5];
    }else if (imc>=34.9){
        return nivel[4];
    }else if(imc>=29.9){
        return nivel[3];
    }else if(imc>=24.9){
        return nivel[2];
    }else if(imc>=18.5){
        return nivel[1];
    }else if (imc<18.5){
        return nivel[0];
    }
}

function getImc(peso, altura){
    const imc = peso/altura**2;
    return imc.toFixed(2);
}

function setResultado(msg,isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    }else{
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}

function criaP(){
    const p = document.createElement('p');
    return p;
}