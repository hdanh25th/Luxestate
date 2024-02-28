// Loading
function loadingRemover() {
    const completed = document.querySelector(".loading")
    completed.classList.add("hidden")
}
window.addEventListener("load", loadingRemover())

// Header change
function headerChange() {
    const header = document.querySelector(".forChange")
    upDown = window.scrollY
    if (upDown > 500) {
        header.classList.add("change")
    } else header.classList.remove("change")

}
window.addEventListener("scroll", headerChange)

// Back to top btn
const button = document.querySelector(".backBtn")
function backDisplay() {
    upDown = window.scrollY
    if (upDown > 500) {
        button.classList.add("active")
    } else button.classList.remove("active")
}
window.addEventListener("scroll", backDisplay)

function triggered() {
    button.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
}
triggered()


// 1.1 (1) Nhập vào 1 số bất kỳ, kiểm tra số đó có phải là số chẵn hay không? Kết quả trả về kiểu true / false

function ex1(even) {
    if (even % 2 == 0) {
        return true
    } else {
        return false
    }
}
console.log(ex1(2)), console.log(ex1(3))


// 1.1 (2) Viết hàm kiểm tra số đó có chia hết cho 3 hay không?

function ex2(devide) {
    if (devide % 3 == 0) {
        return true
    } else {
        return false
    }
}
console.log(ex2(2)), console.log(ex2(3))

// 1.1 (3) Khai báo 2 số a = 4, b = 12, in kết quả bằng console.: Tính tổng 2 số a và b? Lấy b chia a, lấy phần dư? Lấy b chia a, lấy phần nguyên?
function ex3() {
    let a = 4, b = 12
    console.log("result is" + " " + (a + b)), console.log("remainder is" + " " + (b % a)), console.log("integral part is" + " " + Math.trunc(b / a))
}
ex3()



// 1.1 (4) In ra họ và tên của mình bằng cách khai báo 1 biến chứa họ và biến chứa tên, có khoảng trắng giữa họ và tên

function ex4() {
    let firstName = "Hoang", lastName = "Duc Anh"
    console.log(firstName + " " + lastName), console.log(`${firstName} ${lastName} (ES6 ver)`)
}
ex4()
// 1.1 (5) Viết hàm so sánh 2 số nguyên. nếu a > b thì trả về 1, nếu a < b thì trả về -1, nếu a == b thì trả về 0

function ex5(a, b) {
    if (a > b) {
        return 1
    } else if (a < b) {
        return -1
    } else if (a == b) {
        return 0
    }
}
console.log(ex5(2, 2))

// 1.1 (6) Khai báo một chuỗi ký tự là “happy new year”
// in ra tổng số ký tự có trong chuỗi
// in ra vị trí của chữ “y” từ đầu xuống và từ dưới lên
// Dùng replace để thay thế từ “happy” bằng một từ tuỳ ý 

let text = "happy new year"
console.log("The length is" + " " + text.length), console.log("The first y is at" + " " + text.indexOf("y") + " with indexOf"), console.log("The last y is at" + " " + text.lastIndexOf("y") + " with lastIndexOf"), console.log(text.replace("happy", "Fcked up"))

// 1.2 (1) Viết hàm nhập vào điểm của một học sinh và in ra kết quả tương ứng
// Lớn hơn 8 thì excellent
// Lớn hơn hoặc bằng 7 đến nhỏ hơn hoặc bằng 8 thì good
// Lớn hơn hoặc bằng 4 đến nhỏ hơn 7 thì not good
// Nhỏ hơn 4 thì Bad

function Ex1(points) {
    if (points > 8) {
        return "Excellent"
    } else if (points >= 7 && points <= 8) {
        return "Good"
    } else if (points >= 4 && points < 7) {
        return "Not good"
    } else if (points < 4) {
        return "Bad"
    } else {
        return "Absent"
    }
}
console.log(Ex1(7.7))

