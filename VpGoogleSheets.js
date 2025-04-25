const scriptURL = 'https://script.google.com/macros/s/AKfycbydJVL0smcWGALWsN8060HAWhtztWwTWjWhOkOp9pTUKYYggfi9ZMtqyZvstwZSoalA/exec'

const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit' , e =>{
    e.preventDefault()
    fetch(scriptURL,{method:'POST', body: new FormData(form)})
    .then(Response => alert("Thankyou ! Your form is Submitted 👌."))
    .then(() => {window.location.reload();})
    .catch(Error => console.error('Error !', error.message))
})