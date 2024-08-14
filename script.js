// frequently asked questions
let plusBtn = document.querySelector('.question');
let answer =document.querySelector('.answer');
// plusBtn.addEventListener('click',function(){
// 	// answer.style.height="auto";
// 	// answer.style.padding="2% 3%";
// 	answer.classList.toggle('active');
// });
console.log("hello");

// let questions = document.querySelectorAll('.questions');
// console.log(questions);
// console.log(questions.length);
// for(let i=0;i<questions.length;i++)
// {
// 	// questions[i].firstElementChild.addEventListenter('click',

// 	// 	()=>{
// 	// 		questions[i].lastElementChild.classList.add('active');
// 	// 		console.log(questions[i].lastElementChild.classList);
// 	// 	}

// 	// );
// 	let question = questions[i];
// 	console.log(question);
// 	question.addEventListener('click',function(){



// 	});
// }	

let ques = document.getElementsByClassName('questions');
console.log(ques.length);
for(let i=0;i<ques.length;i++)
{
	ques[i].addEventListener('click',function(){
		ques[i].classList.toggle("active");
		console.log(this.className);
		console.log("hello");
		
	});
}