// 1.2 (2) Viết hàm nhập vào 1 chuỗi và chuẩn hóa chuỗi theo định dạng chữ cái đầu tiên của chuỗi phải được in hoa

function cfl(target) {
    let newTarget = target.toLowerCase()
    let detached = newTarget.split(" ")
    let i = 0
    while (i < detached.length) {
        let capitalize = detached[i].charAt(0).toUpperCase() + detached[i].slice(1)
        detached[i] = capitalize
        i++
    }
    let result = detached.join(" ")
    return result
}
console.log(cfl("HỌC lập TRình JavAScript"))

// 1.2 (3) Viết hàm định dạng số giây luôn có 2 chữ số

function Ex3(second) {
    let sec = second.toString()
    if (sec >= 10 && sec <= 90) {
        return sec.padEnd(2, "0") + "s"
    } else if (sec <= 9) {
        return sec.padStart(2, "0") + "s"
    } else {
        return alert("Limit exceed")
    }
}
console.log(Ex3(9))

// 1.2 (4) Viết hàm trích xuất domain như sau. Ví dụ: - Nếu là cfdcircle@gmail.com => "gmail.com" - Nếu là learning @cfdcircle.vn => "cfdcircle.vn"

function Ex4(extract) {
    let domain = extract.split("@")[1]
    return domain
}
console.log(Ex4("learning@cfdcricle.vn"))

// 1.2 (5) Viết hàm nhập vào 1 chuỗi và chuyển đổi chuỗi thành path URL

function Ex5(targetText) {
    let extractedText = targetText.split(" ")
    let url = extractedText.join("-")
    return url
}
console.log(Ex5("javascript cho nguoi moi bat dau"))

// 2.1 (1) Chạy vòng lặp với i = 0, i < 10, i++. Tính tổng giá trị mỗi lần i tăng lên 1

// function looper() {
//     let total = 0
//     for (i = 0; i < 10; i++) {
//         total += i
//     }
//     return console.log("result: " + total)
// }
// looper()

function looper() {
    let i = 0, total = 0
    while (i < 10) {
        total += i
        i++
    }
    console.log("result: " + total)
}
looper()

// 2.1 (2) In ra số chẵn từ 0 - 20

function evenNum() {
    let i = 0
    while (i >= 0 && i <= 20) {
        if (i % 2 == 0) {
            console.log(i)
        }
        i++
    }
}
evenNum()

// function evenNum() {
//     let i = 0
//     while (i >= 0 && i <= 20) {
//         console.log(i)
//         i += 2
//     }
// }
// evenNum()

// 2.2 (3) Tạo 1 mảng bất kỳ với 5 phần tử, thực hiện xoá 2 phần tử cuối, sau đó in ra mảng kết quả 

// Print the original array after the last two elements has been removed

function removeValue() {
    let letter = ["A", "B", "C", "D", "E"]
    letter.splice(3, 2)
    console.log("Remove result: " + letter)
}
removeValue()

// Print the removed aka the new array, not the original array

function removeValue2() {
    let letter2 = ["A", "B", "C", "D", "E"]
    let removed = letter2.splice(3, 2)
    console.log("New array: " + removed)
}
removeValue2()

// 2.1 (4) Tạo 1 mảng gồm tên các khoá học của CFD Circle. In ra số lượng các khoá học? in ra chỉ số
// index của mảng? In ra tên khoá học ở vị trí index thứ 2. in ra chuỗi tên các khoá học cách
// nhau bằng dấu phẩy và push thêm 2 phần tử bất kỳ vào mảng đã tạo

function cfdArr() {
    let course = ["Newbie", "Responsive", "React"]
    console.log(course)
    console.log("Course amount: " + course.length)
    let i = 0
    while (i < course.length) {
        console.log("index: " + i)
        i++
    }
    console.log("Course at index 2: " + course[2])
    console.log("Seperate by a comma: " + course.join(", "))
    course.push("React")
    course.unshift("Photoshop")
    console.log("Add 2 new elements into the array: " + course)
}
cfdArr()

