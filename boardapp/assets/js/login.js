$(document).ready(function(){
    $('input').keydown(function(e){
        if(e.which == 13){
            $('form').submit();
        }
    });
});

function login(){
    if(!$('#username').val()){
        alert("Please enter your ID");
        return;
    }
    if(!$('#password').val()){
        alert("Please enter your password");
        return;
    }

    $('#login_form').submit();
}