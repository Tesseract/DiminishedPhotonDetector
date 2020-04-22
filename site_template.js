// JavaScript Document

function onLoadSetStyle() {
	var doc = document;	// get the document.
	var mainCon = doc.getElementsByClassName("mainContainer")[0];
	if(mainCon) {
		mainCon.style.position = "absolute";
		mainCon.style.left = "0px";
		mainCon.style.top = "0px";
		mainCon.style.right = "1360px";
		mainCon.style.bottom = "768px";
		mainCon.style.width = "1360px";
		mainCon.style.height = "768px";
		mainCon.style.backgroundColor = "grey";
	}
	else {
		console.log('Could not find element.');
	}
	onLoadSetBannerStyle();
	onLoadSetNavigationAndButtonStyle();
	OnLoadHideDropdownContent();
}

function onLoadSetBannerStyle() {
	var doc = document;
	var banner = doc.getElementsByClassName('banner')[0];
	if(banner) {
		banner.style.position = 'relative';
		banner.style.left = '0px';
		banner.style.top = '0px';
		banner.style.right = '1360px';
		banner.style.bottom = '200px';
		banner.style.width = '1360px';
		banner.style.height = '200px';
		banner.style.color = 'white';
		banner.style.backgroundColor = 'black';
	} else {
		console.log('Could not find element.');
	}
}

function onLoadSetNavigationAndButtonStyle() {
	var doc = document;
	var nav = doc.getElementsByClassName('navigation')[0];
	if(nav) {
		nav.style.position = 'fixed';
		nav.style.left = '10px';
		nav.style.top = '210px';
		nav.style.right = '200px';
		nav.style.bottom = '300px';
		nav.style.width = '200px';
		nav.style.height = '300px';
		nav.style.backgroundColor = '#111';
		nav.style.zIndex = '1';
		nav.style.overflowX = 'hidden';
		nav.style.paddingTop = '10px';
	}
	var buttons = doc.getElementsByClassName('button');
	for(var i = 0; i < buttons.length; i++) {
		if(buttons[i]) {
			buttons[i].style.position = 'relative';
			buttons[i].style.left = '0px';
			buttons[i].style.top = '0px';
			buttons[i].style.right = '200px';
			buttons[i].style.bottom = '25px';
			buttons[i].style.width = '200px';
			buttons[i].style.height = '25px';
			buttons[i].style.backgroundColor = 'black';
			buttons[i].style.color = 'white';
			buttons[i].style.textAlign = 'center';
			
		} else {
			console.log('Selector not found.');
		}
	}
}

function OnLoadHideDropdownContent() {
	var dropdown = document.getElementsByClassName("dropdown-btn");
	var i;
	
	for(i = 0; i < dropdown.length; i++) {
		dropdown[i].addEventListener('click', function() {
			this.classList.toggle("active");
			var dropdownContent = this.nextElementSibling;
			if(dropdownContent.style.display === "block") {
				dropdownContent.style.display = "none";
			} else {
				dropdownContent.style.display = "block";
			}
		});
	}
}