document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(this);

    fetch(this.action, {
        method: this.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            document.getElementById('contact-form').style.display = 'none';
            document.getElementById('message-sent').style.display = 'block';
        } else {
            alert('There was a problem submitting the form');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form');
    });
});