$(document).ready(function() {
    $('#signup').validate({
        rules:{
            fname:{
                required:true,
                minlength:5,
            },
            sname:{
                required:true,
                minlength:5,
            },
            mobile:
            {
                required:true,
            },
            password: {
                required:true,
                minlength:8,
            },
            day:{
                required:true,
            },
            month:{
                required:true,
            },
            year:{
                required:true,
            },
            Gender:{
                required:true,
            }
        },
        messages:{
            fname:{
                required:"Please enter the first name",
                minlength:"please enter minimum 5 letters for first name"
            }
        }
    })
});