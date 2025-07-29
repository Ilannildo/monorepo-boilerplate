export function isValidCNPJ(input: string): boolean {
  const cnpj = input.replace(/[^\d]+/g, "");

  if (cnpj === "") {
    return false;
  }

  if (cnpj.length !== 14) {
    return false;
  }

  // Elimina CNPJs inválidos conhecidos
  const invalidKnownCNPJs = [
    "00000000000000",
    "11111111111111",
    "22222222222222",
    "33333333333333",
    "44444444444444",
    "55555555555555",
    "66666666666666",
    "77777777777777",
    "88888888888888",
    "99999999999999",
  ];

  if (invalidKnownCNPJs.includes(cnpj)) {
    return false;
  }

  let totalLength = cnpj.length - 2;
  let numbers = cnpj.substring(0, totalLength);
  const digits = cnpj.substring(totalLength);
  let sum = 0;
  let pos = totalLength - 7;
  for (let i = totalLength; i >= 1; i--) {
    sum += parseInt(numbers.charAt(totalLength - i)) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }
  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(0))) {
    return false;
  }

  totalLength = totalLength + 1;
  numbers = cnpj.substring(0, totalLength);
  sum = 0;
  pos = totalLength - 7;
  for (let i = totalLength; i >= 1; i--) {
    sum += parseInt(numbers.charAt(totalLength - i)) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }
  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(1))) {
    return false;
  }

  return true;
}

/**
 * Função para validar CPF.
 * @param cpf - CPF a ser validado.
 * @returns `true` se o CPF for válido, caso contrário `false`.
 */
export function isValidCPF(cpf: string): boolean {
  if (!cpf) return false;

  cpf = cpf.replace(/[^\d]/g, "");

  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
    return false;
  }

  let sum = 0;
  let remainder;

  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(9, 10))) {
    return false;
  }

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(10, 11))) {
    return false;
  }

  return true;
}
