function cualEsMayor(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
      return "El número más grande es: " + num1;
    } else if (num2 >= num1 && num2 >= num3) {
      return "El número más grande es: " + num2;
    } else {
      return "El número más grande es: " + num3;
    }
  }
  
  console.log(cualEsMayor(1, 2, 3));