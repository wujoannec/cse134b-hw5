export function postReq() {
	const postButton = document.getElementById("postButton");
	postButton.addEventListener("click", (event) => {
		event.preventDefault();
		// let formData = new FormData(document.querySelector("#formy2"));
		document.getElementById("todays-date").value = new Date();
		const formy2Id = document.querySelector("#record-id");
		const formy2Name = document.querySelector("#article-name").value;
		const formy2Body = document.querySelector("#article-body").value;
		const formy2Date = document.querySelector("#todays-date").value; 
		const xhr = new XMLHttpRequest();
		let url = "https://httpbin.org/post";
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.onreadystatechange = () => { // Call a function when the state changes.
			const output = document.getElementById("outputty");
			if (xhr.readyState === XMLHttpRequest.DONE && xhr.status != 200){
				output.innerText = "Response: "+ xhr.status;
			}
			if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
				output.innerText = "Response: "+ xhr.status + '\n'+ xhr.responseText;
			}
		}
		const jsonObj = JSON.stringify({"recordId": formy2Id, "articleName": formy2Name, 
		"articleBody": formy2Body, "todaysDate": formy2Date});
		xhr.send(jsonObj);
	});
} 

export function getReq() {
	const getButton = document.getElementById("getButton");
	getButton.addEventListener("click", (event) => {
		event.preventDefault();
		const formy2Id = document.querySelector("#record-id");
		const formy2Name = document.querySelector("#article-name").value;
		const formy2Body = document.querySelector("#article-body").value;
		const formy2Date = document.querySelector("#todays-date").value; 
		let formData = new FormData(document.querySelector("#formy2"));			
		let url = new URL("https://httpbin.org/get");
		url.search = new URLSearchParams(formData);
		const output = document.getElementById("outputty");
		fetch(url, {
			method: 'GET',
	})
	.then(response => response.json())
	.then(data => {
		output.innerText = JSON.stringify(data, null, 2);
	})
	});
} 

export function putReq() {
	const putButton = document.getElementById("putButton");
	putButton.addEventListener("click", (event) => {
			event.preventDefault();
			const formy2Id = document.querySelector("#record-id").value;
			const formy2Name = document.querySelector("#article-name").value;
			const formy2Body = document.querySelector("#article-body").value;
			const formy2Date = document.querySelector("#todays-date").value; 
			const jsonObj = JSON.stringify({"articleName": formy2Name, 
				"articleBody": formy2Body, "todaysDate": formy2Date});
			let url = "https://httpbin.org/put";
			const output = document.getElementById("outputty");
			fetch(url, {
				method: 'PUT',
				body: jsonObj
			})
			.then(response => response.json())
			.then(data => {
				output.innerText = JSON.stringify(data, null, 2);
			})
		});
} 

export function deleteReq() {
	const deleteButton = document.getElementById("deleteButton");
	deleteButton.addEventListener("click", (event) => {
			event.preventDefault();
			console.log("ey");
			const formy2Name = document.querySelector("#article-name").value;
			const formy2Body = document.querySelector("#article-body").value;
			const formy2Date = document.querySelector("#todays-date").value; 
			const jsonObj = JSON.stringify({"articleName": formy2Name,
				"articleBody": formy2Body, "todaysDate": formy2Date});
			let formData = new FormData(document.querySelector("#formy2"));			
			let url = new URL("https://httpbin.org/delete");			
			url.search = new URLSearchParams(formData);

			fetch(url, {
				method: 'DELETE'
			})
			.then(response => response.json())
			.then(data => {
				const output = document.getElementById("outputty");
				output.innerText = JSON.stringify(data, null, 2);
			})
		});
} 