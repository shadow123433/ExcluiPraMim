function generatePlan(problem, emailAccess) {
  if (problem === "hack") {
    return emailAccess === "sim"
      ? "Redefina sua senha imediatamente pelo site oficial."
      : "Solicite verificação de identidade no suporte.";
  }

  if (problem === "senha") {
    return "Use a opção 'Esqueci minha senha'.";
  }

  if (problem === "email") {
    return "Recupere seu e-mail ou use suporte.";
  }

  return "Problema não identificado.";
}

module.exports = { generatePlan };