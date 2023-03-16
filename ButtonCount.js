class ButtonCount extends HTMLElement{
    constructor() {
      super();

      let button = document.createElement("button");
      const shadow = this.attachShadow({ mode: "open" });
      let counter = 0;
      
      shadow.appendChild(button);
      button.addEventListener('click', function() {
        ++counter;
        button.innerText = "Times Clicked:" + " " + counter;
      })
      
      button.innerText = "Times Clicked: "
      button.innerText += counter;
    }
}

customElements.define("button-count", ButtonCount);