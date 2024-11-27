{
  // typeOf Gaurds

  type alphaNeumeric = string | number;

  const add = (param1: alphaNeumeric, param2: alphaNeumeric): alphaNeumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result = add("2", "3");
  console.log(result);

  // in guards
  type normalUser = {
    name: string;
  };
  type adminUser = {
    name: string;
    role: string;
  };

  const getUser = (user: normalUser | adminUser) => {
    if ("role" in user) {
      console.log(`i am ${user.name} and My role is ${user.role}`);
    } else {
      console.log(`My Name is ${user.name}`);
    }
  };
  const normalUser:normalUser ={
    name:'Emon Khan'
  }
  const adminUser :adminUser ={
    name:'Emon Khan',
    role:'Admin'
  }

getUser(adminUser)

}


