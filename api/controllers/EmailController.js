/**
 * EmailController
 *
 * @description :: Server-side logic for managing Email
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


	/**
	* `EmailController.sendContactEmail()`
	*/
	sendContactEmail: function (req, res) { 
		sails.hooks.email.send(
		  "testEmail",
		  {
		    fromEmail: req.param('address'),
		    message: req.param('message')
		  },
		  {
		    to: "churning.josh@gmail.com",
		    subject: "Hi there"
		  },
		  function(err) {
		  	if (err) {
		  		payload = true;
		  	}
		  	else {
		  		payload = false;
		  	}

		  	return res.json({
		  		payload
		  	});
		  }
		)
	}
};

