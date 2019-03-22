function alertar() {
	console.log("ALERTOU");
	alert("FUNFOU");
}


function CadastrarUsuario() {
	let nome = document.getElementById('nome').value;

	let email = document.getElementById('email').value;

	let senha = document.getElementById('senha1').value;

	let confirmaSenha = document.getElementById('senha2').value;

	if (senha == confirmaSenha) {

		event.preventDefault();
		firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
			.then(function () {

				return firebase.auth().createUserWithEmailAndPassword(email, senha).then(function () {
					user = firebase.auth().currentUser;
				})
					.then(function () {
						user.updateProfile({
							displayName: nome,
						});
						location.href = "./meusProblemas.html";
					})
					.catch(function (error) {

						let errorCode = error.code;
						let errorMessage = error.message;
						console.log(errorCode);
						console.log(errorMessage);
					});

			});
	} else {
		alert("Senhas não correspondentes");
	}
};

function autenticarUsuario() {
	event.preventDefault();
	email = document.getElementById("user").value;
	password = document.getElementById("senha").value;
	firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
		location.href = "./meusProblemas.html";
	})
		.catch(function (error) {
			let erroCode = error.code;
			let erroMessage = error.message;
			document.getElementById("erroMessage").innerText = erroMessage;
		});

}
function redefirSenha() {
	event.preventDefault();
	var auth = firebase.auth();
	email = document.getElementById("user1").value;
	auth.sendPasswordResetEmail(email).then(function () {

		console.log("Verifique seu email, para redefinir sua senha!");

	}).catch(function (error) {

		let erroCode = error.code;
		let erroMessage = error.message;
		document.getElementById("erroMessage").innerText = erroMessage;
	});
}
