import {RouteHandler, SpCore} from '../core/spcore'
var core = new SpCore();
core.addRoute("/", RouteHandler.fromCommandMap()
    .addCommand("Hello world!", "Hello world!"))

export { core }
