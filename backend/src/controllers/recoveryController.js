const { generatePlan } = require("../services/recoveryService");

function handleRecovery(req, res) {
  const { problem, emailAccess } = req.body;

  const plan = generatePlan(problem, emailAccess);

  res.json({ plan });
}

module.exports = { handleRecovery };