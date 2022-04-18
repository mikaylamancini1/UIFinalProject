$(document).ready(function(){
    console.log(details)
    createoptions()
})

function createoptions(){
    let new_button = $("<button class='button-6'></button>")
    new_button.html(details["op1"])
    new_button.click(function(){
        if (checkcorrect(new_button.html(),details["correct"])==true){
            console.log("Correct")
            correct()
        } else {
            console.log("Wrong")
            incorrect()
        }
    })
    
    let new_button1 = $("<button class='button-6'></button>")
    new_button1.html(details["op2"])
    new_button1.click(function(){
        if (checkcorrect(new_button1.html(),details["correct"])==true){
            console.log("Correct")
            correct()
        } else {
            console.log("Wrong")
            incorrect()
        }
    })

    let new_button2 = $("<button class='button-6'></button>")
    new_button2.html(details["op3"])
    new_button2.click(function(){
        if (checkcorrect(new_button2.html(),details["correct"])==true){
            console.log("Correct")
            correct()
        } else {
            console.log("Wrong")
            incorrect()
        }
    })

    let new_button3 = $("<button class='button-6'></button>")
    new_button3.html(details["op4"])
    new_button3.click(function(){
        if (checkcorrect(new_button3.html(),details["correct"])==true){
            console.log("Correct")
            correct()
        } else {
            console.log("Wrong")
            incorrect()
        }
    })
    $("#options").append(new_button)
    $("#options").append(new_button1)
    $("#options").append(new_button2)
    $("#options").append(new_button3)

}

function checkcorrect(op,ans){
    console.log(op,ans)
    if (op===ans){
        return true
    } else {
        return false
    }
    
}

function correct(){
    $("#message1").remove()
    

    let new_div = $("<div id='message1'>")
    let new_div1=$("<div class='correct'>You have the right answer</div>");

    nextquestion=parseInt(details["id"])+1;
    let new_button=$("<button class='button-6'>Next Question</button>")

    new_button.click(function(){
        taketo(nextquestion.toString())
    })

    new_div.append(new_div1)
    new_div.append(new_button)

    $("#message").append(new_div);
    

    
}

function incorrect(){
    $("#message1").remove()
    $("#message").append("<div class='incorrect' id='message1'>Use this formula to get the right answer</div>");
}

function taketo(str){
    location.href = '/quiz/'+str;
}

function correctanswer(jsondata){
    $.ajax({
        type: "POST",
        url: "correct_answer",                
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(jsondata),
        success: function(result){
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });
}