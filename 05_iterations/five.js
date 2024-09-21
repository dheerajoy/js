const names = ["john", "sam", "bill", "peter"];

// names.forEach(function (val) {
//   console.log(val);
// });

// names.forEach((item)=>{console.log(item);})

// function printMe(val){
//     console.log(val);
// }

// names.forEach(printMe)

// names.forEach((item, index ,arr)=>{console.log(item , index , arr)})

const myList = [
    {
        taskId:'1',
        taskName:'WorkOut'
    },
    {
        taskId:'2',
        taskName:'Do coding'
    },
    {
        taskId:'3',
        taskName:'Learn a New skill'
    },
]

myList.forEach((item)=>{console.log(item.taskName);
})