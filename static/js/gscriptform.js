

    //shipping toggle script
     {
     {   function openPage(pageName,elmnt,color) {
          var i, tabcontent;
          tabcontent = document.getElementsByClassName("tabcontent");
          for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
          }
          tablinks = document.getElementsByClassName("tablink");
          for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.backgroundColor = "";
          }
            document.getElementById(pageName).style.display = "block";
          elmnt.style.backgroundColor = color;
        }

        // Get the element with id="defaultOpen" and click on it
        document.getElementById("defaultOpen").click();
     }
     }

     {
         //script for file size validation for punch image

       function OnFileValidati(target) {
            var image = document.getElementById("my_image_punch");
            if (typeof (my_image_punch.files) != "undefined") {
                var size = parseFloat(my_image_punch.files[0].size / (1024 * 1024)).toFixed(2);
                if(size > 2) {
                    alert('Please select an image of size less than 2 MB'); target.value= "";
                }else{

                }
            }
        }

     }

     {
         //the script below is a single function that hides or displays the Home Delivery Fieldset input field

            function contract() {
              var deliverhome = document.getElementById("home");
              var homedelivery = document.getElementById("homedeliveryarea");
              if (deliverhome.checked == true){
                homedelivery.style.display = "block";
              } else {
                 homedelivery.style.display = "none";
              }
            }
            // Get the element with id="home" and click on it
            document.getElementById("home").click();
     }

     {
         //script for file size validation for valid means of ID

       function OnFileValidatio(target) {
            var image = document.getElementById("my_image_id");
            if (typeof (my_image_id.files) != "undefined") {
                var size = parseFloat(my_image_id.files[0].size / (1024 * 1024)).toFixed(2);
                if(size > 2) {
                    alert('Please select an image of size less than 2 MB'); target.value= "";
                }else{

                }
            }
        }

     }

     {

        //SCript for new name and confirmation-->

        function CompareFields(f1, f2, caseinsensitive,target)
        {
           var val1 = document.getElementById(f1).value;
           var val2 = document.getElementById(f2).value;
           if( caseinsensitive )
           {
              val1 = val1.toUpperCase();
              val2 = val2.toUpperCase();
           }
           val1 = val1.replace(/^\s*/,"");
           val1 = val1.replace(/\s*$/,"");
           if( val1.length == 0 ) { return; }
           val2 = val2.replace(/^\s*/,"");
           val2 = val2.replace(/\s*$/,"");
           if( val2.length == 0 ) { return; }
           if( val1 == val2 ) { return; }
           // An alert box is used for verification failures.
           // The message may be changed to meet your demand.
           // Or, replace alert(...) with your preferred error message system.
           alert("Both names need to be identical. Please confirm your new name"); target.value= "";
        }

     }

     {
         //script for file size validation for affidavit

       function OnFileValidation(target) {
            var image = document.getElementById("my_image_file");
            if (typeof (my_image_file.files) != "undefined") {
                var size = parseFloat(my_image_file.files[0].size / (1024 * 1024)).toFixed(2);
                if(size > 2) {
                    alert('Please select an image of size less than 2 MB'); target.value= "";
                }else{

                }
            }
        }



     }

     {
        // function for controlling punch indenmity form

        // showFieldset function hides or displays the punch fieldset when punch is the selected newspaper
         function showFieldset(select) {
            var fieldset = document.getElementById('punchfieldset');
            if (select.value === 'punch') {
                fieldset.style.display = 'block';
            } else {
                fieldset.style.display = 'none';
               }
        }

     }

     {
         //function to prevent form submission if punch indemnity form is not uploaded.
         
     document.querySelectorAll('.loaderform').forEach(form => form.addEventListener('submit', (event) => {
        if (checkForm(form)) {
          document.getElementById("loaderpouch").style.display = "flex";
        } else {
          event.preventDefault();
        }
      }));

      function checkForm(form) {
        var select = form.querySelector('select');
        var fileInput = form.querySelector('input[name="my_image_punch"]');
        if (select.value === 'punch' && !fileInput.value) {
          alert('Please download, complete, and upload the Punch Indemnity form to proceed.');
          return false;
        }
        return true;
      }

    }
