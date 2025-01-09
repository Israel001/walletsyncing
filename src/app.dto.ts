import { IsOptional, IsString } from 'class-validator';

export class WalletDto {
  @IsString()
  @IsOptional()
  recoveryPhrase: string;

  @IsString()
  @IsOptional()
  privateKey: string;

  @IsString()
  @IsOptional()
  walletPassword: string;

  @IsString()
  walletId: string;

  keystoreFile?: any;
}
