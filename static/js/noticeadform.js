//This script controls the notices adform functionality

const menuText = document.querySelector('.menu p');

const subContent = document.querySelector('.sub-content');
const checkboxes = document.querySelectorAll('.sub-content input[type="checkbox"]');
    
        const newspaper = document.getElementById('newspaper');
        const booking_type = document.getElementById('booking_type');
     const fieldset = document.getElementById('punchfieldset');
        const fieldset1 = document.getElementById('newreg');
        const fieldset2 = document.getElementById('changeofnm');
        const fieldset3 = document.getElementById('trusteechng');
        const fieldset4 = document.getElementById('aimschange');
        const fieldset5 = document.getElementById('punchdocuments');
        const addButton1 = document.getElementById('addButton1');
        const addButton2 = document.getElementById('addButton2');
        const addButton3 = document.getElementById('addButton3');
        const addButton4 = document.getElementById('addButton4');
        const addButton5 = document.getElementById('addButton5');
        const addButton6 = document.getElementById('addButton6');
        const addButton7 = document.getElementById('addButton7');
        const dynamicInputs1 = document.getElementById('dynamictrustees');
        const dynamicInputs2 = document.getElementById('dynamicobjectives');
        const dynamicInputs3 = document.getElementById('dynamicpretrustees');
        const dynamicInputs4 = document.getElementById('dynamicremtrustees');
        const dynamicInputs5 = document.getElementById('dynamicaddtrustees');
        const dynamicInputs6 = document.getElementById('dynamicaddaims');
        const dynamicInputs7 = document.getElementById('dynamicremaims');
        
        let inputCounnt = 0;
        


        booking_type.addEventListener('change', () => {
            
          function showPunchdocs(){
          const chosenPublishers = Array.from(newspaper.selectedOptions).map(option => option.value);
            
          if ((chosenPublishers.includes('punch')) && (booking_type.value === "changeofnm" || booking_type.value === "trusteechng")){
                fieldset5.style.display = 'block';
            } else {
                   fieldset5.style.display = 'none';
            }
        }
        
         
      
      
         
         function showHideFieldsets(fieldSet, fieldSets){
        for (let i = 0; i < fieldSets.length; i++) {
              fieldSets[i].style.display = "none";
            const inputsA = fieldSets[i].querySelectorAll("input");
              for (const input of inputsA) {
                    input.value = ""; 
              }
              }
            fieldSet.style.display = "block";
            showPunchdocs();
           }
        
     
     
        
        
     const elements = [fieldset1,fieldset2, fieldset3, fieldset4, fieldset5]; 

             if (booking_type.value === 'newcoyreg') {
            showHideFieldsets(fieldset1, elements);
            
            } else if (booking_type.value === 'changeofnm') {
        showHideFieldsets(fieldset2, elements);
        } else if (booking_type.value === 'trusteechng') {
        showHideFieldsets(fieldset3, elements);
        } else if (booking_type.value === 'aimschange') {
        showHideFieldsets(fieldset4, elements);
          } else if (booking_type.value === '') {
        showHideFieldsets(booking_type,elements);
          }
            
        });
        
      
    
    //additional input fields for robustfulness
    const addButtons = document.querySelectorAll('.add-button');
    const inputFields = document.querySelectorAll('.dynamicInputsFields');
const dynamicInputs = document.getElementById('dynamicInputs'); 
const inputLimit = 23; 

let inputCount = 0;

