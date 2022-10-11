let user1 = {
    name:"Diego",
    email: "diego@gmail.com"
};

let user2 = {
    name: "Sergio",
    email: "sergio@gmail.com"
};


let intersectObjects = (obj,obj1) => {
   let int = {}
   for(let key in obj){
    if(key in obj1){
        int[key]=0;
    }
   }
   return int;
}

console.log(intersectObjects(user1,user2));