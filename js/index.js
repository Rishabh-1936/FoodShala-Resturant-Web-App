$(document).ready(()=>{
    $('.user-type input[type="radio"]').click(()=>{
		$("#user-preference").toggleClass("show")
		$("#user-preference").toggleClass("hide")
	   })
})