// 2.1 (5) Tạo 1 mảng gồm các phần tử là kiểu số nguyên dương, tính tổng các phần tử có trong mảng?

// function integer() {
//     let total = 0, iNumber = [1, 2, 3, 4]
//     for (let value of iNumber) {
//         total += value
//     }
//     console.log("Total is: " + total)
// }
// integer()

function integer() {
    let iNumber = [1, 2, 3, 4]
    console.log("Total is: " + iNumber.reduce((a, b) => a + b, 0))
}
integer()

// 2.2 (1) Viết hàm random một số ngẫu nhiên từ 1 đến n (n là tham số bất kỳ được truyền vào)

function Random() {
    let min = 1, max = 10
    min = Math.ceil(min)
    max = Math.floor(max)
    console.log(Math.floor(Math.random() * (max - min + 1) + min))
}
let stopper = setInterval(Random, 1000)
setTimeout(function () {
    clearInterval(stopper);
}, 7000);

// 2.2 (2) Hiển thị một alert thông báo với nội dung bất kỳ sau khi vào trang web sau 4 giây

// function alarms() {
//     alert("What are you looking at? Get lost")
// }
// setTimeout(alarms, 4000)

// 2.2 (3) Lấy thời gian hệ thống để tạo đồng hồ bằng javascript, in ra giao diện người dùng trong thẻ H1

function clock() {
    let date = new Date(), time = date.toLocaleTimeString()
    let clockDisplay = document.getElementById("forClock")
    clockDisplay.textContent = time
}
clock()
setInterval(clock, 1000)
// let clockStopper = setInterval(clock, 1000)
// setTimeout(function () {
//     clearInterval(clockStopper);
// }, 7000);

// function clock() {
//     let date = new Date()
//     let hours = date.getHours()
//     let minutes = date.getMinutes()
//     let seconds = date.getSeconds()
//     document.write(`<h1>${hours}:${minutes}:${seconds}</h1> <br>`)
// }
// clock()
// let clockStopper = setInterval(clock, 1000)
// setTimeout(function () {
//     clearInterval(clockStopper);
// }, 7000);

// 2.2 (4) Tạo một mảng, bên trong gồm 4 đối tượng là các khoá học của CFD Circle, mỗi đối tượng gồm 
// các key (thuộc tính) name (tên khoá học), price (giá), date (ngày khai giảng). In ra các đối tượng 
// có trong mảng và in ra price (giá khoá học) của từng đối tượng

function cfd() {
    let cfdCourse = [
        {
            name: "Photoshop",
            price: 2000000,
            date: "4/17/23"
        },
        {
            name: "Newbie",
            price: 3000000,
            date: "5/17/23"
        },
        {
            name: "Responsive",
            price: 4000000,
            date: "6/17/23"
        },
        {
            name: "React",
            price: 5000000,
            date: "7/17/23"
        }
    ]
    let i = 0
    while (i < cfdCourse.length) {
        console.log(cfdCourse[i])
        console.log(`Course price: ${cfdCourse[i].price}`)
        i++
    }
}
cfd()

// 2.2 (5) Tạo 1 một đối tượng car gồm các thuộc tính (key): name, color, price. Kiểm tra xem thuộc tính (key) là speed có tồn tại trong đối tượng car hay không, trả về kiểu boolean

function vDetails() {
    let car = bike = {
        name: "Exciter150 (2019)",
        color: "Diversity",
        price: 35000000,
        speed: "136km/h top"
    }
    console.log(bike)
    console.log("Speed existed: " + bike.hasOwnProperty("speed"))
}
vDetails()

