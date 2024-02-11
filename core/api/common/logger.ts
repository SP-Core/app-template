// @ts-nocheck

interface Logger {
    readonly ROOT_LOGGER_NAME: string;
    getName(): string;
    makeLoggingEventBuilder(level: Level): LoggingEventBuilder;
    atLevel(level: Level): LoggingEventBuilder;
    isEnabledForLevel(level: Level): boolean;
    isTraceEnabled(): boolean;
    trace(msg: string, ...args: any[]): void;
    isTraceEnabledWithMarker(marker: Marker): boolean;
    atTrace(): LoggingEventBuilder;
    traceWithMarker(marker: Marker, msg: string, ...args: any[]): void;
    isDebugEnabled(): boolean;
    debug(msg: string, ...args: any[]): void;
    isDebugEnabledWithMarker(marker: Marker): boolean;
    atDebug(): LoggingEventBuilder;
    debugWithMarker(marker: Marker, msg: string, ...args: any[]): void;
    isInfoEnabled(): boolean;
    info(msg: string, ...args: any[]): void;
    isInfoEnabledWithMarker(marker: Marker): boolean;
    atInfo(): LoggingEventBuilder;
    infoWithMarker(marker: Marker, msg: string, ...args: any[]): void;
    isWarnEnabled(): boolean;
    warn(msg: string, ...args: any[]): void;
    isWarnEnabledWithMarker(marker: Marker): boolean;
    atWarn(): LoggingEventBuilder;
    warnWithMarker(marker: Marker, msg: string, ...args: any[]): void;
    isErrorEnabled(): boolean;
    error(msg: string, ...args: any[]): void;
    isErrorEnabledWithMarker(marker: Marker): boolean;
    atError(): LoggingEventBuilder;
    errorWithMarker(marker: Marker, msg: string, ...args: any[]): void;
}

enum Level{
    ERROR = 40,
    WARN = 30,
    INFO = 20,
    DEBUG = 10,
    TRACE = 10
}
