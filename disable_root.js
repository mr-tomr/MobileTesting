Java.perform(disableRootCheck);  

function disableRootCheck()  
{  
    var rootBeer = Java.use("com.scottyab.rootbeer.RootBeer");  
    rootBeer.isRooted.implementation = function()  
    {  
        console.log("Root disabled");  
        return false;  
    }   
}


############################
private void checkForRoot()  
 {  
    RootBeer rootBeer = new RootBeer(this.getApplicationContext());  
    rootBeer.setLogging(true);  
    if (rootBeer.isRooted()) {  
        showRootedPopup();  
    }  
 }

The application uses the com.scottyab.rootbeer.RootBeer framework, which is a popular open-source root detection library. 
The main entry point to the RootBeer framework is the isRooted() method, which will return a Boolean. 
We need to make this method return false so that we can use the application. 
