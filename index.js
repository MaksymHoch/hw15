// task 1

for (let i = 1; i <= 10; i++) {
    console.log(i * i);
  }
  
  // task 2
  function checkPassword() {
    const savedPassword = "secret123";
    let inputPassword;
  
    while (true) {
      inputPassword = prompt("Введіть пароль:");
  
      if (inputPassword === savedPassword) {
        console.log("Ви успішно увійшли в систему");
        break; // виходимо з циклу, якщо пароль правильний
      } else {
        console.log("Невірний пароль, спробуйте ще раз");
      }
    }
  }
  
  checkPassword();
  
  // task 3
  
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  console.log(sum);
  
  // task 4
  
  for (let i = 10; i <= 50; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
  
  // task 5
  
  function drawTriangle(size) {
    for (let i = 1; i <= size; i++) {
      console.log("*".repeat(i));
    }
  }
  
  let size = prompt("Введіть розмір трикутника:");
  drawTriangle(Number(size));
  
  // task 6////////////////////////////////////////////
  
  function drawSquareWithDiagonal(size) {
    for (let i = 0; i < size; i++) {
      let row = "";
      for (let j = 0; j < size; j++) {
        if (i === 0 || i === size - 1 || j === 0 || j === size - 1 || i === j) {
          row += "*";
        } else {
          row += " ";
        }
      }
      console.log(row);
    }
  }
  
  let size = prompt("Введіть розмір квадрата:");
  drawSquareWithDiagonal(Number(size));
  
  // task 7
  
  function drawSquareWithReverseDiagonal(size) {
    for (let i = 0; i < size; i++) {
      let row = "";
      for (let j = 0; j < size; j++) {
        if (
          i === 0 ||
          i === size - 1 ||
          j === 0 ||
          j === size - 1 ||
          i + j === size - 1
        ) {
          row += "*";
        } else {
          row += " ";
        }
      }
      console.log(row);
    }
  }
  
  let size = prompt("Введіть розмір квадрата:");
  drawSquareWithReverseDiagonal(Number(size));
  