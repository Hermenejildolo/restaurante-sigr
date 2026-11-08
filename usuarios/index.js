// Módulo de Usuarios - Esqueleto básico
function login(username, password) {
    if (username === "admin" && password === "1234") {
        return "Autenticación exitosa";
    }
    return "Error de autenticación";
}

module.exports = { login };
