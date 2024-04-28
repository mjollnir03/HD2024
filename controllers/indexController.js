
module.exports.loadIndexPage = async function(req, res) {
    res.render("index");
    
}

exports.loadAboutPage = function(req, res) {
    res.render('about', { title: 'About Us' }); // Make sure 'about' matches the name of your EJS file in views
};

exports.loadContactPage = function(req, res) {
    res.render('contact', { title: 'Contact Us' });  // Assuming 'contact' is the name of your EJS template for the contact page
};
