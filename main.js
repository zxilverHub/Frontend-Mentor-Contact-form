const submitBtn = document.getElementById('submit'),
    fname = document.getElementById('fname'),
    lname = document.getElementById('lname'),
    email = document.getElementById('email-address'),
    qtype = document.querySelector('.qtype'),
    msg = document.getElementById('message'),
    agree = document.getElementById('agreement'),
    success = document.querySelector('.success')

let isOkay = false


submitBtn.addEventListener('click', ()=> {  
    if(fname.value == '')
        fname.classList.add('true')
    else
        fname.classList.remove('true')

    if(lname.value == '')
        lname.classList.add('true')
    else
        lname.classList.remove('true')

    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!pattern.test(email.value))
        email.classList.add('true')
    else
        email.classList.remove('true')

    const qType = document.querySelector('input[type="radio"][name="query-type"]:checked')
    qtype.style.display = `${qType!=null? 'none' : 'block'}`

    if(msg.value == '')
        msg.classList.add('true')
    else
        msg.classList.remove('true')

    if(!agree.checked)
        agree.classList.add('true')
    else
        agree.classList.remove('true')

    if(
        fname.value!='' &&
        lname.value!='' &&
        pattern.test(email.value) &&
        msg.value!= '' &&
        qType!=null
    ) {
        success.classList.add('active')
        fname.value = ''
        lname.value = ''
        email.value = ''
        msg.value = ''
    } else {
        success.classList.remove('active')
    }
})

function querySelected(e) {
    const general = document.getElementById('general')
    const support = document.getElementById('support')

    if(e.target.value == 'general') {
        general.classList.add('active-query')
        support.classList.remove('active-query')
    } else {
        general.classList.remove('active-query')
        support.classList.add('active-query')
    }
}
