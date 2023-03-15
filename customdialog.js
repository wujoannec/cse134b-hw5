export function customAlert() {
  const dialog = document.getElementById('alert-dialog');
  const alertButton = document.getElementById('alert-button');
  const okButton = document.querySelector(".ok-button");

  alertButton.addEventListener("click", () => {
    dialog.showModal();
    let result = document.getElementById("result");
    result.style = "";
    result.innerHTML = "";
  })
  okButton.addEventListener("click", () => {
    dialog.close();
  })

  
}

export function customConfirm() {
  const dialog = document.getElementById('confirm-dialog');
  const confirmButton = document.getElementById('confirm-button');
  const okButton = document.getElementsByClassName('ok-button')[1];
  const cancelButton = document.getElementsByClassName("cancel-button")[0];
  confirmButton.addEventListener("click", () => {
    dialog.showModal();
  })
  let result = document.getElementById("result");
  okButton.addEventListener("click", () => {
    result.style = "border-style: double; padding: 5px";
    dialog.close();
    result.innerHTML = "Confirm result: true";
  })
  cancelButton.addEventListener("click", () => {
    result.style = "border-style: double; padding: 5px";
    dialog.close();
    result.innerHTML = "Confirm result: false";
  })
  
}


export function customPrompt() {
  const dialog = document.getElementById('prompt-dialog');
  const promptButton = document.getElementById('prompt-button');
  const cancelButton2 = document.getElementById("cancel-button-2");
  const result = document.getElementById("result");
  promptButton.addEventListener("click", () => {
    dialog.showModal();
    cancelButton2.addEventListener("click", () => {

      result.style = "border-style: double; padding: 5px;";
      result.innerHTML = "Prompt result: User didn't enter anything";
      dialog.close();
      return false;
    })
   
    const okButton2 = document.getElementById('ok-button-2');
    okButton2.onclick = function() { 
      const result = document.getElementById("result");
      result.style = "border-style: double; padding: 5px";
      result.innerHTML = "";
      let formData = document.getElementById('namey').value;
      let clean = DOMPurify.sanitize(formData);
      if (formData == null || formData == ""){
        result.innerHTML = "Prompt result: User didn't enter anything";
      }
      else{
        result.innerHTML = `Prompt result: ${clean}`;
      }
      dialog.close();
      return false;
    };
    return false;
  })


}
/* <script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/2.0.8/purify.min.js"></script>
let clean = DOMPurify.sanitize(dirty); */

