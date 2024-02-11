// @ts-nocheck

class JObject{
    hashCode(): number;
    equals(obj: Object): boolean;
    clone(): Object;
    toString(): string;
    notify(): void;
    notifyAll(): void;
    wait(): void;
    wait(timeoutMillis: long);
    wait(timeoutMillis: long, nanos: int);
    finalize()
}

class Objects{
    static equals(a: Object, b: Object): boolean;
}

class Math{
    static pow(a: number, b: number): number;
}

class UUID extends JObject{

}

class nativeService{
    toFloat(i: number):number;
}
