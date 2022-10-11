let user1 = {
    name:"Diego",
    email: "diego@gmail.com"
};

let user2 = {
    name: "Sergio",
    email: "sergio@gmail.com"
};


let intersectObjects = (obj1,obj2) => {
   let int = {};
   for(let key in obj1){
    if(key in obj2){
        int[key]=0;
    }
   }
   return int;
}

console.log(intersectObjects(user1,user2));