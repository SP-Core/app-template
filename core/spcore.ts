export class SpCore
{
    routes: RouteInfo[];
    commands: ConsoleCommand[];
    events: SpCoreEvents;
    constructor() {
        this.routes = [];
        this.events = new SpCoreEvents();
        this.commands = [];
      }

      addRoute(route: String, handler: RouteHandler) {
        this.routes.push({
            route: route,
            handler: handler
        });
      }
      addCommand(command: ConsoleCommand){
        this.commands.push(command);
      }
}

export class RouteInfo{
    route: String;
    handler: RouteHandler
}


export class RouteHandler{
  type:String
  render:Action;
  commandMap: CommandMapItem[];
  constructor(type: string) {
    this.type = type;
    this.commandMap = [];
  }

  static fromCommandMap(): RouteHandler{
    return new RouteHandler("command-map");
  }

  addCommand(name: string, command: string): RouteHandler{
    this.commandMap.push({
      name: name,
      command: command
    });
    return this;
  }


}


export class CommandMapItem{
  name: string;
  command: string;
}

export class ConsoleCommand{
  name: string;
  description: string;
  handler: ConsoleCommandHandler;
}

interface ConsoleCommandHandler{
  (manager: SelectionManager, args: string[]): void;
}


export class SpCoreEvents{

  end_client_ticks: Func_ActionResult[];
  start_client_ticks: Func_ActionResult[];
  use_block_callbacks: UseBlockAction[];
  constructor() {
    this.end_client_ticks = [];
    this.start_client_ticks = [];
    this.use_block_callbacks = [];
  }
  end_client_tick(handler: Func_ActionResult){
    this.end_client_ticks.push(handler);
  }
  start_client_tick(handler:Func_ActionResult){
    this.start_client_ticks.push(handler);
  }
  use_block_callback(handler: UseBlockAction){
    this.use_block_callbacks.push(handler);
  }
}


interface Action{
  (): void;
}

interface Func_ActionResult
{
  (): ActionResult;
}
interface UseBlockAction{
  (player: PlayerEntity, world: World, hand: Hand, hitResult: BlockHitResult): ActionResult;
}
