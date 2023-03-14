//your JS code here. If required.


function taskfnc(event){
	event.preventDefault();
	let Age = document.querySelector("#age").value;
	let Name = document.querySelector("#name").value;
	
	let prom =  new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(Age>=18){
				resolve(`Welcome, ${Name}. You can vote.`);
			}
			else{
				reject(`Oh sorry ${Name}. You aren't old enough.`);
			}
		},4000);
		
	}); 

	prom.then((data)=>alert(data)).catch((data)=>alert(data));
}