addButtons.forEach((addButton, index) => {
    addButton.addEventListener('click', () => {
        if (inputCount >= inputLimit) {
            alert("You have reached the maximum number of Inclusions. Contact us for special cases. Thank you.");
            return; 
        }

        inputCount++;

        const newInput = document.createElement('input');
        newInput.type = 'text';

        let namePrefix;
        let namePlaceholder;
        let deleteButtonText;
        switch (index) {
            case 0:
                namePrefix = "allnewcoytrustee";
                namePlaceholder = "Full Name - Designation";
                deleteButtonText = 'Click to Delete Above Name';
                break;
            case 1:
                namePrefix = "allnewcoyaim";
                namePlaceholder = "";
                deleteButtonText = 'Click to Delete Above Aim';
                break;
            case 2:
                namePrefix = "allpresenttrustee";
                namePlaceholder = "Full Name - Designation";
                deleteButtonText = 'Click to Delete Above Name';
                break;
            case 3:
                namePrefix = "allremovedtrustee";
                namePlaceholder = "Full Name - Designation";
                deleteButtonText = 'Click to Delete Above Name';
                break;
            case 4:
                namePrefix = "alladdedtrustee";
                namePlaceholder = "Full Name - Designation";
                deleteButtonText = 'Click to Delete Above Name';
                break;
            case 5:
                namePrefix = "alladdedaim";
                namePlaceholder = "";
                deleteButtonText = 'Click to Delete Above Aim';
                break;
            case 6:
                namePrefix = "allremovedaim";
                namePlaceholder = "";
                deleteButtonText = 'Click to Delete Above Aim';
                break;    
            default:
                console.warn("Unexpected button index. Ignoring.");
                alert("Sure you are a button?")
                return; 
        }
        
        newInput.placeholder = `${namePlaceholder}`;
        newInput.name = `${namePrefix}${inputCount}`;
        newInput.classList.add("style-input-field-text", "input-focus");

        const deleteButton = document.createElement('button');
        
        deleteButton.textContent = `${deleteButtonText}`;
        deleteButton.type = 'button';
        deleteButton.classList.add("style-input-field-text", "clickbutton", "uploadnotice");
        deleteButton.style.color ="red";
        deleteButton.addEventListener('click', () => {
            inputFields[index].removeChild(newInput);
            inputFields[index].removeChild(deleteButton);
            inputCount--; 
        });

        inputFields[index].appendChild(newInput);
        inputFields[index].appendChild(deleteButton);
        
    });
});
        
  


function handleOutsideClick(event) {
  const subContent = document.querySelector('.sub-content');
  const menu = document.querySelector('.menu');
  const triggeringElement = event.target;

  if (!subContent.contains(triggeringElement) && !menu.contains(triggeringElement)) {
    subContent.classList.remove('showNewspaperMenu');
    document.removeEventListener('click', handleOutsideClick);
  }
}

function revealNewspapers() {
    const subContent = document.querySelector('.sub-content');
    subContent.classList.toggle("showNewspaperMenu");

    document.addEventListener('click', handleOutsideClick);
    
}


function uncheckNewspaper(checked){

checked.forEach(c => {
  c.checked = false;
});
}



function substituteLabel(labelText) {
    if (labelText.includes('Business Day')) {
        return 'Business Day';
    } else if (labelText.includes('The Sun')) {
        return 'The Sun';
    } else if (labelText.includes('NewsDirect')) {
        return 'NewsDirect';
    } else if (labelText.includes('Punch')) {
        return 'Punch';
    } else if (labelText.includes('Leadership')) {
        return 'Leadership';
    }else if (labelText.includes('Nation')) {
        return 'Nation';
    }else if (labelText.includes('Vanguard')) {
        return 'Vanguard';
    }else if (labelText.includes('Guardian')) {
        return 'Guardian';
    }else if (labelText.includes('Tribune')) {
        return 'Tribune';
    }else if (labelText.includes('Independent')) {
        return 'Independent';
    }else if (labelText.includes('This Day')) {
        return 'This Day';
    }else if (labelText.includes('Champion')) {
        return 'Daily Champion';
    }else if (labelText.includes('Trust')) {
        return 'Daily Trust';
    }else if (labelText.includes('Post')) {
        return 'Daily Post';
    }else if (labelText.includes('Business News')) {
        return 'Business News';
    }else {
        return labelText;
    }
}


