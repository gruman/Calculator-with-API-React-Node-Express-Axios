exports.add = (req, res) => {
  let num1 = parseFloat(req.body.num1);
  let num2 = parseFloat(req.body.num2);
  res.status(200).json({ result: num1 + num2 });
};

exports.subtract = (req, res) => {
  let num1 = parseFloat(req.body.num1);
  let num2 = parseFloat(req.body.num2);
  res.status(200).json({ result: num1 - num2 });
};

exports.multiply = (req, res) => {
  let num1 = parseFloat(req.body.num1);
  let num2 = parseFloat(req.body.num2);
  res.status(200).json({ result: num1 * num2 });
};

exports.divide = (req, res) => {
  let num1 = parseFloat(req.body.num1);
  let num2 = parseFloat(req.body.num2);
  res.status(200).json({ result: num1 / num2 });
};
   