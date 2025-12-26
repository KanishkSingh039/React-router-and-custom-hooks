const productlist = [{
        title: 'product 1',
        id: 1
    },
    {
        title: 'product 2',
        id: 2
    },
    {
        title: 'product 3',
        id: 3
    },
    {
        title: 'product 4',
        id: 4
    },
    {
        title: 'product 5',
        id: 5
    },
    {
        title: 'product 6',
        id: 6
    },
]

export const Fetchlistofproduct = async() => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return productlist;
};
// A Promise is an object that represents:
// “Something that will finish later”
// It has 3 states:
// Pending – still working
// Fulfilled – success
// Rejected – error

// Meaning of resolve():
//  “My work is DONE successfully”
// When you call resolve()
// Promise moves from pending → fulfilled
// await stops waiting
// Code continues

//Step-by-step:
// Promise is created → pending
// setTimeout starts a 1-second timer
// After 1 second → resolve() is called
// Promise becomes fulfilled
// await continues execution


export const addnewproduct = async(ProductName) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // purpose of this line :To pause the function for 1 second in an async/await–friendly way.  
    //Function waits 1 second
    // Promise stays pending
    // UI can show loading
    // Behaves like a real network request
    //and then later is will do thge further task like here it is creating the newproduct in product list and above returning or acting like fatching the productlist
    const newlycreatedproduct = {
        id: productlist.length + 1,
        title: ProductName
    };
    productlist.push(newlycreatedproduct);
    return newlycreatedproduct;
}

//now what will happen we have to rapp the app comonent in querry client provider compoenent just like we have created context provider , now further we have to edit the main file