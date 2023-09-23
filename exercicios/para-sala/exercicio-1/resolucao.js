let employee1 = {}
 employee1.id = 1313
employee1.firstname = 'Maria'
employee1.lastName = 'Silva'
employee1.salary = 2500
employee1.raiseSalary = function raiseSalary (percent){
    this.salary += (this.salary * percent) 
    console.log(`O novo salário é R$ ${this.salary}`)
}

let employee2 = {};
 employee2.id = 1313
employee2.firstname = 'Jose'
employee2.lastName = 'Meira'
employee2.salary = 2200
employee2.raiseSalary = function raiseSalary(percent){
    this.salary += (this.salary * percent) 
    console.log(`O novo salário é R$ ${this.salary}`)
}

employee1.raiseSalary(0.1)
employee2.raiseSalary(0.1)