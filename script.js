const sendmail = async ()=>{
    let mail = document.getElementById('mail').value
    let subject = document.getElementById('subject').value
    let body = document.getElementById('body').value

    //console.log(mail,body,subject);
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer EwDQA8l6BAAUs5+HQn0N+h2FxWzLS31ZgQVuHsYAAeIxw2Jf4YYO4htSJWzVxIjR3TyC3gs3DrnsI+rmbV//I1rAGwB8tU4FgXIB04mbmURl6kB2e5om5yU0IGrPkBLhPqHJF9mdh7EudUEPm8enXQg/VtHgA46HE/Dv4nhNOlOQSh6uTzG/qtFrr7AIwDlNj37QOXA4375dIJwJkcuVvEIYJl9ETQ46g/V9arIRzrhm1Vu1TBDexpA+tpLpTQVioSC7V4BQo0jlvcd0Iy6kolXRxpW8gk8EuSUJmYEZqm35PyzYyFWv9twrGZcMGRZdqs/WbbKHyxBEpUlWpDGTWyRanAuHVmxrEMkaT2kvaRMQUS1aR08mwiDSBRgYBWoDZgAACJ5+R0FNgp6FoAI0jbHWISWTgcTtL/TMb3iQfGMqYLGfJc+0In+i3tXi6C/XNdGUeZTHzfB7lY6Y6XUTkP/oYpSlFXUeXMX9axPCcGR9IW7MjxDz3uaSIzPvrceWk3ax8VOWhnrZtLaZxt7C4XvnjWSySuNL+SR4K+VzjYFoZ8MXeDwIRqgf7Jv42zDFV/P8sPLEGi165J9NZ9haj325fugd0rU+JeiwnhYx6VoBnwpYwtwBgSJ1b6M9F+YzwWKJhEA7Xe9uo6VAtoO0RvcnI6kUe975gi6/qNsJ+NF7ngKUyfdG3UUQ7NV32sZOg9PaTtgzdqxPOVgvq+Ok3gDddyUTrVYpZtrCxcrmuml2SLnCNdWWio7Bpb0FAoO52Ad1RxHIgn8mahSa5jasNaAXDUPD73ya+7z8KrG50lH3ZZjEOpQRHHbG/llzXu5YcfqXVCfQuhldxztFOkJPqUMN+FwVTcdmco97LXseUpNfVHFamGnhRxTfTCDJUNTkvjmtX1kkCuzOFdEyZJA98AVW2V9cgFjncCnR15hjtF4juRHOLGwbJMQk+0JP+TEsYdZIig2xhdbJB+BHnM96or7LQ65MPm+NsWsFfpLrnWzmbc17nM0KOiTMmxsD7Dwm5Jwrg9nor1Bh1PG6/l/kBjYpPLfFyTGey975d93Clzr9Rk+PAsKp7A13vH4QYl8gQPUpndr714RS97vV+qwKubgSzXn99Iir21SLl5AGwdB9Db9XyDQQxqW/ftv1WBQk6sXJEM6YgYHgUa5USROeRggsPGurC32jl70U0yHXWb5oHmuRA8G0JgtAsN0qBEwraG5EBOYxxysFdHN8sznz8fe9zvWU3suS7xowY1KuYHx6rLxTy1DuB/6dVzV6jC/rcIB0GbqQgcEt7aa5snHJAg==");
    
    const raw = JSON.stringify({
      "message": {
        "subject": subject,
        "body": {
          "contentType": "Text",
          "content": body
        },
        "toRecipients": [
          {
            "emailAddress": {
              "address": mail
            }
          }
        ]
      }
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch("https://graph.microsoft.com/v1.0/me/sendMail", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
    
    // let response = await fetch("https://graph.microsoft.com/v1.0/me", requestOptions)
      
    // console.log(await response.json());




    alert("mail sended");
}