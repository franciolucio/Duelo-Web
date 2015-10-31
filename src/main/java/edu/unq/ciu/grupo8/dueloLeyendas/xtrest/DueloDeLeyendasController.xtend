package edu.unq.ciu.grupo8.dueloLeyendas.xtrest

import juego.DatosDelJuego
import org.uqbar.xtrest.api.Result
import org.uqbar.xtrest.api.XTRest
import org.uqbar.xtrest.api.annotation.Controller
import org.uqbar.xtrest.api.annotation.Get
import org.uqbar.xtrest.http.ContentType
import org.uqbar.xtrest.json.JSONUtils

@Controller
class DueloDeLeyendasController {
	extension JSONUtils = new JSONUtils
	
	@Get("/personajes")
	def Result personajes() {
    	val personajes = DatosDelJuego.instance.todasLasInstancias.clone
    	
		response.contentType = ContentType.APPLICATION_JSON
		ok(personajes.toJson)
	}
	
	def static void main(String[] args) {
		XTRest.start(DueloDeLeyendasController, 9000)
	}
}