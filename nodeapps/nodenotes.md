-- Programming with node.js --

-Server-side Javascript
    -Node Modules
        -Standard Node.js object Model with predefined set of classes
      - Standard Modules
      - Developer designed Custom Modules
      - External Node.js application Modules
        - http://www.npmjs.com

**Node.js Standard Module**
- http
  - http2
    - define server
        - createServer(HttpRequestListener)
            - HttpRequestListener --> callback(Request,Response)
            - Request
                - uri property, used to read the requested uri for routing.
            - Response
                - writeHead() --> write response header values
                    - Content-type
                        - text/html
                        - application/json
                        - image/bmp or image/jpg
                - write() --> data tobe written in http body
                - end() --> send response and close the http session
    - define client for externally hosted services
        -createClient()

- path
- fs
  - File system Management on node.js server for current application
    - readFile() -- Async
    - readFileSync() -- sync
    - writeFile() -- Async
    - writeFileSync() -- sync
- util


**Module loading**
- the "require('<MODULE-NAME>')" object
    - the MODULE-NAME must be present in current scope 
        - Custom Module
        - Standard module
        - External Module must be installed
    - the "required()" will cache the module for the current workspace.

    **Node.js custom modules**
    - objects those exports functions/mehtods across other .js/.ts files
    - Mandatory in case of seggrigating logic across multiple maintainable files
    - module file with seperate exportable functions/mehtod
        - exports.<FUNCTION-NAME> = function(){..}
    - Module exporting whole objects with several functions
    - module.exports = {
        fx1:function(){..},
        fx2:function(){..}
    }
    - To use module in other file use 
        - var obj = require('<PATH of MODULE File>');

==========================================================================================================================================================================================================

Node.js with Promise
-Promise Module/ library 'q'
-provides following methods
    - the 'defer()'
        - starts monitoring Promise execution
        - the promise exe uses the 
    - the 'resolve()'
        - the promise successfully received success response
    - the 'reject()'
        - the method that listen to exception thrown by calle.

- http calls/ long running processes / sockets
- http request mechanism to call externally hosted REST Api's
    - http.request({server or host details and request type },callback for response)
        -HttpResponse object
          - the 'data' event 
            - Data received or being received 
          - the 'error' event
            - error occured
        - the 'on()' method to handle event
            - response.on()

==========================================================================================================================================================================================================

ajax --> $.ajax(),$http(),Http,HttpClient

headers:{
    "AUTHORIZATION":'Basic btoa(UserName:Password)'
}
headers:{
    "AUTHORIZATION":'Bearer grant_type<TOKEN>'
}

MONGOD --> COMAAND TO CONNECT TO DATA FOLDER WHERE ALL "DATA PAGES"
mongod --dbpath <PATH OF THE DATA FOLDER>


MONGO --> PROVIDE MONGO SHELL CLI

MongoDB connection string
mongodb://localhost/<COllection_name>
===========================================================================================================
the "cors()" node package to provide cross-domain 

npm install --save-dev cors
==========================================================================================================
load jsonwebtoken

topic to read-->
cryptopackage