import { AppService } from './app.service';
import { WalletDto } from './app.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    root(): Promise<void>;
    submitWalletDetails(body: WalletDto, files: {
        keystoreFile?: any[];
    }): Promise<void>;
}
