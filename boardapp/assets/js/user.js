function idCheck(){
    if(!$('#username').val()){
        alert("Please enter your ID");
        return;
    }

    $.ajax({
        type: "POST",
        url: "/boardapp/user_register_idcheck/",
        data: {
            'username': $('#username').val(),
            'csrfmiddlewaretoken': $("input[name=csrfmiddletoken]").val()
        },
        success: function(response){
            $('#idcheck-result').html(response);
        },
    });
}

function changeEmailDomain(){
    $('email_domain').val($('#email_selection').val());
}

function cancelMemberRegister(){
    var result = confirm("Do you want to cancel your joining?");

    if(result){
        $(location).attr('href', '/boardapp/login');
    }
}

function userRegister(){
    if(!$('#username').val()){
        alert("Please enter your ID");
        return;
    }
    if(!$('#IDCheckResult').val()){
        alert("Please check id duplicates first.");
        return;
    }
    if(!$('#password').val()){
        alert("Please enter your password");
        return;
    }
    if($('#password').val() != $('password_check').val()){
        alert("Passwords do not match.");
        return;
    }
    if(!$('#last_name').val()){
        alert("Please enter your name");
        return;
    }
    if(!$('#phone1').val() || !$('#phone2').val() || !$('#phone3').val()){
        alert("Please enter the correct phone number.");
        return;
    }
    if(!$('#email_id').val() || !$('#email_domain').val()){
        alert("Please enter the correct address.");
        return;
    }
    if(!$('#birth_year').val() || !$('#birth_month').val() || !$('#birth_day').val()){
        alert("Please enter the correct birthday.");
        return;
    }

    $('#phone').val($('#phone1').val() + "-" + $('#phone2').val() + "-" + $('#phone3').val());
    $('#email').val($('#email_id').val() + "@" + $('#email_domain').val());

    $('#register_form').submit();
}