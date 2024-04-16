//Fetch default header tags
const module = () => {
    fetch('./components/nav.html')
    .then(response => response.text())
    .then((data) => {
         //something here
    });
    
    fetch('./components/footer.html')
    .then(response => response.text())
    .then((data) => {
         //something here
    });
    
    
};

export default module;
