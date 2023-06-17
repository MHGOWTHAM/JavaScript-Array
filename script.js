let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
   
    let employeeDeveloper=[];
    arr.map((element,ind)=>{
        if(element.profession==="developer"){
            employeeDeveloper[ind]=element;
        }
    });

    for(let i=0;i<employeeDeveloper.length;i++){
       console.log(employeeDeveloper[i]) 
    }
 
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log

   let developerEmployee= [];
   arr.forEach((employee,ind) => {
        if (employee.profession === "developer") {
         developerEmployee[ind]=employee;
        }
      });

     for(let i=0;i<developerEmployee.length;i++){
        console.log(developerEmployee[i])
     }

  }
  
  function addData() {
    //Write your code here, just console.log
    let idCount=arr.length;
    let newEmployee= {id:idCount+1,name:"sushant",age:"25",profession:"front-end"};
    arr.push(newEmployee);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr=arr.filter( (element)=> element.profession!=="admin" );
    console.log(arr)
  }
  
  function concatenateArray() {
    //Write your code here, just console.log

    let arr2 = [
        { id: 4, name: "nick", age: "39", profession: "manager" },
        { id: 5, name: "arul", age: "25", profession: "testing" },
        { id: 6, name: "karan", age: "24", profession: "engineer" },
    ];

    let newArray=arr.concat(arr2);
    console.log(newArray);
  }