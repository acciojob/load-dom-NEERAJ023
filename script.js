//your JS code here. If required.

function load(){
	
            // This function will be called when the DOM is fully loaded
          while (document.body.firstChild) {
                document.body.removeChild(document.body.firstChild);
            }
            // Display "DOM load success" on the web page
            var successMessage = document.createElement("p");
            successMessage.textContent = "DOM load success";
            document.body.appendChild(successMessage);

            // Clear the body content by removing all child elements
            
}