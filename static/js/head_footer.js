

    {

const popUp = document.getElementById("cookiePopup");
const acceptButton = document.getElementById("accept-changeofname.ng-terms");


window.addEventListener("load", () => {
  setTimeout(() => {
    checkCookie();
  }, 1900);
});


acceptButton.addEventListener("click", () => {
  localStorage.setItem("I-accept-terms-of-changeofname.ng", "true");
  popUp.classList.add("hideme");
  popUp.classList.remove("show");
});


const checkCookie = () => {
  if (localStorage.getItem("I-accept-terms-of-changeofname.ng")) {
    popUp.classList.add("hideme");
    popUp.classList.remove("show");
  } else {
    popUp.classList.add("show");
    popUp.classList.remove("hideme");
  }
};

}


    {

        function openNav() {
            document.getElementById("myNav").style.width = "100%";
        }

        function closeNav() {
            document.getElementById("myNav").style.width = "0%";
        }

    }



    {

        window.onscroll = function() {myFunction()};
        var navbar = document.getElementById("navbar");
        function myFunction() {
          if (window.pageYOffset) {
            navbar.classList.add("sticky")
          } else {
            navbar.classList.remove("sticky");
          }
        }
    }



    {

      const last_name = document.querySelector("#foot-form-input");


        const alertbox = document.getElementById("alertbox");

        const foot_text = document.getElementById("foot_txt");

        const foot_sb_txt = document.getElementById("foot_sb_txt");

        const loaderfemme = document.getElementById("loaderfemme");


        const form = document.getElementById('foot-form');


        const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;


        const cloned_height = `${joinbox.clientHeight}px`;

        const remove_me = document.querySelectorAll('br.remove-me');


        function showLoadingSpinner() {
            loaderfemme.style.height = cloned_height
            foot_text.classList.add("hide");
            foot_sb_txt.classList.add("hide");
            joinbox.classList.add("hide")
            document.getElementById("loaderfemme").style.display = "flex";
        }


        function removeLoadingSpinner() {
            document.getElementById("loaderfemme").style.display = "none";
        }


        function validate(valEl) {
          if (!valEl.startsWith('@')) {
            return false;
          }

          if (valEl.length > 16) {
            return false;
          }

          return true;
        }

        function removeLineBreaks() {
            remove_me.forEach(remove_me => {
                remove_me.style.display = 'none';
            });
        }

        function addLineBreaks() {
            remove_me.forEach(remove_me => {
                remove_me.style.display = 'initial';
            });
        }


        form.addEventListener('submit', async function(event) {

          event.preventDefault();

          const last_nameV = last_name.value;


          if (!validate(last_nameV)) {

            alert('Please Enter a valid Twitter/X handle');
            form.reset();
            return;
          }

          showLoadingSpinner();
          removeLineBreaks();

          const formData = new FormData(form);

          const headers = {
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRFToken': csrfToken,
          };

          const response = await fetch('/foot_exhibition_form/', {
            method: 'POST',
            headers,
            body: formData,
          });


          showLoadingSpinner();
          joinbox.classList.add("hide")
          if (response.status === 200) {


            const data = await response.json();




            const h2 = document.createElement('h2');
            const p1 = document.createElement('p');
            const p2 = document.createElement('p');

            h2.classList.add('#foot_txt');
            p1.classList.add('foot_sb_txt');
            p2.classList.add('foot_sb_txt');
            h2.style.color = '#ffffff'
            h2.style.marginBottom = '24px';
            h2.style.marginLeft = '8px';
            h2.style.marginTop = '-16px';
            p1.style.marginLeft = '8px';
            p1.style.marginBottom = '8px';
            p2.style.marginLeft = '8px';

            h2.textContent = data[0];
            p1.textContent = data[1];
            p2.textContent = data[2];


            joinbox.classList.add("hide")
            removeLoadingSpinner();


            alertbox.style.height = cloned_height

            alertbox.appendChild(h2);
            alertbox.appendChild(p1);
            alertbox.appendChild(p2);
            alertbox.classList.add("showbox");

            setTimeout(function(){
                alertbox.innerHTML = ""
                form.reset();
                alertbox.classList.remove("showbox");
                foot_text.classList.remove("hide");
                foot_sb_txt.classList.remove("hide");

                joinbox.classList.add("show");
                addLineBreaks();
                alertbox.style.height = '0px'
            }, 9700);

          } else {

          }
        });
      }