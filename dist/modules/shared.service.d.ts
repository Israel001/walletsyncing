import { ConfigType } from '@nestjs/config';
import { SmtpConfiguration } from 'src/config/configuration';
import { IEmailDto } from 'src/types';
export declare class SharedService {
    private readonly smtpConfig;
    constructor(smtpConfig: ConfigType<typeof SmtpConfiguration>);
    sendEmail(email: IEmailDto): Promise<void>;
}
