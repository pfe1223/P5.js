function getMultiplier(expr) {
  let parts = expr.split(operator);
  let v = partWithVariable(parts);
  let m = checkFraction(v);
  return m;
}

function checkFraction(v) {
  let decimal = 0;
  if (match(v, "\\/")) {
    let convert = split(v, "/");
    for (let i = 0; i < convert.length; i++) {
      if (convert[i] != "x") {
        decimal = 1 / int(convert[i]);
      }
    }
    return (decimal);
  } else {
    return (int(v[0]));
  }
}

function partWithVariable(parts) {
  for (let i = 0; i < parts.length; i++) {
    if (match(parts[i], "x") != null) {
      return parts[i];
    }
  }
}

function removeVariable(v) {
  return v[0];
}

function getOperator(expr) {
  if (match(expr, "\\+") != null) {
    return "+";
  } else {
    return "-";
  }
}

function getConstant(expr) {
  let parts = expr.split(operator);
  let nv = partWithoutVariable(parts);
  let ne = partWithoutEqual(nv);
  return int(ne);
}

function partWithoutVariable(parts) {
  for (let i = 0; i < parts.length; i++) {
    if (match(parts[i], "x") == null) {
      return parts[i];
    }
  }
}

function partWithoutEqual(parts) {
  return parts.split("=")[0];
}

function getResult(expr) {
  let parts = expr.split('=');
  return int(parts[parts.length - 1]);
}
