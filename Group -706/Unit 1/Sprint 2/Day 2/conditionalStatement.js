




//Student Task: print "eligible for job" based on following condition:
/*
When degree = "MCA" ---> isFullStack = true, isDSA = true ---> print eligible for job
When degree = "MTECH" ---> isDSA = true ---> print eligible for job
Else: print Not valid degree for job

Time: 5 minutes --> 4 Minutes --> 3 Minutes --> 2 Minutes --> 1 Minute --> 0 Minute

How many of you done?
*/

// Solution:

var degree = "MCA", isFullStack = true, isDSA = true

if(degree == "MCA"){
    
    if(isFullStack){
        if(isDSA){
            console.log("Eligible for job")
        }else{
            console.log("You've not met the criteria of dsa")
        }
    }else{
        console.log("You've not met the criteria of Full Stack")
    }
}
else if(degree == "MTECH"){
    
        if(isDSA){
            console.log("Eligible for job")
        }else{
            console.log("You've not met the criteria of dsa")
        }
}
else{
    console.log("Degree is not accepted....")
}