<?php

    if(isset($_POST['submit'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        $errorEmpty = false;
        $errorEmail = false;
        $errorName = false;
        

        if(empty($name) || empty($email) || empty($message)) {
            echo "<span class='alert alert-danger'>Fill in all fields please.</span>";
            $errorEmpty = true;
        } 
        elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "<span class='alert alert-danger'>Email is invalid.</span>";
            $errorEmail = true;
        }
        else {
            //case: fields aren't empty and email is valid
            $name = test_input($name);
            if(!preg_match("/^[a-zA-Z ]*$/",$name)) {
                //case: name contains anything other than letters or spaces
                $errorName = true;
                echo "<span class='alert alert-danger'>Only letters and white space allowed for Name.</span>";
            } else {
                //run message through test_input
                $message = test_input($message);
                //set up email text and info
                $message_body = 'from name:  ' . $name . '\nfrom email:  ' . $email . '\nmessage:  ' . $message;
                $to = 'pfreema1@gmail.com';
                $subject = 'paulfreeman.design Contact Form Submission';
                //send email
                mail($to, $subject, $message_body);
                
            }
        }
    }
    else {
        echo "There was an error.";
    }



    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }




?>

<script>
    $("#mail-name, #mail-email, #mail-message").removeClass("input-error");

    var errorEmpty = "<?php echo $errorEmpty; ?>";
    var errorEmail = "<?php echo $errorEmail; ?>";
    var errorName = "<?php echo $errorName; ?>";

    if(errorEmpty) {
        $("#mail-name, #mail-email, #mail-message").addClass("input-error");
    }

    if(errorEmail) {
        $("#mail-email").addClass("input-error");
    }

    if(errorName) {
        $("#mail-name").addClass("input-error");
    }

    if(!errorEmpty && !errorEmail && !errorName) {
        $("#mail-name, #mail-email, #mail-message").val("");
        $(".form-message").addClass("alert alert-success").html("E-mail sent!&nbsp;&nbsp;&nbsp;&nbsp;Expect a reply within 1-2 business days.&nbsp;&nbsp;&nbsp;&nbsp;:D");
    }
</script>