function on_load(){
				
			document.getElementById("default").click();
		
		}
		function nav_func(navName) {
				
			var i,navcontent;
			navcontent = document.getElementsByClassName("navcontent");
			for (i = 0; i < navcontent.length; i++) {
				navcontent[i].style.display = "none";
			}
			document.getElementById(navName).style.display = "block";
				
		}