// 3.1(1) Tạo 1 mảng gồm tên các khoá học của CFD Circle. In ra số lượng các khoá học? In ra chỉ số
// index của mảng? In ra tên khoá học ở vị trí index thứ 2. In ra chuỗi tên các khoá học cách
// nhau bằng dấu phẩy và tính tổng giá các khoá học bằng cách sử dụng phương thức xử lý mảng nâng cao

function advMethod() {
    let course = [
        {
            name: "Newbie",
            price: 3000000,
        },
        {
            name: "Responsive",
            price: 4000000,
        },
        {
            name: "React",
            price: 5000000,
        }
    ]

    let amount = course.reduce(function (acc) {
        return acc + 1
    }, 0)
    console.log(`Course amount: ${amount}`)

    course.find(function (cValue, index) {
        console.log(`${cValue.name} | index: ${index}`)
    })

    course.forEach(function (cValue, index) {
        if (index == 2) {
            console.log(`Course at index 2: ${cValue.name}`)
        }
    })

    // let fil = course.filter(function (cValue, index) {
    //     return index == 2
    // })

    // let courseName = fil.map(function (cnValue) {
    //     return cnValue.name
    // })
    // console.log(`Course at index 2: ${courseName}`)

    let newArr = course.map(function (cValue) {
        return cValue.name
    })
    let connect = newArr.join(", ")
    console.log(`Seperate by a comma: ${connect}`)

    let sum = course.reduce(function (acc, cValue) {
        return acc + cValue.price
    }, 0)
    console.log(sum)
}
advMethod()

// 3.1 (2) Viết 1 hàm nhận vào 1 mảng số và trả về tổng giá trị các phần tử của mảng

function arrNum() {
    let arr = [77, 100, 600]
    let sum = arr.reduce(function (acc, cValue) {
        return acc + cValue
    }, 0)
    console.log(sum)
}
arrNum()

// 3.1(3) Viết 1 hàm nhận vào 2 tham số là array và character. Hàm trả về 1 chuỗi là kết quả của việc nối các phần tử của array với character
function receive() {
    let arr = ["God", "is", "dead"], char = "-"

    // let str = arr.map(function (cValue) {
    //     return cValue.split(" ")
    // })

    let str = arr.filter(function (cValue, index) {
        return index >= 0
    })

    console.log(str)
    let result = str.join(char)
    console.log(result)
}
receive()

// // 3.1 (4) Tạo 1 object user gồm: tên, tuổi, địa chỉ và 1 mảng chứa tên bạn bè. In ra array bạn bè? In ra 
// tên của người bạn cuối cùng? In ra địa chỉ của user? Thêm 1 người bạn vào mảng bạn bè? In
// ra độ dài mảng bạn bè?

function person() {
    let user = {
        name: "Haru",
        age: 17,
        address: "Cloudream",
        friends: ["Iris", "Chii", "Ephnel", "Miriam"],
    }

    // let convert = Object.values(user)

    let friendsList = user.friends
    console.log(friendsList)
    let lastFriend = friendsList.find(function (cValue, index, arr) {
        return index == arr.length - 1
    })
    console.log(`Last friend is: ${lastFriend}`)
    console.log(`Address: ${user.address}`)
    console.log(friendsList.push("Arua")), console.log(`New friend: ${friendsList.join(", ")}`), console.log(`Current length: ${friendsList.length}`)
}
person()

// 3.1 (5) Cho mảng gồm các phần tử 2,4,5,7,32,67,30,100. Trả về và in ra mảng mới gồm các phần tử có giá trị gấp đôi giá trị của từng phần tử mảng đã khởi tạo

function double() {
    let arrNum = [2, 4, 5, 7, 32, 67, 30, 100]
    let multiplier = arrNum.map(function (cValue) {
        return cValue * 2
    })
    console.log(multiplier)
}
double()

// 3.2(1) Viết 1 hàm nhận vào 1 tham số là mảng và trả về ngẫu nhiên 1 phần tử của mảng

function rGenerator() {
    let gRange = [1, 2, 3, 4, 5, 6, 7]
    let random = Math.floor(Math.random() * gRange.length)
    return console.log(random)
}
rGenerator()

