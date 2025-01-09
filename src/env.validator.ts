import { plainToInstance } from 'class-transformer';
import { IsEnum, IsString, validateSync } from 'class-validator';

export enum Environment {
  Development = 'development',
  Staging = 'staging',
  Production = 'production',
  Local = 'local',
  Test = 'test',
}

class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;
  @IsString()
  SMTP_HOST: string;
  @IsString()
  SMTP_PORT: string;
  @IsString()
  SMTP_USERNAME: string;
  @IsString()
  SMTP_PASSWORD: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });
  if (errors.length) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
