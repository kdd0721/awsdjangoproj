function idCheck(){
    if(!$('#username').val()){
        alert("Please enter your ID")
        return;
    }

    $.ajax({
        type: "POST",
        url: "/boardapp/user_register_idcheck/",
    })
}