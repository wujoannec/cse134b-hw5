export function postReq() {
	const postButton = document.getElementById("postButton");
	postButton.addEventListener("click", (event) => {
		event.preventDefault();
		document.getElementById("todays-date").value = new Date();
		const formy2Id = document.querySelector("#record-id");
		// console.log(formy2Id);
		const formy2Name = document.querySelector("#article-name").value;
		const formy2Body = document.querySelector("#article-body").value;
		const formy2Date = document.querySelector("#todays-date").value; 
		const xhr = new XMLHttpRequest();
		xhr.open("POST", 'https://httpbin.org/post', true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.onreadystatechange = () => { // Call a function when the state changes.
			if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
				const output = document.getElementById("outputty");
				output.innerText = xhr.response;
		}
		}
		const jsonObj = JSON.stringify({"recordId": formy2Id, "articleName": formy2Name, 
		"articleBody": formy2Body, "todaysDate": formy2Date});
		xhr.send(jsonObj);
	});
} 