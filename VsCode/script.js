document.addEventListener('DOMContentLoaded', () => {
    fetch('https://a285-177-91-39-96.ngrok-free.app/api/user',{ headers: {
        'ngrok-skip-browser-warning': 'true'
    }})
        .then(response => response.json())
        .then(data => {
            document.getElementById('nome').textContent = data.name;
            document.getElementById('idade').textContent = data.age;
            document.getElementById('sobre-mim').textContent = data.aboutme;
        })
        .catch(error => {
            console.error('Erro ao buscar dados do usuário:', error);
        });
});