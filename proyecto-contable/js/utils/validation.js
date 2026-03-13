// Validaciones
export function validarEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}