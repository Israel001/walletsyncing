import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SmtpConfiguration } from 'src/config/configuration';
import { SharedService } from './shared.service';

@Module({
  imports: [ConfigModule.forFeature(SmtpConfiguration)],
  providers: [SharedService],
  exports: [SharedService],
})
export class SharedModule {}
