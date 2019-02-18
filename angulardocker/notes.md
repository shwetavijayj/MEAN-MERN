Date : 28th Jan
-Pipes
-Routing
    - Single page App
    - Initialize routing environment.
        - @angular/router
         - RouteModule
            - manage route table for the current ngModule aka Angualr App.
        - Routes class
            - Represents a route table where each entry is "Route"
                - Route is json object that contains 
                    - path property aka template for uri
                    - component property this accepts the NG Component
                    - children property used to contain child-Routes aka Sub-routes
                    - redirect property, if no match found for 'component' then redirect to other(default) component.
                -Router class 
                    - navigate ([<ROUTE URIs>])method
                - ActivatedRoute
                    - The service object that keeps track of data used across routing.
                   - The [routerLink], the attribute directive generally used for <a> tag to define and execute routing
                   -The <router-outlet></router-outlet>, the component where all route views will be injected (showed).
            The "ModuleWithProviders" from "angualr/core" to load the route table from RouteModule in imports array of ngModule 

    - Secure call from angular to express REST APIs
        - Authentication  
        - Authorization 
    - Dockerization docker.com dockerhub.com
        - install docker for windows and having linux elevation
            - node + express
            - node + express + mongo
            - angualar Images
            - MEAN 
==========================================================================================================================================================================================================
29th Jan:

docs authoring pack : ext
changelog of ang. on github
Guarded Routing:
    - CanActivate
        This guard decides if a rooute canbe activated(or component gets used.) this guard is useful in the circumsrances where the user is not authorized to naviagate to the target comp. or the user might not be logged into the system
    - Can Deactivate
        this guard decides if the user can leave the comp(navigate away from current route) .this route is useful in where the user might have some pending changes, which was not saved. the candeactivate route allows us to ask user confirmation before leaving the component. 
    - Resolve
        This guard delays the activation of the route until tasks arre completed.you can use the guard to prefetch the data from backend API, before activating the route
    -CanLoad
        this guard is used to guard the roudes that load feature modules dynamically
    -CanActivateChild
        This guard determines whether a child route can be activated. 


            
==========================================================================================================================================================================================================
30th Jan '19
Practice of full application for authorization
docker


---------------> Commands for docker

//Build the container
docker build -t msabnisng

//run the container once it is build
docker run -it -v :/usr/src/app -v /usr/src/app/node_modules -p 9393:9393 --rm msabnisng

//Use the -d flag to run the container in the background:
docker run -d -v :/usr/src/app -v /usr/src/app/node_modules -p 9393:9393 --name msabnisng-container msabnisng

//stop the container

docker stop msabnisng-container

//remove the container 
docker rm msabnisng-container


//testing the App
    - @angular/<package>/testing folder
     - Function / LOgic testing
        - code Unit
        - Event triggered from UI
     - service testing
        - service method testing
        - mock for external dependencies
    - Test Platform 
        - testBedEnvironment
        - platformBrowserDynamicTestingModule //[Dom maniulation]
            - Manage Additional Dependencies
            - Mock - fake representation of actual object
        - Engine
            - Jasmine
                - Arrange
                - Act
                - Assert
            - Karma (Google)
                - Load the browser process
                - Manage all external dependencies
                - Load Angular Object Model
                - Karma + Jasmine + browser launcher
                 - karma.config.js
                   npm install -g karma
                   karma init <-command
            - @angular/cli
                - An integration with 
                    - Angular OM + Angular TestModel + Test Engine
                - npm install -g @angular/cli
                - ng tool
                    - new
                        - create a new Angular app
                    - generate
                        - generate
                            - component
                            - service
                            - directive
                    - build
                        - Optimize build based on AoT
                    - start
                        - execute
                    - test
                        - uses angular testing object model 
                            - test.ts file
                             - <FileName>.<FileType>.spec.ts
                             FileType
                                - Component
                                - service
                                - Directive
                    - lint
                        - language Quality check before check-in
            karma -w <-- watcher file  ==browser
            jasmine <-- console


