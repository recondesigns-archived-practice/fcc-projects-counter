export function handleIncrease(number, setter) {
  setter(() => {
    return number + 1;
  });
}

export function handleDecrease(number, setter) {
  setter(() => {
    return number - 1;
  });
}

export function handleReset(setter) {
  setter(() => 0);
}

export function setNumberColor(number) {
  if (number > 0) {
    return "green";
  } else if (number < 0) {
    return "red";
  } else if (number === 0) {
    return "orange";
  }
}
