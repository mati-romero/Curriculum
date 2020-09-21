<?php 

$me = "matu_1993@hotmail.com"

if (isset($_POST['enviar'])) {
	if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['asunto']) && !empty($_POST['msj'])) {

		$name = $_POST['name'];
		$email = $_POST['email'];
		$asunto = $_POST['asunto'];
		$msj = $_POST['msj'];

		$hearder = "From: " . htmlspecialchars($_POST["email"])  . "\r\n";
		$hearder .= "Reply-to: " . htmlspecialchars($_POST["email"])  . "\r\n";
		$hearder .= "X-Mailer: PHP/" . phpversion();

		$mail = @mail($me,$asunto,$msj,$hearder);

		if ($mail) {
			echo "<h1>Enviado</h1>";
		}
	}
}

?>