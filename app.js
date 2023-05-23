"use strict";

//using constructor and parameters (blueprint)
function Employee(name, departments, levels, image) {

    this.employeeId = EmployeeID();
    this.fullName = name;
    this.department = departments;
    this.level = levels;
    this.ImageUrl = image;
    this.salary = Salary(levels);

    //adding prototype to render
    Employee.prototype.render = function () {
        document.write("<h4>Name: " + this.fullName + "</h4>");
        document.write("<p>Department: " + this.department + "</p>");
        document.write("<p>Salary: " + this.salary + "</p>");
    };

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
    
}

//create new obj from constructor
let Ghazi = new Employee("Ghazi Samer","Administration","Senior","https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=");
let Lana = new Employee("Lana Ali","Finance","Senior","https://media.istockphoto.com/id/1319763830/photo/portrait-of-smiling-mixed-race-woman-looking-at-camera.jpg?s=612x612&w=0&k=20&c=L0d04sc89UuLW0G80UCu4egl0tQwyl8PLKsIZotbP_U=",) 
let Tamara = new Employee("Tamara Ayoub","Marketing","Senior","https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg");
let Safi = new Employee("Safi Walid","Administration","Mid-Senior","https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg");
let Omar = new Employee("Omar Zaid", "Development", "Senior","https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg");
let Rana = new Employee("Rana Saleh", "Development","Junior","https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg");
let Hadi = new Employee("Hadi Ahmad","Finance","Mid-Senior","https://img.freepik.com/free-photo/handsome-cheerful-man-with-happy-smile_176420-18028.jpg");

console.log(Ghazi);
console.log(Lana);
console.log(Tamara);
console.log(Safi);
console.log(Omar);
console.log(Rana);
console.log(Hadi);

// Render the employee details 
Ghazi.render();
Lana.render();
Tamara.render();
Safi.render();
Omar.render();
Rana.render();
Hadi.render();