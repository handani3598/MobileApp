const Student  = require ('./Student.js');
const readline = require('readline');

let newStud = new Student();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your name : ', (newname) => {
    rl.question('Enter your matric No : ', (newmatricNo)=>{
        rl.question('Enter your major : ', (newmajor) => {
                newStud.name = newname;
                newStud.matricNo = newmatricNo;
                newStud.major = newmajor;

                const view = () => {
                    return `Your student details 
                    Name      : ${newStud.name} 
                    Matric No : ${newStud.matricNo} 
                    Major     : ${newStud.major}` 
               
                }; 
                console.log(view());
            rl.close();
        });
    });
});