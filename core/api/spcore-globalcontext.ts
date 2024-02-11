class GlobalContext{
    MOD_ID: string;
    LOGGER: Logger;
    API_URL: string;

      getUserName(): string{return null}
      getUuid(): string{return null}
}

declare var globalContext: GlobalContext;


class TypeScriptClass{

}

declare function typeOf(v: any): TypeScriptClass;