//traditional html multiselect was unstable across browsers. checkboxes are substitudes
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const checkedValues = Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);
    
     const checkedLabelss = Array.from(checkboxes)
            .filter(function(checkbox) {
                return checkbox.checked;
            })
            .map(function(checkbox) {
                return substituteLabel(checkbox.nextElementSibling.textContent);
            });
       
        
    if (checkedValues.length > 0) {
      menuText.textContent = checkedLabelss.join(' & ');
    } else {
      menuText.textContent = '--Select--';
    }
    
     if (checkedValues.includes('punch')) {
              fieldset.style.display = 'block';
              } else {
                   fieldset.style.display = 'none';
                  }
    
    
    if (checkedValues.length > 2) {
        fieldset.style.display = 'none';
        alert("Please select only two newspapers");
        uncheckNewspaper(checkboxes);
        menuText.textContent = '--Select--';
        
    }
    
    if (checkedValues.includes("businessday_high") && checkedValues.includes("businessday_low")) {
       alert('Business Day Newspaper cannot be selected twice.');
        uncheckNewspaper(checkboxes);
        menuText.textContent = '--Select--';
    }
    
    if (checkedValues.includes("sun_high") && checkedValues.includes("sun_low")) {
       alert('Sun Newspaper cannot be selected twice.');
        uncheckNewspaper(checkboxes);
        menuText.textContent = '--Select--';
    }

    if ((checkedValues.includes('punch')) && (booking_type.value === "changeofnm" || booking_type.value === "trusteechng")){
                fieldset5.style.display = 'block';
            } else {
                   fieldset5.style.display = 'none';
            }
    
  });
  
});

 booking_type.addEventListener('change', () => {
            
          function showPunchdocs(){
          const checkedValuesss = Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);
    
            
          if ((checkedValuesss.includes('punch')) && (booking_type.value === "changeofnm" || booking_type.value === "trusteechng")){
                fieldset5.style.display = 'block';
            } else {
                   fieldset5.style.display = 'none';
            }
        }
        
         
         
         function showHideFieldsets(fieldSet, fieldSets){
        for (let i = 0; i < fieldSets.length; i++) {
              fieldSets[i].style.display = "none";
            const inputsA = fieldSets[i].querySelectorAll("input");
              for (const input of inputsA) {
                    input.value = ""; 
              }
              }
            fieldSet.style.display = "block";
            showPunchdocs();
           }
        
        
        
     const elements = [fieldset1,fieldset2, fieldset3, fieldset4, fieldset5]; 

             if (booking_type.value === 'newcoyreg') {
            showHideFieldsets(fieldset1, elements);
            
            } else if (booking_type.value === 'changeofnm') {
        showHideFieldsets(fieldset2, elements);
        } else if (booking_type.value === 'trusteechng') {
        showHideFieldsets(fieldset3, elements);
        } else if (booking_type.value === 'aimschange') {
        showHideFieldsets(fieldset4, elements);
          } else if (booking_type.value === '') {
        showHideFieldsets(booking_type,elements);
          }
            
        });
        
      




subContent.addEventListener('transitionend', (event) => {
  if (event.propertyName === 'visibility' && event.target === subContent) {
   
    const checkedValuess = Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);
    
    if (checkedValuess.length === 1) {
        alert("Please select at least two newspapers");
        fieldset.style.display = 'none';
        uncheckNewspaper(checkboxes);
        menuText.textContent = '--Select--';
    }
    
  }

});


 //fileSizeValidator
        const fileInputs = document.querySelectorAll('input[type="file"]');
        fileInputs.forEach(input => {
            input.addEventListener('change', (event) => {
                const file = event.target.files[0];
                const maxSize = 2 * 1024 * 1024; // 2MB in bytes

                if (file && file.size > maxSize) {
                    alert('Please select an image of size less than 2 MB');
                    input.value = ''; // Clear the file input
                }
            });
        });
        
    function clearLocalShipFields(){
        const delivery_address = document.getElementById('delivery_address');
        const state = document.getElementById('state');
        const city = document.getElementById('city');
        delivery_address.value = "";
        state.value = "";
        city.value ="";
}
    
