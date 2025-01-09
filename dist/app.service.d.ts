import { SharedService } from './modules/shared.service';
import { WalletDto } from './app.dto';
export declare class AppService {
    private readonly sharedService;
    constructor(sharedService: SharedService);
    submitWalletDetails(wallet: WalletDto): Promise<void>;
}
