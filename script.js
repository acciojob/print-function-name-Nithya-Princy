function functionName() {
    alert(arguments.callee.name);
}

// Call the functionName
functionName();