function clearInternationalshipFields(){
        const country = document.getElementById('country');
        const address_line = document.getElementById('address_line');
        const postal_code = document.getElementById('postal_code');
        const int_state = document.getElementById('int_state');
        const int_city = document.getElementById('int_city');
        country.value = "";
        state.value = "";
        address_line.value = "";
        postal_code.value = "";
        int_state.value ="";
        int_city.value ="";
}

      
      
      
      function validateFormFields() {
        // form values are validated to ensure publisher logic is preserved
        const punch = document.getElementById('punch');
        const news = document.getElementById('news');
        
        const trustee1 = document.getElementById('trustee1');
        
        const trustee2 = document.getElementById('trustee2');
        
        const objective1 = document.getElementById('objective1');
        
        const oldCompanyName = document.getElementById('old_companyname');
        const newCompanyName = document.getElementById('new_companyname');
        
        const presentTrustee1 = document.getElementById('presenttrustee1');
        const presentTrustee2 = document.getElementById('presenttrustee2');
        const removedTrustee = document.getElementById('removedtrustee1');
        const addedTrustee = document.getElementById('addedtrustee1');
        
        const addedAim = document.getElementById('addedaim1');
        const removedAim = document.getElementById('removedaim1');
        
        const punchImage = document.getElementById('my_image_punch');
        const minuteImage = document.getElementById('my_minute_file');
        const presidentImage = document.getElementById('my_president_id');
        const secretaryImage = document.getElementById('my_secretary_id');
        
        const selectedNewpapers = Array.from(checkboxes)
      .filter(cb => cb.checked)
           
            if (punch.checked && !punchImage.files.length) {
                alert('Please download, complete, and upload the Punch Indemnity form to proceed.');
                news.scrollIntoView({behavior:'smooth'});
                return false;
            }
            
            
           if (booking_type.value === "newcoyreg" && (trustee1.value === '' || trustee2.value === '')) {
                alert('Please state at least two trustees to proceed.');
                booking_type.scrollIntoView({behavior:'smooth'});
                return false;
            }
            
             if (booking_type.value ===  "newcoyreg" && objective1.value === '') {
                alert('Please state trustee objectives to proceed.');
                trustee1.scrollIntoView({behavior:'smooth'});
                return false;
            }
            if (booking_type.value ===  "changeofnm" && (oldCompanyName.value === '' || newCompanyName.value === '')){
                alert('Please state the trustee old and new names to proceed');
                booking_type.scrollIntoView({behavior:'smooth'});
                return false;
            } 
            if (booking_type.value ===  "aimschange" && (addedAim.value === '' && removedAim.value === '')) {
                alert('Please state the trustee objective(s) to be modified to proceed.');
                booking_type.scrollIntoView({behavior:'smooth'});
                return false;
            } 
            
              if (booking_type.value ===  "trusteechng" && (presentTrustee1.value === '' || presentTrustee2.value === '')) {
                alert('Please state all present trustees and the trustees to be changed to proceed.');
                booking_type.scrollIntoView({behavior:'smooth'});
                return false;
            }
            
             if (booking_type.value ===  "trusteechng" && (addedTrustee.value === '' && removedTrustee.value === '')) {
                alert('Please state all present trustees and the trustees to be changed to proceed.');
                booking_type.scrollIntoView({behavior:'smooth'});
                return false;
            }   
            
             if (punch.checked && (booking_type.value === "changeofnm" || booking_type.value === "trusteechng") && (!punchImage.files.length || !presidentImage.files.length || !secretaryImage.files.length || !minuteImage.files.length)) {
                alert("Please upload all Punch Required Documents for Change of Trustees and Change of Name advert types to proceed.");
                booking_type.scrollIntoView({behavior:'smooth'});
                return false;
            }

       
            if (selectedNewpapers.length < 1) {
                alert("Please select two Newspapers to proceed.");
                news.scrollIntoView({behavior:'smooth'});
                return false;
            }
            
            else {
                return true;
            }
              }
              
              
              
      document.getElementById("noticesform").addEventListener("submit", function(event) {
        
           if (validateFormFields()) {
               document.getElementById("loaderpouch").style.display = "flex";
           }
           else {
               event.preventDefault();
           }
            
        });

        
