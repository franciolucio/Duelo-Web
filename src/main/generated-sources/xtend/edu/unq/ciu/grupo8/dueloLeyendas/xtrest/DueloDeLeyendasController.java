package edu.unq.ciu.grupo8.dueloLeyendas.xtrest;

import java.io.IOException;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import juego.DatosDelJuego;
import org.eclipse.jetty.server.Request;
import org.eclipse.xtext.xbase.lib.Conversions;
import org.eclipse.xtext.xbase.lib.Extension;
import org.uqbar.xtrest.api.Result;
import org.uqbar.xtrest.api.XTRest;
import org.uqbar.xtrest.api.annotation.Controller;
import org.uqbar.xtrest.api.annotation.Get;
import org.uqbar.xtrest.http.ContentType;
import org.uqbar.xtrest.json.JSONUtils;
import org.uqbar.xtrest.result.ResultFactory;
import posicion.Posicion;

@Controller
@SuppressWarnings("all")
public class DueloDeLeyendasController extends ResultFactory {
  @Extension
  private JSONUtils _jSONUtils = new JSONUtils();
  
  @Get("/posiciones")
  public Result posiciones(final String target, final Request baseRequest, final HttpServletRequest request, final HttpServletResponse response) {
    Result _xblockexpression = null;
    {
      List<Posicion> _dasLasInstancias = DatosDelJuego.instance.todasLasInstancias();
      final Posicion[] posiciones = ((Posicion[])Conversions.unwrapArray(_dasLasInstancias, Posicion.class)).clone();
      response.setContentType(ContentType.APPLICATION_JSON);
      String _json = this._jSONUtils.toJson(posiciones);
      _xblockexpression = ResultFactory.ok(_json);
    }
    return _xblockexpression;
  }
  
  /**
   * @Post("/login")
   * def Result login() {
   * val s = "Hola"
   * response.contentType = ContentType.APPLICATION_JSON
   * ok(s.toJson)
   * }
   */
  public static void main(final String[] args) {
    XTRest.start(DueloDeLeyendasController.class, 7000);
  }
  
  public void handle(final String target, final Request baseRequest, final HttpServletRequest request, final HttpServletResponse response) throws IOException, ServletException {
    {
    	Matcher matcher = 
    		Pattern.compile("/posiciones").matcher(target);
    	if (request.getMethod().equalsIgnoreCase("Get") && matcher.matches()) {
    		// take parameters from request
    		
    		// take variables from url
    		
    		
    	    Result result = posiciones(target, baseRequest, request, response);
    	    result.process(response);
    	    
    		response.addHeader("Access-Control-Allow-Origin", "*");
    	    baseRequest.setHandled(true);
    	    return;
    	}
    }
    this.pageNotFound(baseRequest, request, response);
  }
  
  public void pageNotFound(final Request baseRequest, final HttpServletRequest request, final HttpServletResponse response) throws IOException, ServletException {
    response.getWriter().write(
    	"<html><head><title>XtRest - Page Not Found!</title></head>" 
    	+ "<body>"
    	+ "	<h1>Page Not Found !</h1>"
    	+ "	Supported resources:"
    	+ "	<table>"
    	+ "		<thead><tr><th>Verb</th><th>URL</th><th>Parameters</th></tr></thead>"
    	+ "		<tbody>"
    	+ "			<tr>"
    	+ "				<td>GET</td>"
    	+ "				<td>/posiciones</td>"
    	+ "				<td></td>"
    	+ "			</tr>"
    	+ "		</tbody>"
    	+ "	</table>"
    	+ "</body>"
    );
    response.setStatus(404);
    baseRequest.setHandled(true);
  }
}
