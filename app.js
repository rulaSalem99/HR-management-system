"use strict";

//using constructor and parameters (blueprint)
function Employee(name, departments, levels, image) {

    this.employeeId = EmployeeID();
    this.fullName = name;
    this.department = departments;
    this.level = levels;
    this.ImageUrl = image;
    this.salary = Salary(levels);


    function EmployeeID() {
        return Math.floor(Math.random() * 9999) + 1000;
    }

    function Salary(level) {
        let salaryTable = {
            Junior: { min: 500, max: 1000 },
            'Mid-Senior': { min: 1000, max: 1500 },
            Senior: { min: 1500, max: 2000 }
        };

        let { min, max } = salaryTable[level];
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

 //create container
let divE=document.createElement("div");
let body=document.getElementsByTagName("body")[0];
body.appendChild(divE);

//add employee images
let empImg=document.createElement("img");
empImg.src=this.ImageUrl;
empImg.alt=this.fullName;
empImg.style.maxWidth = "80%";
divE.appendChild(empImg);

//add emloyee names
let employeeName=document.createElement("p");
employeeName.textContent=`Name: ${this.fullName} - ID: ${this.employeeId}`;
divE.appendChild(employeeName);

//add department
let departmentEmp=document.createElement("p");
departmentEmp.textContent=`Department: ${this.department} - Level: ${this.level}`;
divE.appendChild(departmentEmp);

//add salary
let empSalary=document.createElement("p");
empSalary.textContent= this.salary;
divE.appendChild(empSalary);

//styling
divE.style.border="2px solid #C8B6A6";
divE.style.background= "#C8B6A6";
divE.style.borderRadius= "10px";
divE.style.padding="20px"
divE.style.textAlign="center"
divE.style.fontWeight="bold"
divE.style.width="250px";
divE.style.fontFamily="Arial, Helvetica, sans-serif"
divE.style.fontSize = "12px";
divE.style.margin= "40px"
divE.style.display= "inline-block";
divE.style.flexWrap= "wrap";

}

//create new obj from constructor
let Ghazi = new Employee("Ghazi Samer","Administration","Senior","./assets/Ghazi.jpg");
let Lana = new Employee("Lana Ali","Finance","Senior", "./assets/Lana.jpg");
let Tamara = new Employee("Tamara Ayoub","Marketing","Senior", "./assets/Tamara.jpg");
let Safi = new Employee("Safi Walid","Administration","Mid-Senior", "./assets/Safi.jpg");
let Omar = new Employee("Omar Zaid", "Development", "Senior", "./assets/Omar.jpg");
let Rana = new Employee("Rana Saleh", "Development","Junior", "./assets/Rana.jpg");
let Hadi = new Employee("Hadi Ahmad","Finance","Mid-Senior", "./assets/Hadi.jpg");

console.log(Ghazi);
console.log(Lana);
console.log(Tamara);
console.log(Safi);
console.log(Omar);
console.log(Rana);
console.log(Hadi);