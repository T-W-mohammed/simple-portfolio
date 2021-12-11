
/*  Start header , menu , overlay*/

let overlay = document.createElement("div");


$(".header nav .container .btn").click(function(){

	// Show menu

	$(".links").css("left","0");

	// create overlay for body

	

	overlay.className ="overlay";

	document.body.appendChild(overlay);


});
$(".links .close i").click(function(){
	$(".links").css("left","-206px");
	overlay.remove();

});

/* End header , menu , overlay */

/* Start  images papup*/

	let sliderimg = document.querySelector(".slider .sliderbox img");
	
	let poimg = document.querySelectorAll(".shuffle .container .img img");

	
/*$(".shuffle .container .img img ").click(function(){

	$(".slider").css("display","block");
	img.src = poimg.src;

});*/
let currentimg 
poimg.forEach( image =>{
	image.addEventListener("click",(im)=>{
		
		


		$(".slider").css("display","block");
		
		sliderimg.src = image.src;
	});
});

$(".slider .sliderbox .sliderclose").click(function(){
	$(".slider").css("display","none");
	
	});

$(".slider .sliderbox .sliderarrowleft").click(function(){
		console.log("Previous");
	
	});
$(".slider .sliderbox .sliderarrowright").click(function(){
	console.log("Next");
	
	});
$(".slider .sliderbox .maxmize").click(function(){
	$(".slider .sliderbox img").css("width","90%");
	$(this).removeClass("fas fa-expand-arrows-alt").addClass("fas fa-compress ");

	
	});
$(".slider .sliderbox minimize").click(function(){
	console.log("minimize");
	$(".slider .sliderbox img").css("width","10%");
	
});

$(window).scroll(function(){
	$(".slider").css("display","none");
});
/*End images papup*/

// Create links According To The Number OF Sections

let Parent = document.querySelector(" body ");

let sections = Array.from(Parent.children);

let secNumber = sections.length;

let link = sections[0].getAttribute("class");

const links =document.querySelector(".links");


for (let i = 2 ;i < secNumber - 3 ; i++){
	
	let li = document.createElement("li");

	let a = document.createElement("a");

	a.innerHTML = sections[i].getAttribute("class");

	a.setAttribute("href","#" + sections[i].getAttribute("class"));

	sections[i].setAttribute("id",sections[i].getAttribute("class"));

	

	li.appendChild(a);

	links.appendChild(li);

		
}

$(".links li a").click(function(){

	$(".links").css("left","-220px");

	$(".overlay").remove();

});




// arrow to Up 

let arrowUp = document.createElement("div");

	arrowUp.className = "arrowUp";

let i = document.createElement("i");

	i.className = "fas fa-arrow-circle-up";

	arrowUp.appendChild(i);

	document.body.appendChild(arrowUp);

window.addEventListener("scroll",()=>{


	


	if(window.pageYOffset > 100){

		arrowUp.classList.add("active");
	}
	else{
		arrowUp.classList.remove("active");
	}
});


arrowUp.onclick = function(){
	window.scrollTo({

		top:0
	}); 
}