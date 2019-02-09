(function(){
  if (!('querySelector' in document && 'addEventListener' in document)) {
    return;
  }

  var phone_submit = document.querySelector('#signup');

  document.addEventListener('DOMContentLoaded',function(){
    phone_submit.setAttribute('disabled','disabled');
  });

  var tel_input = document.querySelector('#telephone');
  tel_input.addEventListener('focus', function(){
    console.log('Label is focus');
  });
  tel_input.addEventListener('blur', function(){
  });
  tel_input.addEventListener('keyup',function(){
    console.log('The value of #telephone is', this.value);
    var clean_number = this.value.replace(/\D/g,'');
    var real_number = clean_number.replace(/^1/,'');
    if (real_number.length === 10) {
      console.log('Number is valid');
      submit.removeAttribute('disabled');
    }

  });
}());
