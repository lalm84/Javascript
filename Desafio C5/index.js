function reg1(usuario, hora) { 
	this.usuario = usuario;
	this.hora = hora;
}

function ingreso() {
        var login = new reg1("Juan Carlos", new Date());
        console.log(login);
}
