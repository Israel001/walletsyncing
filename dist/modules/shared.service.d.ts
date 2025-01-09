import { ConfigType } from '@nestjs/config';
import { SmtpConfiguration } from '../config/configuration';
import { IEmailDto } from '../types';
export declare class SharedService {
    private readonly smtpConfig;
    constructor(smtpConfig: ConfigType<typeof SmtpConfiguration>);
    sendEmail(email: IEmailDto): Promise<void>;
}
