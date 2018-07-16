const jfHttpHeaders = require('jf-http-headers');
const jfServerBase  = require('../Base');
const jfServerPage  = require('../Page');
/**
 * Clase base para los punto de entrada de las peticiones.
 *
 * @namespace jf.server.method
 * @class     jf.server.method.Base
 * @extends   jf.server.Base
 */
module.exports = class jfServerMethodBase extends jfServerBase
{
    /**
     * Extensiones que gestiona la clase.
     *
     * @return {string[]} Listado de extensiones.
     */
    static get extensions()
    {
        return [];
    }

    /**
     * @override
     */
    constructor(config)
    {
        super();
        /**
         * Encabezados de la respuesta.
         *
         * @property headers
         * @type     {jf.HttpHeaders}
         */
        this.headers = new jfHttpHeaders();
        /**
         * Generador de la página.
         *
         * @property page
         * @type     {jf.request.Page}
         */
        this.page = new jfServerPage(config);
        /**
         * Manejador de la petición.
         *
         * @property request
         * @type     {http.IncomingMessage|null}
         */
        this.request = null;
        /**
         * Ruta raíz del servidor.
         *
         * @property root
         * @type     {string}
         */
        this.root = '';
        /**
         * Código HTTP de respuesta.
         *
         * @property statusCode
         * @type     {number|null}
         */
        this.statusCode = null;
        /**
         * TIpo de contenido de la respuesta.
         *
         * @property type
         * @type     {string}
         */
        this.type = 'text/html; charset=utf-8';
        //------------------------------------------------------------------------------
        if (config)
        {
            Object.assign(this, config);
        }
    }

    /**
     * Punto de entrada para el manejo de la petición.
     * Las clases hijas deberían sobrescribir este método.
     */
    async process()
    {
    }
};
