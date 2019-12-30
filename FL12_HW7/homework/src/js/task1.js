const userEmail = 'user@gmail.com';
const adminEmail = 'admin@gmail.com';
const userPassword = 'UserPass';
const adminPassword = 'AdminPass';
const minEmailLength = 5;
const minPassLength = 6;
let email = prompt('Please enter your email','');

if (email === null || email === '') {
    alert('Canceled');
} else if (email.length < minEmailLength) {
    alert("I don't know any emails having name length less than 5 symbols");
} else if (email === userEmail || email === adminEmail) {

    let password = prompt('Enter password','');

    if (password === null || password === '') {
        alert('Canceled');
    } else if (email === userEmail && password === userPassword || email === adminEmail && password === adminPassword) {

        let verification = confirm('Do you want to change your password?');

        if(!verification) {
            alert('You have failed the change');
        } else if(verification) {

            let validate = prompt('Enter your old password','');

            if (validate === null || validate === '') {
                alert('Canceled');
            } else if (validate === userPassword || validate === adminPassword) {

              let newPassword = prompt('Enter new password','');

              if (newPassword === null || newPassword === '') {
                  alert('Canceled');
              } else if (newPassword.length < minPassLength) {
                  alert('It’s too short password. Sorry.');
              } else {

                  let confirmNewPassword = prompt('Enter your new password again','');

                  if (confirmNewPassword === newPassword) {
                      alert('You have successfully changed your password')
                  } else if (confirmNewPassword !== newPassword) {
                      alert('You wrote the wrong password.')
                  }
              }
            }
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}