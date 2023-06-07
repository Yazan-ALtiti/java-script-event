
function showMsg() {

    let myStudents = [

        firstStudent = {
            name: "yazan",
            id: 1,
            age: 20,

            brothers: ["waseem", "mohammed", "fares"]
        },


        secondStudent = {
            name: "nadia",
            id: 2,
            age: 20,

            brothers: ["ahmed", "mahmod"]
        },
        thirdStudent = {
            name: "ayham",
            id: 5432,
            age: 22,

            brothers: ["ata", "yaser"]


        }, forthStudent = {
            name: "abeer",
            id: 6789,
            age: 24,

            brothers: ["mahmoud", "ayman"]


        }, fithStudent = {
            name: "jameel",
            id: 256,
            age: 23,

            brothers: ["abdalrahman", "hadi"]


        }, sixthStudent = {
            name: "mostafa",
            id: 1245,
            age: 25,

            brothers: ["smai", "mahmod"]
        },
        sevenStudent = {
            name: "jalal",
            id: 2255,
            age: 26,

            brothers: null
        
        }


    ]
    console.log(myStudents.length)

    for (let i = 0; i < myStudents.length; i++) {
        //console.log(i)
        //  console.log(myStudents[i].id)
        if (myStudents[i].id > 2000) {
            console.log("goodjob" + " " + myStudents[i].name + " " + "you will be graduated")

        }




    }



}
//showMsg()

