export declare enum Environment {
    Development = "development",
    Staging = "staging",
    Production = "production",
    Local = "local",
    Test = "test"
}
declare class EnvironmentVariables {
    NODE_ENV: Environment;
    SMTP_HOST: string;
    SMTP_PORT: string;
    SMTP_USERNAME: string;
    SMTP_PASSWORD: string;
}
export declare function validate(config: Record<string, unknown>): EnvironmentVariables;
export {};
