/**
 * Gestion du formulaire
 */
window.addEventListener('DOMContentLoaded', function() {

    // get the form elements defined in your form HTML above
    var form = document.querySelector('#form-contact')
    var button = document.querySelector('#btn-form-submit')
    var status = document.querySelector('#form-status')
    var statusText = document.querySelector('#form-status span')
    var statusDot = document.querySelector('#dot-status')
    
    // Success and Error functions for after the form is submitted    
    function success() {
        form.reset()
        button.style = 'display: none'
        status.style = 'display: flex'
        status.classList.add('succes')
        statusDot.classList.add('svg-succes')
        statusText.innerHTML = 'Merci pour votre message !'
    }
    
    function error() {
        status.classList.add('erreur')
        status.sytle = 'display: flex'
        statusDot.classList.add('svg-erreur')
        statusText.innerHTML = 'Oups ! Il y a eu un problème.'
    }

    // handle the form submission event
    form.addEventListener('submit', function(ev) {
      ev.preventDefault()
      var data = new FormData(form)
      ajax(form.method, form.action, data, success, error)
    })
  })
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType)
      } else {
        error(xhr.status, xhr.response, xhr.responseType)
      }
    }
    xhr.send(data)
  }