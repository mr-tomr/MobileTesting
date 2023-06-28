
Java.perform(disableRootCheck);  

function disableRootCheck()  
{  
    var rootBeer = Java.use("com.scottyab.rootbeer.RootBeer");  
    rootBeer.isRooted.implementation = function()  
    {  
        console.log("Root disabled");  
        return false;  
    }   

var vault = Java.use("org.sec575.securenotes.Vault");  
vault.getPassword.implementation = function()  
{  
    var password = this.getPassword();  
    console.log("Password: " + password);  
    return password;  
}
}
