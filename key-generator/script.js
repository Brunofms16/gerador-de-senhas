// seleçao de elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");
const password = generatedPasswordElement.querySelector("h4").innerText;


// funçoes

const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26   ) + 97);
};
// getLetterLowerCase();

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26   ) + 65);
};
// getLetterUpperCase();


const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
};

const getSybol = () => {
    const symbols = "(){}[]=<>/.!@#$%&*=+:?";
    return symbols[Math.floor(Math.random() * symbols.length)]
};


const generatePassword = (
    getLetterUpperCase,
    getLetterLowerCase,
    getNumber,
    getSybol
    ) => {
    
let password = "";

const passwordLenght = 10;

const generators = [
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSybol
];

 for(i = 0; i < 8; i = i + 4) {
generators.forEach(() => {
const randomValue =
generators[Math.floor(Math.random() * generators.length)]();

password += randomValue;


});
}
password = password.slice(0, passwordLenght);

generatedPasswordElement.getElementsByClassName.display = "block";
generatedPasswordElement.querySelector("h4").innerText = password;

};
// console.log(getNumber());


// eventos
generatePasswordButton.addEventListener('click', () => {
    generatePassword(
        getLetterLowerCase,
        getLetterUpperCase,
        getNumber,
        getSybol

    )


});
