var printFunctionName = function() {
    console.log(arguments.callee.name);
};

printFunctionName(); // This will print "printFunctionName" to the console

