function add(num1, num2 = 18){
    // if(num2 == undefined){
    //     num2 = 0;
    // }

    //num2 = num2 || 0;
    return num1 + num2;
}

const total = add(12);
console.log(total);

/**
function createUser(name, age = 18){
    const user = {};
    user.name = name;
    user.age = age;
    return user;
}
 */