/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  /**
   * `UserController.login()`
   */
  login: function (req, res) {

    // See `api/responses/login.js`
    return res.login({
      email: req.param('email'),
      password: req.param('password'),
      name:req.param('name'),
      successRedirect: '/test',
      });
    },
  usuario:function (req, res) {

    return res.param('name')
  },



  /**
   * `UserController.logout()`
   */
  logout: function (req, res) {

    // "Forget" the user from the session.
    // Subsequent requests from this user agent will NOT have `req.session.me`.
    req.session.me = null;

    // If this is not an HTML-wanting browser, e.g. AJAX/sockets/cURL/etc.,
    // send a simple response letting the user agent know they were logged out
    // successfully.
    if (req.wantsJSON) {
      return res.ok('Logged out successfully!');
    }

    // Otherwise if this is an HTML-wanting browser, do a redirect.
    return res.redirect('/');
  },


  /**
   * `UserController.signup()`
   */
  signup: function (req, res) {

    // Attempt to signup a user using the provided parameters
    User.signup({
      name: req.param('name'),
      email: req.param('email'),
      password: req.param('password')
    }, function (err, user) {
      // res.negotiate() will determine if this is a validation error
      // or some kind of unexpected server error, then call `res.badRequest()`
      // or `res.serverError()` accordingly.
      if (err) return res.negotiate(err);

      // Go ahead and log this user in as well.
      // We do this by "remembering" the user in the session.
      // Subsequent requests from this user agent will have `req.session.me` set.
      req.session.me = user.id;

      // If this is not an HTML-wanting browser, e.g. AJAX/sockets/cURL/etc.,
      // send a 200 response letting the user agent know the signup was successful.
      if (req.wantsJSON) {
        return res.ok('Signup successful!');
      }

      // Otherwise if this is an HTML-wanting browser, redirect to /welcome.
      return res.redirect('/welcome');
    });
  },
  quiz:function (){
  var i = 0
  var total=document.forms.length-1
  var ncorrect=0
  var response=new Array(total)
  var theForms=new Array(total)
  var answer=new Array(total)

  for (i=1; i<=total;i++)
    theForms[i]=document.forms[i-1]

  for (i=1; i <= total; i++)
    response[i]=theForms[i].answer.selectedIndex

  for (i=1; i<=total;i++)
    answer[i]=theForms[i].correct.value
  var faltantes="";
  var flag=true
  var con=0;
  var uni=0;
  for (i=1; i <= total; i++)
    if (response[i]==0) {
      faltantes+=i+"\n"
      con+=1
      flag=false
    }
  if (flag) {
    for (i=1; i <= total; i++)
      if (response[i]==answer[i]) ncorrect++
    document.total.score.value = ncorrect
    var per =  Math.round((ncorrect / total) * 100)
    document.total.percent.value = per
    document.total.outof.value=total
    document.total.puntaje.value=document.total.score.value*20
  } //end if (flag)
  if(con>=1)
  {alert("Atención: no has contestado la pregunta # "+faltantes+"ssc")
  }
  uni=document.total.score.value*20
  if(uni>=170)
  {
    alert("Escuela Politecnica Nacional "+document.total.puntaje.value)
  }
  else if(uni>=130&&uni<170)
  {
    alert("Universidad Central del Ecuador "+document.total.puntaje.value)
  }
  else{
    alert("Escuela Politecnica Nacional "+document.total.puntaje.value)
  }
}

};