// // 3.2 (2) Tạo 1 đối tượng student trống: Thêm thuộc tính name với giá trị là tên student? Thêm thuộc tính 
// age với giá trị là tuổi? Thay đổi giá trị name của student thành tên bất kỳ? Xóa thuộc tính age ra 
// khỏi đối tượng?

function blank() {
    let student = []
    student.name = "Iris"
    student.age = 17
    student.name = "Haru"
    delete student.age
    console.log(student)
}
blank()

// 3.2 (3) Tạo 1 mảng gồm các object là các student gồm tên và điểm trung bình. Viết 1 hàm nhận vào 1 tham số là mảng vừa tạo và trả về các object có điểm trung bình lớn hơn 5

function avgPoints() {
    let list = [
        {
            name: "A",
            points: 5
        },
        {
            name: "B",
            points: 6
        },
        {
            name: "C",
            points: 7
        }
    ]
    let passed = list.filter(function (cValue) {
        if (cValue.points > 5) {
            return cValue
        }
    })
    console.log(passed)
}
avgPoints()

// 3.2 (4) Tạo 1 mảng chứa các object có thuộc tính là tên các nhân viên và giá trị là tiền lương. Viết hàm trả về tổng tất cả lương của các nhân viên trong object
function salPeriod() {
    let employees = [
        {
            name: "A",
            salary: 7000000
        },
        {
            name: "B",
            salary: 8000000
        }
    ]
    let totalSal = employees.reduce(function (acc, cValue) {
        return acc + cValue.salary
    }, 0)
    console.log(`Total salary base on all employees: ${totalSal}`)
}
salPeriod()

// 3.2 (5) Cho mảng gồm các phần tử 2,4,5,7,32,67,30,100. Tìm và in ra phần tử đầu tiên thoả điều kiện phần tử đó > 20

function over20() {
    let arrNum = [2, 4, 5, 7, 32, 67, 30, 100]
    let greaterThan = arrNum.find(function (cValue) {
        return cValue > 20
    })
    console.log(arrNum), console.log(`First element that greater than 20: ${greaterThan}`)
}
over20()

// 3.2(6) Cho mảng diemso gồm các phần tử 5, 7, 8, 9, 3. Sử dụng hàm every để kiểm tra điểm số của học 
// sinh được lưu dưới dạng mảng có đủ để đỗ kỳ thi không.Điều kiện tất cả điểm số >= 5. Nếu đủ 
// điều kiện thì in ra “Đủ điểm đỗ” ngược lại thì “Không đủ điểm đỗ”

// function exam() {
//     let diemso = [5, 7, 8, 9, 3]
//     let result = diemso.every(function (cValue) {
//         return cValue >= 5
//     })
//     if (result == true) {
//         console.log("Eligible: Passed")
//     } else console.log("Ineligible: Failed")
// }
// exam()

const exam = () => {
    let diemso = [5, 7, 8, 9, 3];
    let result = diemso.every(cValue => cValue >= 5);
    if (result == true) {
        console.log("Eligible: Passed");
    } else {
        console.log("Ineligible: Failed");
    }
};
exam();


// Es6 (1) Viết 1 function nhận vào số lượng tham số không giới hạn. Hàm trả về độ dài của tất cả tham số

const getParametersLength = (...param) => param.reduce((acc, cValue) => acc + cValue.length, 0);
console.log(getParametersLength("abc", "xyz"))

// Es6 (2) Cho mảng gồm số chẵn và lẻ. Viết hàm nhận vào mảng đó và trả về mảng mới gồm những số lẻ được nhân đôi

let oddEven = [1, 2, 3, 4, 5, 6]

let oddNum = (odd) => odd.filter(cValue => cValue % 2 != 0).map(cValue => cValue * 2)
console.log(`Has been doubled: ${oddNum(oddEven)}`)


