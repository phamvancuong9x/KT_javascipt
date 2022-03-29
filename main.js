// Bài 1: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu
function volumeSphere(r) {
  if (r <= 0) {
    console.log("dữ liệu đầu vào ko đúng !");
    return;
  }
  const volume = (4 / 3) * Math.PI * r * r * r;
  console.log("Thể tích hình cầu là :", volume);
  return volume;
}

// Bài 2: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng.
//  Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

function sumNumber(number1, number2) {
  let sum = 0;
  if (number1 < number2) {
    for (let i = number1 + 1; i < number2; i++) {
      sum += i;
    }
  } else {
    for (let i = number2 + 1; i < number1; i++) {
      sum += i;
    }
  }

  console.log("Tổng giữa 2 số nguyên là :", sum);
  return sum;
}
// Bài 3: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.

function totalDivisor(number) {
  if (number <= 0) return "giá trị nhập vào không hợp lệ";
  let sum = number;
  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      sum += i;
    }
  }

  console.log("Tổng các ước số của 1 số là :", sum);
  return sum;
}

// Bài 4: Cho 1 số nguyên dương bất kỳ, kiểm tra xem số đó có phải là số nguyên tố
//  hay không, kết quả trả về true hoặc false.

function checkPrimeNumber(number) {
  let isPrime = true;
  if (number < 2) {
    isPrime = false;
  } else {
    for (let i = 2; i <= number / 2; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }
  }

  if (isPrime) {
    console.log(`${number} là số nguyên tố`);
  } else {
    console.log(`${number} ko phải là số nguyên tố`);
  }

  return isPrime;
}

// Bài 5: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố nhỏ
//  hơn hoặc bằng tham số truyền vào.
function sumPrime(number) {
  let sum = 0;
  for (let i = 2; i < number; i++) {
    console.log(checkPrimeNumber(i));
    if (checkPrimeNumber(i)) {
      sum += i;
    }
  }
  console.log(`Tổng tất cả các số nguyên tố là : ${sum}`);
  return sum;
}

//=================================== XU LÝ CHUỖI===============================
// Bài 1: Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên
//  của mỗi từ. Ví dụ: ''HELLO world'' => ''Hello World''.

function toCapitalization(String) {
  let newString = String.toLowerCase();
  let result = "";
  console.log(newString);
  for (let i = 0; i < newString.length; i++) {
    if (i == 0) {
      result += newString[i].toUpperCase();
    } else if (newString[i] == " " && i < newString.length - 1) {
      result += " " + newString[i + 1].toUpperCase();
      i++;
    } else {
      result += newString[i];
    }
  }
  console.log(`Chuỗi mới viết hoa các chữ cái đầu tiên : ${result}`);
  return result;
}
// Bài 2 Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case.
//  Ví dụ: ''HELLO world'' => ''hello-world''.
function spinalCase(String) {
  let newString = String.toLowerCase();
  let result = newString.replaceAll(" ", "-");
  console.log(`Chuỗi mới dạng Spinal case là: ${result}`);
  return result;
}
// Bài 3: Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không
// (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng và không phân biệt hoa thường)
// , kết quả trả về true hoặc false. Ví dụ ''Race car'' trả về true,
// ''hello world'' trả về false.

function checkString(String) {
  let newString = String.toLowerCase().replaceAll(" ", "");
  console.log(newString);
  let result = "";
  for (let i = newString.length - 1; i >= 0; i--) {
    result += newString[i];
  }
  console.log(result);
  if (result == newString) {
    console.log("chuỗi này là chuỗi đối xứng");
    return true;
  } else {
    console.log("chuỗi này ko phai là chuỗi đối xứng");
    return false;
  }
}

// Bài 4: Viết hàm truyền vào 2 chuỗi, kiểm tra xem chuỗi thứ nhất có chứa toàn bộ ký tự
// (tính cả dấu cách) nằm trong chuỗi thứ 2 hay không, kết quả trả về true nếu có và false
//  nếu không (không phân biệt hoa thường). Ví dụ ''HELLO world'' có chứa ''how''
//   nhưng không chứa ''hey'' và không chứa ''ww''.

function isCheckStrings(String1, String2) {
  let newString1 = String1.toLowerCase();
  let newString2 = String2.toLowerCase();
  let result = true;
  for (let i = 0; i < newString1.length; i++) {
    if (newString2.includes(newString1[i])) {
      newString2 = newString2.replace(newString1[i], "");
    } else {
      result = false;
    }
  }
  return result;
}

// ======================Xử lÝ MẢNG ===================

// Bài 1: Viết hàm loại bỏ các giá trị sai trong 1 mảng.
//  Các giá trị sai bao gồm: false, null, undefined, NaN, 0, ''''.

function handleArray(arrays) {
  let newArrays = [];
  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i]) {
      newArrays = [...newArrays, arrays[i]];
    }
  }
  return newArrays;
}

// Bài 2: Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất.
//  Ví dụ với tham số [''aba'', ''aa'', ''ad'', ''c'', ''vcd''] thì kết quả trả về
//  [''aba'', ''vcd''].
function maxLength(Arrays) {
  let maxlength = 1;
  for (let i = 0; i < Arrays.length; i++) {
    if (Arrays[i].length > maxlength) {
      maxlength = Arrays[i].length;
    }
  }
  return maxlength;
}
function maxArray(Arrays) {
  let newArrays = [];
  for (let i = 0; i < Arrays.length; i++) {
    if (maxLength(Arrays) == Arrays[i].length) {
      newArrays = [...newArrays, Arrays[i]];
    }
  }
  return newArrays;
}

// Bài 3: Viết hàm so sánh mảng, truyền vào 2 mảng bất kỳ (chỉ chứa số nguyên),
//  kết quả trả về là 1 mảng chỉ chứa những phần tử không đồng thời nằm trong 2
// mảng truyền vào. Ví dụ truyền vào   [1, 2, 3] và [1, 3, 4, 5, 5] thì kết quả trả
// về là mảng [2, 4, 5, 5].

function isCheckArray(arrays, number) {
  let result = false;
  for (var i = 0; i < arrays.length; i++) {
    if (arrays[i] == number) {
      result = true;
    }
  }
  return result;
}
function addArray(arrays1, arrays2) {
  let newArrays = [];
  for (let i = 0; i < arrays1.length; i++) {
    if (!isCheckArray(arrays2, arrays1[i])) {
      newArrays = [...newArrays, arrays1[i]];
    }
  }
  return newArrays;
}
function oneNewArray(arrays1, arrays2) {
  let newArrays = [
    ...addArray(arrays1, arrays2),
    ...addArray(arrays2, arrays1),
  ];
  return newArrays;
}
//  Bài 4: Cho 2 số nguyên dương m và n. Tạo ra 1 mảng 2 chiều m x n là các số nguyên
//  liên tiếp (tính từ 1) theo kiểu ziczac. Ví dụ với m = 3 và n = 4 thì kết quả là mảng
//  2 chiều như sau                 [ [1, 2, 3, 4], [8, 7, 6, 5], [9, 10, 11, 12] ].

// =============================Xử lý OBJ========================
// Bài 1: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }.
// Viết hàm tính ra số tuổi trung bình của toàn bộ sinh viên.
function handleAge(Arrays) {
  let ageArray = [];
  for (let i = 0; i < Arrays.length; i++) {
    ageArray = [...ageArray, Arrays[i].age];
  }
  let totalAge = ageArray.reduce((total, curentvalue) => {
    return total + curentvalue;
  });
  let result = totalAge / ageArray.length;
  return result;
}
