//The Backend part of JS

let var1=10;
let var2=20;

function addNum(a,b){
    let total=a+b;
    return total;
}

let result=addNum(4,5);

/*      When the JS code is executed, firstly, global executional context is created , or we can say ki an environment for execution is created.

                                    Secondly, Memory Phase is created. in this,separate memory blocks are alloted to each variable and function.

                                    {
                                    val1= undefined
                                    val2=undefined
                                    addNum= definition
                                    result = undefined.
                                    }

                                    Third, The execution phase..

                                    val1=10
                                    val 2= 20
                                    addNum--------------->{
                                                            A separate variable environment along with an execution thread
                                                            is created.
                                                            This separate variable environment has its own memory & execution phase 
                                                            and gets deleted from the memory whem it's execution completes.
                                                            
                                                            Memory Phase:          |        Execution Phase:
                                                                                   |
                                                            val 1 = undefined.     |        val1=10
                                                            val 2 = undefined.     |        val2=20
                                                            total= undefined.      |        total=30,....... This total is returned to global execution environment.
                                
                                                            
                                                            }

*/