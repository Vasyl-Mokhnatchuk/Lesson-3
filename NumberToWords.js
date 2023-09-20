function numberToWords(number) {
    const ones = ["нуль", "один", "два", "три", "чотири", "п'ять", "шість", "сім", "вісім", "дев'ять", "десять",
        "одинадцять", "дванадцять", "тринадцять", "чотирнадцять", "п'ятнадцять", "шістнадцять",
        "сімнадцять", "вісімнадцять", "дев'ятнадцять"];
    const tens = ["", "", "двадцять", "тридцять", "сорок", "п'ятдесят", "шістдесят", "сімдесят", "вісімдесят", "дев'яносто"];

    if (number <= 19) {
        return ones[number];
    } else if (number <= 99) {
        const remainder = number % 10;
        return tens[Math.floor(number / 10)] + (remainder !== 0 ? " " + ones[remainder] : "");
    } else if (number === 100) {
        return "сто";
    }

    return "Від 0 до 100";
}

const inputNumber = parseInt(prompt("Введіть число від 0 до 100"));
if (!isNaN(inputNumber)) {
    const result = numberToWords(inputNumber);
    alert(result);
}