// // // // // // // // // // // // // let myAge=20;

// // // // // // // // // // // // // // let doubleAge=myAge * 2;
// // // // // // // // // // // // // // console.log(doubleAge);


// // // // // // // // // // // // // Challenge 2

// // // // // // // // // // // // let quote="I'm learning Javascript !";
// // // // // // // // // // // // console.log(JSON.stringify(quote));

// // // // // // // // // // // Basic maths

// // // // // // // // // // function math(a,b)
// // // // // // // // // // {
// // // // // // // // // //     return calculate=[a+b,a-b,a*b,a/b]
// // // // // // // // // // }

// // // // // // // // // // console.log(math(10,5));

// // // // // // // // // // function character(a)
// // // // // // // // // // {
// // // // // // // // // //     a.split("")
// // // // // // // // // //     console.log(a[a.length-1]);
// // // // // // // // // // }

// // // // // // // // // // let c=character("Ayush")

// // // // // // // // // let a=["Apple","Banana","Cherry"]

// // // // // // // // // a.push("Mango");
// // // // // // // // // a.shift();
// // // // // // // // // console.log(a);

// // // // // // // // function multiplyByThree(a)
// // // // // // // // {
// // // // // // // //     return a*3;
// // // // // // // // }

// // // // // // // // let b=multiplyByThree(2);
// // // // // // // // console.log(b);

// // // // // // // function isEven(a)
// // // // // // // {
// // // // // // //     if (a%2==0)
// // // // // // //     {
// // // // // // //         return true;
// // // // // // //     }
// // // // // // //     else
// // // // // // //     {
// // // // // // //         return false;
// // // // // // //     }
// // // // // // // }

// // // // // // // console.log(isEven(2));

// // // // // // function canDrive(age,hasLicence)
// // // // // // {
// // // // // //     if (age>=18 || hasLicence==true)
// // // // // //     {
// // // // // //         return true;
// // // // // //     }
// // // // // //     else
// // // // // //     {
// // // // // //         return false;
// // // // // //     }
// // // // // // }

// // // // // // console.log(canDrive(18,true));

// // // // // function getGrade(grade)
// // // // // {
// // // // //     if (grade>90)
// // // // //     {
// // // // //         return "A";
// // // // //     }
// // // // //     else if (grade>=80 && grade<90)
// // // // //     {
// // // // //         return "B";
// // // // //     }
// // // // //     else if (grade>=70 && grade<80)
// // // // //         {
// // // // //             return "C";
// // // // //         }
// // // // //         else if (grade>=60 && grade<70)
// // // // //             {
// // // // //                 return "D";
// // // // //             }
// // // // //             else
// // // // //             {
// // // // //                 return "F"
// // // // //             }
// // // // // }

// // // // // console.log(getGrade(55));

// // function nextLine(queue,num)
// // {
// //     queue.push(num);
// //     return queue[0];
// // }

// // let queue=[1,2,3,4,5]
// // console.log(nextLine(queue,6));

// // // function canDrive(age,hasLicence)
// // // {
// // //     if (age>=18 && hasLicence==true)
// // //     {
// // //         return "Can Drive";
// // //     }
// // //     else
// // //     {
// // //         return "Cannot Drive"
// // //     }
// // // }
// // // console.log(canDrive(20,true));

// // 10. If Else If

// let testsize=(num)=>{
//     if (num>=20)
//     {
//         return "Huge";
//     }
//     else if(num<20)
//     {
//         return "Large";
//     }
//     else if(num<15)
//         {
//             return "Medium";
//         }
//         else if (num<10)
//         {
//             return "Small";
//         }
//         else
//         {
//             return "Tiny"
//         }
// }

// console.log(testsize(21));

let calculator=(a,op,b)=>
{
    switch(op)
    {
    case 1:
        if (op="+")
        {
        console.log(a+b);
        }
        break;
        case 2:
            console.log(a-b);
            break;
            default:
                console.log("Invalid input");
                break;
    }


}

calculator(2,"+",3);